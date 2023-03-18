export type DefaultComponentType = {
  totalDuration: number;
  currentDuration: number;
  fadeIn?: number;
  fadeOut?: number;
  ignoreFadeIn?: boolean;
  ignoreFadeOut?: boolean
};

export type TextComponentProps = {
  fontSize?: string;
  variant?: 'left' | 'center' | 'right';
};
