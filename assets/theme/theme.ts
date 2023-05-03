import { extendTheme } from 'native-base';

export const customTheme = extendTheme({
  colors: {
    coolGray: {
      50: '#F0F0F0',
      200: '#979797',
      400: '#2C3440',
      600: '#222831',
      800: '#1D1D1D',
    },
  },
  // fontConfig: {
  //   Lato: {
  //     400: {
  //       normal: 'Lato-Regular',
  //     },
  //     700: {
  //       normal: 'Lato-Bold',
  //     },
  //   },
  // },
  // fonts: {
  //   heading: 'Lato',
  //   body: 'Lato',
  // },
});

type CustomThemeType = typeof customTheme;

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
