import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type QuestionsContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  useDefaultHeight?: boolean;
};

export const QuestionsContent = styled(
  ({ useDefaultHeight, ...props }: QuestionsContentProps) => <div {...props} />
)`
  width: 100%;

  ${({ useDefaultHeight }) =>
    useDefaultHeight &&
    css`
      height: 200px;
    `}
`;
