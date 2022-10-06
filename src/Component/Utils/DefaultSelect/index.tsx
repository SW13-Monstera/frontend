import { useState } from 'react';
import Select, { MultiValue, SingleValue } from 'react-select';
import { COLOR } from '../../../constants/color';
import { themeColors } from '../../../styles/theme.css';
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
        styles={customStyles}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          border: 0,

          colors: {
            ...theme.colors,
            primary: COLOR.PRIMARY,
            danger: COLOR.RED,
            primary25: COLOR.BACKGROUND.LIGHT_BLUE,
            neutral90: themeColors.text[5],
          },
        })}
        onChange={(e: MultiValue<IOption> | SingleValue<IOption>) => {
          onChange(e);
          if (isMulti) setSelectedOptions(e);
        }}
        isOptionDisabled={() =>
          isMulti && Array.isArray(selectedOptions) ? selectedOptions?.length >= maxNumber : false
        }
      />
    </div>
  );
};

const customStyles = {
  control: (provided: object) => ({
    ...provided,
    border: 'none',
    backgroundColor: themeColors.background.F8,
    width: '100%',
    minHeight: '3rem',
    fontWeight: '400',
    fontSize: '1rem',
    lineHeight: '1.4375rem',
    color: themeColors.text[5],
  }),
  placeholder: (provided: object) => ({
    ...provided,
    font: 'inherit',
    color: themeColors.text[9],
  }),
  option: (provided: object) => ({
    ...provided,
    font: 'inherit',
    color: themeColors.text[5],
  }),
  singleValue: (provided: object) => ({
    ...provided,
    font: 'inherit',
    color: themeColors.text[5],
  }),
  menuList: (provided: object) => ({
    ...provided,
    backgroundColor: themeColors.background.F8,
  }),
  input: (provided: object) => ({
    ...provided,
    font: 'inherit',
    color: themeColors.text[5],
  }),
};
