import * as React from 'react';
import { CardContent, CardStyled, CardTitle } from './styles';
import { CardProps } from './types';

const Card: React.FunctionComponent<CardProps> = ({
  children,
  className,
  title,
  renderTitle: RenderTitle,
  titleAlign,
  titleSize,
}) => {
  return (
    <CardStyled className={className}>
      {(title || RenderTitle) && (
        <CardTitle
          fontSize={titleSize}
          align={titleAlign}
          as={RenderTitle as never}
        >
          {title}
        </CardTitle>
      )}
      <CardContent>{children}</CardContent>
    </CardStyled>
  );
};

Card.displayName = 'Card';

export default Card;
