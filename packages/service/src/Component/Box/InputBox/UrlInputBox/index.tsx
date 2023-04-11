import { urlInputStyle, urlInputWrapperStyle, urlPrefixStyle, urlWrapperStyle } from './style.css';

interface IUrlInputBox {
  id: string;
  label: string;
  value: string;
  prefix: string;
  regex: RegExp;
}

export const UrlInputBox = ({ id, label, value, prefix, regex }: IUrlInputBox) => {
  return (
    <div className={urlInputWrapperStyle}>
      <label htmlFor={id}>{label}</label>
      <div className={urlWrapperStyle}>
        <span className={urlPrefixStyle}>{prefix}</span>
        <input
          className={urlInputStyle}
          id={id}
          defaultValue={value ? (value.match(regex) ? value.split(prefix)[1] : '') : ''}
        />
      </div>
    </div>
  );
};
