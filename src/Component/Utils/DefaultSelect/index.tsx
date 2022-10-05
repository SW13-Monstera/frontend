import Select from 'react-select';
import { defaultSelectWrapperStyle } from './style.css';

interface IDefaultSelect {
  label: string;
  options: any[];
  defaultValue: any[];
  isMulti?: boolean;
}

export const DefaultSelect = ({
  label,
  options,
  defaultValue,
  isMulti = false,
}: IDefaultSelect) => {
  return (
    <div className={defaultSelectWrapperStyle}>
      <label>{label}</label>
      <Select
        options={options}
        defaultValue={defaultValue}
        isMulti={isMulti}
        placeholder='입력...'
        isSearchable={true}
      />
    </div>
  );
};
