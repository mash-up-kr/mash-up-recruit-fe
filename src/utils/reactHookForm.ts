import { ValueOf } from '@/types';
import { FieldValues, UseFormTrigger } from 'react-hook-form';

export const validateForm = <F extends FieldValues>(
  trigger: UseFormTrigger<F>,
  formKey: ValueOf<F>,
) => {
  trigger(formKey);
};
