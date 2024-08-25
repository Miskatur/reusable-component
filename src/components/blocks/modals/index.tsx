"use client";

import GenericModal from "@/components/shared/modals/genericModal";
import React, { useState } from "react";
import { UserCheck2, X } from "lucide-react";
import GenericButton from "@/components/shared/buttons/genericButton";
const Modals = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl font-semibold py-3 underline">Modal Example</h1>
      <div className="my-5">
        <GenericButton
          variant={"primary"}
          onClick={() => setIsViewModalOpen(true)}
        >
          Generic Modal
        </GenericButton>
        <GenericModal
          open={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          bodyClass="w-full"
        >
          <GenericModal.Body className="relative max-h-[90vh]  max-w-[97vw] 2xl:max-w-[1360px] w-full mx-auto rounded-lg bg-white p-5 overflow-x-hidden overflow-y-auto">
            <div className="flex space-x-3">
              <GenericModal.Icon>
                {" "}
                <UserCheck2 />
              </GenericModal.Icon>
              <GenericModal.Title className="mb-5">
                This is a Modal Title
              </GenericModal.Title>
            </div>
            <GenericModal.TriggerClose className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 bg-white p-[9px] rounded-full shadow m-4">
              <X />
            </GenericModal.TriggerClose>
            <div className="w-full ">
              Lorem ipsum dolor lorem900 sit amet consectetur adipisicing elit.
              Mollitia incidunt quam animi dolorem cumque quos reprehenderit
              commodi culpa eius dolores, maiores placeat sit provident ex fuga
              vel deserunt quidem fugiat pariatur saepe nulla quas itaque
              voluptates? Ducimus, pariatur illo molestiae blanditiis laborum
              incidunt laboriosam aspernatur doloribus? Fuga ullam eligendi,
              eaque et velit, a eum autem neque voluptate illo quo consectetur
              ipsum quos! Repudiandae blanditiis dolore exercitationem hic
              debitis ratione illum unde maxime in officiis odio ipsum
              aspernatur quo, obcaecati adipisci repellendus dolor nulla aut
              odit molestias itaque ipsa! Corrupti earum reiciendis, possimus
              veritatis ea repudiandae quod molestias qui exercitationem
              obcaecati suscipit minima, reprehenderit libero ipsa neque fugiat
              similique mollitia sapiente dolorem beatae molestiae. Porro eos
              eum ipsum accusamus molestiae ad, odio facere reiciendis quam
              neque molestias magni est distinctio recusandae sed natus odit
              nobis autem dolor temporibus enim sunt? Quibusdam autem cupiditate
              alias laboriosam. Iusto earum soluta nulla corporis culpa ratione
              nam ullam! Quod, voluptatem, corporis expedita quia odit beatae
              quasi ducimus dignissimos dolore hic voluptas? Est ad tempora
              minus quas eius autem in corporis ducimus delectus, architecto,
              impedit assumenda. Id doloribus libero sunt magnam fuga
              consectetur dolores soluta qui aliquam iusto laboriosam hic error
              et reiciendis, illo quam necessitatibus facere, veritati
            </div>
          </GenericModal.Body>
        </GenericModal>
      </div>
    </div>
  );
};

export default Modals;
