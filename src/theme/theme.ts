'use client';
import {  Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';



const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#23A6F0', 
        },
        secondary: {
          main: '#23856D', 
        },
        common: {
          white: '#ffffff', 
          black: '#000000', 
        },
        orange: {
            main: "#E77C40"
        }, 
        grey: {
          "400":"#E8E8E8",
            "500": "#FAFAFA", 
            "600":"#BDBDBD",
            "700": "#737373",
        }
      },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
