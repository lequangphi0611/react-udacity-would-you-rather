import { FormEventHandler, PropsWithChildren } from 'react';
import { UseFormReturn, FieldValues, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

export type FormProps<T extends FieldValues> = PropsWithChildren<CommonProps & UseFormReturn<T> & {
    onSubmit: SubmitHandler<T>;
    onError?: SubmitErrorHandler<T>;
}>;
