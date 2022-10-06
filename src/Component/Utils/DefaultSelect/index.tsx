import { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { IOption } from '../../../types/select';
import { defaultSelectWrapperStyle } from './style.css';

interface IDefaultSelect {
  label: string;
  options: IOption[];
  defaultValue: IOption | IOption[] | undefined;
  onChange: any;
  isMulti?: boolean;
  maxNumber?: number;
}

export const DefaultSelect = ({
  label,
  options,
  defaultValue,
  onChange,
  isMulti = false,
  maxNumber = 3,
}: IDefaultSelect) => {
  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<IOption> | SingleValue<IOption>
  >([]);
  return (
    <div className={defaultSelectWrapperStyle}>
      <label>{label}</label>
      <Select
        options={options}
        defaultValue={defaultValue}
        isMulti={isMulti}
        placeholder='입력...'
        isSearchable={true}
        onChange={(e: MultiValue<IOption> | SingleValue<IOption>) => {
          onChange(e);
          setSelectedOptions(e);
        }}
        isOptionDisabled={() =>
          Array.isArray(selectedOptions) ? selectedOptions.length >= maxNumber : true
        }
      />
    </div>
  );
};
