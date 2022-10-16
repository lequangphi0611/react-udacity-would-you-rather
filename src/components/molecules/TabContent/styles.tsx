import styled, { css } from 'styled-components';
import { TabContentContainerProps } from './types';

export const TabContentContainer = styled(
  ({ visible, ...rest }: TabContentContainerProps) => <div {...rest} />
)`
  width: 100%;
  height: 100%;

  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;
