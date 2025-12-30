'use client';

import { useField } from 'formik';
import Select from '@/components/formActions/select';

type Option = {
    value: string;
    label: string;
};

type Props = {
    name: string;
    options: Option[];
    ariaLabel: string;
    isRequired?: boolean;
};

export default function FormikSelect({
    name,
    options,
    ariaLabel,
    isRequired,
}: Props) {
    const [field, meta, helpers] = useField(name);

    return (
        <Select
            name={name}
            value={field.value}
            options={options}
            ariaLabel={ariaLabel}
            isRequired={isRequired}
            error={meta.touched && !!meta.error}
            onChange={(val) => helpers.setValue(val)}
        />
    );
}
