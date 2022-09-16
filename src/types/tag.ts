export interface ITagBox {
  name: string;
  color?: 'color1' | 'color2' | 'color3' | 'color4';
}

export interface ITagState {
  id: string;
  name: string;
  isChecked: boolean;
}
