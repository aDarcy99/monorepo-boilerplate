export type TTypographyToken = {
  family: Array<string>;
  size: string;
  weight: string;
  "line-height": string;
};

export type TRadiusToken = {};

export type TTextColorToken = {
  default: string;
  subtle: string;
  muted: string;
  "inverse-default": string;
  "inverse-subtle": string;
  "inverse-muted": string;
};

export type TSurfaceColorToken = {
  background: string;
  border: string;
  text: TTextColorToken;
};

export type TSemanticColorToken = {
  background: string;
  border: string;
  hovered: string;
  focused: string;
  selected: string;
  text: TTextColorToken;
};

export type TTheme = {
  typography: {
    display: TTypographyToken;
    title: TTypographyToken;
    subtitle: TTypographyToken;
    heading: TTypographyToken;
    body: TTypographyToken;
    caption: TTypographyToken;
    label: TTypographyToken;
    code: TTypographyToken;
    blockquote: TTypographyToken;
  };
  radius: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  color: {
    // Surfaces
    surfaces: {
      app: TSurfaceColorToken;
      content: TSurfaceColorToken;
      elevated: TSurfaceColorToken;
    };
    semantic: {
      neutral: TSemanticColorToken;
      brand: TSemanticColorToken;
      success: TSemanticColorToken;
      error: TSemanticColorToken;
      warning: TSemanticColorToken;
      info: TSemanticColorToken;
    };
  };
};
