import { PaletteMode, ThemeOptions } from '@mui/material';

export const getDesignTokens = (
  mode: PaletteMode,
  primaryOne: string | null,
  secondaryOne: string | null
): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: primaryOne ?? '#1B9BD7'
    },
    secondary: {
      main: secondaryOne ?? '#126c96'
    },
  },
});
