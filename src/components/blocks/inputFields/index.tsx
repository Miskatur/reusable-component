import GenericInputField from '@/components/shared/inputPlaceholders/genericInputField';
import InputFieldWithIcon from '@/components/shared/inputPlaceholders/inputFieldWithIcon';
import { CircleUserRound, Eye } from 'lucide-react';
import React from 'react';

const InputFields = () => {
    return (
        <div className="max-w-xl mx-auto mt-10">
        <h1 className="text-xl font-semibold py-3 underline">Input field</h1>
        <GenericInputField id="firstName" label="First Name" />
        <div className="my-3">
          <InputFieldWithIcon
            id="firstNameLeft"
            label="First Name Left Icon" 
            icon={<CircleUserRound height={24} width={24} />}
            iconPosition="left"
            placeholder="Type your full name"
          />
        </div>
        <InputFieldWithIcon
          id="firstNameRight"
          label="First Name Right Icon"
          icon={<Eye height={24} width={24} />}
          iconPosition="right"
          placeholder="Type your full name"
        />
      </div>
    );
};

export default InputFields;