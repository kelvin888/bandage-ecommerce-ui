// mui.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    orange?: {
        main: string
    };
    error?: {
      main: string
    }
  }
}
