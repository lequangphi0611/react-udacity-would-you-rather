import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type LoginFormValues = { username: string };

const validatesSchema = yup.object({
  username: yup.string().required('Username is required.'),
});

const useLoginForm = () => {
  const methods = useForm<LoginFormValues>({
    defaultValues: {
      username: '',
    },
    resolver: yupResolver(validatesSchema),
    mode: 'all',
    reValidateMode: 'onChange',
  });

  return methods;
};

export default useLoginForm;
