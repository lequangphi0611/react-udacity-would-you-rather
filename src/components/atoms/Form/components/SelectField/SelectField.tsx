/* eslint-disable react-hooks/rules-of-hooks */
import { find } from 'lodash';
import React, {
  FocusEventHandler,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import { Controller } from 'react-hook-form';
import ReactSelect, {
  ActionMeta,
  GetOptionLabel,
  GetOptionValue,
  SingleValue,
} from 'react-select';
import Select from 'react-select/dist/declarations/src/Select';
import { SelectFieldProps } from './types';

const getOptionValue: GetOptionValue<SelectOption | null> = (option) =>
  option?.value || '';

const getOptionLabel: GetOptionLabel<SelectOption | null> = (option) =>
  option?.label || option?.value || '';

const SelectField = React.memo<SelectFieldProps>(
  ({ name, options, placeholder, components, isClearable }) => {
    return (
      <Controller
        name={name}
        render={({ field }) => {
          const { onChange, onBlur, ref, value } = field;

          const optionValue = useMemo(() => {
            return find(options, { value });
          }, [value]);

          const selectRef = useRef<Select<SelectOption, false>>(null);

          useImperativeHandle(ref, () => {
            return (selectRef.current as Select<SelectOption, false>)
              .controlRef;
          });

          const handleChange = useCallback(
            (
              newValue: SingleValue<SelectOption | null>,
              _actionMeta: ActionMeta<SelectOption | null>
            ) => {
              onChange(newValue?.value);
            },
            [onChange]
          );

          const handleBlur: FocusEventHandler<HTMLInputElement> = useCallback(
            (_event_) => {
              onBlur();
            },
            [onBlur]
          );

          return (
            <ReactSelect
              options={options}
              value={optionValue}
              getOptionValue={getOptionValue}
              getOptionLabel={getOptionLabel}
              onChange={handleChange}
              placeholder={placeholder}
              onBlur={handleBlur}
              ref={selectRef}
              components={components}
              isClearable={isClearable}
            />
          );
        }}
      />
    );
  }
);

SelectField.displayName = 'SelectField';
export default SelectField;
