import { NextPage } from 'next';
import React, { useCallback } from 'react';
import { Button, Link } from '../../src/components/atoms';
import { UserSelect } from '../../src/components/molecules';
import { redirectWhenAuthenticated } from '../../src/hocs';
import { useLogin, useLoginForm, useUsers } from '../../src/hooks';
import {
  LoginActions,
  LoginForm,
  LoginNoteText,
  LoginPageStyled,
  LoginText,
} from '../../styles/pages/login';

export async function getStaticProps() {
  return {
    props: {
      title: 'Login',
    },
  };
}

const LoginPage: NextPage = React.memo(() => {
  const methods = useLoginForm();

  const { login, isLoading } = useLogin();

  const onSubmit = useCallback(
    ({ username }: { username: string }) => {
      login({ username, password: '' });
    },
    [login]
  );

  const { data: users } = useUsers();

  const { formState } = methods;

  return (
    <LoginPageStyled>
      <LoginForm onSubmit={onSubmit} {...methods}>
        <div>
          <LoginText as='h2'>Welcome to the Would You Rather App!</LoginText>
          <LoginNoteText>Please sign in to continue</LoginNoteText>
        </div>

        <UserSelect name='username' users={users} />
        <LoginActions>
          <Button
            disabled={!formState.isValid || isLoading}
            color='primary'
            type='submit'
          >
            Log In
          </Button>
          <LoginText>
            <Link href='/register'>Register new Account</Link>
          </LoginText>
        </LoginActions>
      </LoginForm>
    </LoginPageStyled>
  );
});

LoginPage.displayName = 'LoginPage';
export default redirectWhenAuthenticated(LoginPage);
