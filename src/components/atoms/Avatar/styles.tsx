import Image from 'next/image';
import styled from 'styled-components';
import { AvatarProps, ImageStyledProps } from './types';

export const ImageStyled = styled(({ className }: AvatarProps) => (
  <div className={className} />
))`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: url(${({ imageSrc }) => imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
