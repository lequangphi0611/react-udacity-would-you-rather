import AddCircleIcon from '@mui/icons-material/AddCircle';
import React, { FunctionComponent, useCallback } from 'react';
import { useFieldArrayContext } from '../../../../../contexts';
import Button from '../../../Button';

interface AppendFieldButtonProps {}

const AppendFieldButton: FunctionComponent<AppendFieldButtonProps> = React.memo(
  () => {
    const { append } = useFieldArrayContext();

    const appendField = useCallback(() => {
        append({}, { shouldFocus: true });
    }, [append]);
    return (
      <Button onClick={appendField}>
        <AddCircleIcon color='action' />
      </Button>
    );
  }
);

AppendFieldButton.displayName = 'AppendFieldButton';
export default AppendFieldButton;
