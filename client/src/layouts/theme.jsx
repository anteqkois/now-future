const lightColors = {
  primary: '#6200EE',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#018786',
  background: '#FFFFFF',
  surface: '#FFFFFF',
  error: '#B00020',
  textOnPrimary: '#FFFFFF',
  textOnSecondary: '#000000',
  textOnBackground: '#000000',
};

const darkColors = {
  primary: '#BB86FC',
  primaryVariant: '#3700B3',
  secondary: '#03DAC6',
  secondaryVariant: '#03DAC6',
  background: '#121212',
  surface: '#121212',
  error: '#CF6679',
  textOnPrimary: '#000000',
  textOnSecondary: '#000000',
  textOnBackground: '#FFFFFF',
};

const typography = {
  H1: `font-family: 'Poppins'; font-weight: 300; font-size: 93px; letter-spacing: -1.5px;`,
  H2: `font-family: 'Poppins'; font-weight: 300; font-size: 58px; letter-spacing: -0.5px;`,
  H3: `font-family: 'Poppins'; font-weight: 400; font-size: 46px; letter-spacing: 0px;`,
  H4: `font-family: 'Poppins'; font-weight: 400; font-size: 33px; letter-spacing: 0.25px;`,
  H5: `font-family: 'Poppins'; font-weight: 400; font-size: 23px; letter-spacing: 0px;`,
  H6: `font-family: 'Poppins'; font-weight: 500; font-size: 19px; letter-spacing: 0.15px;`,
  subtitle1: `font-family: 'Poppins'; font-weight: 400; font-size: 15px; letter-spacing: 0.15px;`,
  subtitle2: `font-family: 'Poppins'; font-weight: 500; font-size: 13px; letter-spacing: 0.1px;`,
  body1: `font-family: 'Open Sans'; font-weight: 400; font-size: 16px; letter-spacing: 0.5px;`,
  body2: `font-family: 'Open Sans'; font-weight: 400; font-size: 14px; letter-spacing: 0.25px;`,
  button: `font-family: 'Open Sans'; font-weight: 500; font-size: 14px; letter-spacing: 1.25px; text-transform: uppercase;`,
  caption: `font-family: 'Open Sans'; font-weight: 400; font-size: 12px; letter-spacing: 0.4px;`,
  overline: `font-family: 'Open Sans'; font-weight: 400; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;`,
};
const zIndex = {
  levelMinus1: '-1000',
  level1: '1000',
  level2: '2000',
  level3: '3000',
  level4: '4000',
  level5: '5000',
  level6: '6000',
  level7: '7000',
  level8: '8000',
  level9: '9000',
  level10: '10000',
};

const spacing = {
  xxs: '4px',
  xs: '8px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl1: '40px',
  xl2: '48px',
  xl3: '56x',
  xl4: '64px',
  xl5: '72px',
  xl6: '80px',
  xl7: '88px',
  xl8: '96px',
};

const media = {
  huge: '@media (min-width: 1700px)',
  bigDesktop: '@media (min-width: 1440px)',
  desktop: '@media (min-width: 1150px)',
  bigTablet: '@media (min-width: 1020px)',
  tablet: '@media (min-width: 768px)',
  bigPhone: '@media (min-width: 400px)',
};

export const LightTheme = {
  colors: lightColors,
  typography,
  zIndex,
  spacing,
  media,
};
export const DarkTheme = {
  colors: darkColors,
  typography,
  zIndex,
  spacing,
  media,
};
