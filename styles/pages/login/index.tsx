import styled from 'styled-components';
import { Form } from '../../../src/components/atoms';

export const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;

  background: url('/images/pexels-andreea-ch-1166644.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const LoginForm: typeof Form = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px 20px;
  justify-content: center;
  background-color: #ffffffd9;

  width: 500px;

  border: 1px solid #f5f5f5;
  border-radius: 8px;
` as typeof Form;

export const LoginText = styled.p`
  text-align: center;
  margin: 0;
`;

export const LoginNoteText = styled(LoginText)`
    color: ${({ theme }) => theme.backgrounds.secondaryDark};
`;

export const LoginActions = styled.div `
    display: flex;
    gap: 5px;
    flex-direction: column;
`;