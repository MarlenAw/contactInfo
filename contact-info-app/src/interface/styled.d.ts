// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      black?: string;
      blue?: string;
      blueCloud?: string;
      blueCloudDark?: string;
      blueDark?: string;
      blueDark2?: string;
      blueLight?: string;
      blueSky?: string;
      blueSkyDark?: string;
      blueSkyLight?: string;
      green?: string;
      greenDark?: string;
      greenForestLight?: string;
      greenForestDark?: string;
      greenLight?: string;
      grey?: string;
      greyDark?: string;
      greyDisabled?: string;
      greyIcons?: string;
      greyLight?: string;
      paleBlue2?: string;
      pink?: string;
      pinkLight?: string;
      pinkDark?: string;
      purple?: string;
      purpleLight?: string;
      purpleDark?: string;
      red?: string;
      redLight?: string;
      redDark?: string;
      white?: string;
      yellow?: string;
      yellowLight?: string;
      yellowDark?: string;
    };
  }
}