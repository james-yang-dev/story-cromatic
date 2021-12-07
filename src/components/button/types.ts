export interface IButton {
  color: ButtonColors;
  onClick: () => void;
  label: string;
}

export type ButtonColors = 'PINK' | 'RED';
export const ButtonColorValue = {
  PINK: 'pink',
  RED: 'red',
};
