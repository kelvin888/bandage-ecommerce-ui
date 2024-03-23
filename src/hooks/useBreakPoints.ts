"use client"
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Breakpoint } from '@mui/material';

const useBreakpoints = (breakpoint: Breakpoint): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints?.up(breakpoint));
};

export default useBreakpoints;
