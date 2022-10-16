import styled from 'styled-components';
import Input from '../../../Input';
import FieldGroup from '../FieldGroup';

export const RadioContainer = styled(FieldGroup)`

`;

export const RadioButton = styled(Input).attrs({
  type: 'radio',
})`
  min-width: 0;
  width: unset;
  height: unset;
`;
