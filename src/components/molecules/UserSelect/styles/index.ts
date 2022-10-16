import Image from 'next/image';
import styled from 'styled-components';

export const OptionContainer: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    cursor: pointer;
  }
`;
