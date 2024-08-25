import { cn } from "@/libs/utils";
import { X } from "lucide-react";
import {
  MouseEventHandler,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";

type TModal = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  bodyClass?: string;
};

type TModalContext = {
  onClose: () => void;
};

type THeader = {
  children: ReactNode;
  className?: string;
};

type THeaderLeft = {
  children: ReactNode;
  className?: string;
};

type TIcon = {
  children: ReactNode;
  className?: string;
};

type TTitle = {
  children: string;
  className?: string;
};

type TModalBody = {
  children: ReactNode;
  className?: string;
};

type TTriggerClose = {
  children?: string | ReactNode;
  className?: string;
};

// ==== MODAL CONTEXT PROVDER ====
const ModalContext = createContext<TModalContext | null>(null);

const GenericModal = ({ children, onClose, open, bodyClass }: TModal) => {
  // ==== MODAL REF ====
  const modalRef = useRef<HTMLDivElement>(null);

  // ==== HANDLING OUTSIDE CLICK ====
  const handleOutsideClick: MouseEventHandler<HTMLDivElement> = (e) => {
    // CHECK IF TEXT IS SLECTED OR NOT
    const selection = window.getSelection()?.toString();
    if (selection && selection !== "") {
      return;
    }
    // CHECK IF THE CLICK OUTSIDE MODAL
    if (!modalRef?.current?.contains(e?.target as Node)) {
      onClose();
    }
  };

  // ==== HANDLING `Escape` KEY PRESS ====
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  // ==== HANDLING HIDE SCROLLBAR ====
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <ModalContext.Provider value={{ onClose }}>
      {open && (
        <div
          onClick={handleOutsideClick}
          className="h-screen w-full fixed inset-0 bg-[#2B2B2B]/65 flex items-center justify-center z-[999]"
        >
          <div ref={modalRef} className={bodyClass}>
            {children}
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

// MODAL HEADER SECTION
const Header = ({ children, className }: THeader) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-between gap-4 bg-[#F0F0F0] px-6 py-3 rounded-t-md",
        className
      )}
    >
      {children}
    </div>
  );
};
GenericModal.Header = Header;

// MODAL HEADER LEFT SECTION
const HeaderLeft = ({ children, className }: THeaderLeft) => {
  return (
    <div className={cn("w-full flex items-center gap-2", className)}>
      {children}
    </div>
  );
};
GenericModal.HeaderLeft = HeaderLeft;

// MODAL ICON
const Icon = ({ children, className }: TIcon) => {
  return (
    <div className={cn("text-2xl text-[#121619]", className)}>{children}</div>
  );
};
GenericModal.Icon = Icon;

// MODAL TITLE
const Title = ({ children, className }: TTitle) => {
  return (
    <h2
      className={cn(
        "text-base text-[#121619] font-semibold font-roboto",
        className
      )}
    >
      {children}
    </h2>
  );
};
GenericModal.Title = Title;

// MODAL BODY
const Body = ({ children, className }: TModalBody) => {
  return <div className={cn("", className)}>{children}</div>;
};
GenericModal.Body = Body;

// MODAL CLOSE
const TriggerClose = ({ children, className }: TTriggerClose) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button
      onClick={onClose}
      className={cn("text-xl text-[#7F7F7F]", className)}
    >
      {children ? children : <X />}
    </button>
  );
};
GenericModal.TriggerClose = TriggerClose;

export default GenericModal;
