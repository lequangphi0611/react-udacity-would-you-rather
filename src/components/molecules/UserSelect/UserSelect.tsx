import { find, map } from 'lodash';
import Image from 'next/image';
import React, { useMemo } from 'react';
import { GroupBase, OptionProps, components } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';
import { Avatar, SelectField } from '../../atoms';
import { OptionContainer } from './styles';
import { UserSelectProps } from './types';

const UserSelect = React.memo<UserSelectProps>(({ users, name }) => {
  const options = useMemo(
    () => map(users, (user) => ({ label: user.name, value: user.id })),
    [users]
  );

  const customComponents = useMemo(
    (): Partial<
      SelectComponents<SelectOption, false, GroupBase<SelectOption>>
    > => ({
      Option: (props: OptionProps<SelectOption>) => {
        const avatarUrl = find(users, { id: props.data.value })?.avatarURL;
        return (
          <components.Option {...props}>
            <OptionContainer>
              {avatarUrl && <Avatar size='50px' imageSrc={avatarUrl} />}
              <p>{props.data.label}</p>
            </OptionContainer>
          </components.Option>
        );
      },
    }),
    [users]
  );

  return (
    <SelectField
      name={name}
      options={options}
      placeholder='Select a User'
      isClearable
      components={customComponents}
    />
  );
});

UserSelect.displayName = 'UserSelect';
export default UserSelect;
