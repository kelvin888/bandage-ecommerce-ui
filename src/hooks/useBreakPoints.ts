import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

const useBreakpoints = (breakpoint: Breakpoint) => {
  const isMatched = useMediaQuery((theme:Theme) => theme.breakpoints.up(breakpoint));
  return isMatched;
};

export default useBreakpoints;
