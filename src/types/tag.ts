export interface ITagBox {
  id?: string;
  name: string;
  color?: 'color1' | 'color2' | 'color3' | 'color4';
  isFilter?: boolean;
}

export interface ITagState {
  id: string;
  name: string;
  isChecked: boolean;
}
