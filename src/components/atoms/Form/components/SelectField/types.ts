import { ControllerRenderProps } from 'react-hook-form';
import { GroupBase } from 'react-select';
import { SelectComponents } from 'react-select/dist/declarations/src/components';

export type SelectProps = CommonProps & {
  options: SelectOptions;
  placeholder?: string;
  components?: Partial<
    SelectComponents<SelectOption, false, GroupBase<SelectOption>>
  >;
  isClearable?: boolean;
};

export type SelectFieldProps = SelectProps & {
  name: string;
};
