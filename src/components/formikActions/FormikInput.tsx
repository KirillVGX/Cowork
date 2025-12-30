'use client';

import { useField } from 'formik';
import Input from '@/components/formActions/input';

type Props = {
    name: string;
    placeholder: string;
    type?: string;
    isRequired?: boolean;
    autoComplete?: string;
};

export default function FormikInput({
    name,
    ...props
}: Props) {
    const [field, meta] = useField(name);

    return (
        <Input
            {...props}
            id={name}
            name={name}
            value={field.value}
            onChange={field.onChange}
            error={meta.touched && !!meta.error}
        />
    );
}
