'use client';

import { useField } from 'formik';
import Textarea from '@/components/formActions/textarea';

type Props = {
    name: string;
    placeholder: string;
};

export default function FormikTextarea({
    name,
    ...props
}: Props) {
    const [field, meta] = useField(name);

    return (
        <Textarea
            {...props}
            id={name}
            name={name}
            value={field.value}
            onChange={field.onChange}
            error={meta.touched && !!meta.error}
        />
    );
}
