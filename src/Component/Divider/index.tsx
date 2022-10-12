import { horizontalLineStyle } from './style.css';

interface IDivider {
  className?: string;
}

export const Divider = ({ className }: IDivider) => {
  return <div className={`${horizontalLineStyle} ${className}`} />;
};
