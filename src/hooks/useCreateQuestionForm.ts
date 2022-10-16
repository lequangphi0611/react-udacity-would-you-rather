import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type Option = { value: string };

type CreateQuestionFormValues = { options: Option[] };

const validatesSchema = yup.object({
  options: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.string().required(),
      })
    )
    .min(2),
});

const useCreateQuestionForm = () => {
  const methods = useForm<CreateQuestionFormValues>({
    defaultValues: {
      options: [
        {
          value: '',
        },
        {
          value: '',
        },
      ],
    },
    resolver: yupResolver(validatesSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  return methods;
};

export default useCreateQuestionForm;
