import React, { useState, useEffect } from 'react';
import { useTheme } from '@material-ui/styles';

export default function Title() {
  const theme = useTheme();
  const [themeState, setTheme] = useState('light');
  useEffect(() => {
    setTheme(theme.palette.type);
  });
  return (
    <svg width="38px" height="43px" viewBox="0 0 38 43" version="1.1">
      <defs>
        <linearGradient x1="34.5063846%" y1="15.1303808%" x2="20.8153155%" y2="110.664023%" id="titleLinearGradient-1">
          <stop stopColor={themeState === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} offset="0%" />
          <stop stopColor={themeState === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light} offset="100%" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="hexaLinearGradient-3">
          <stop stopColor={theme.palette.secondary.main} offset="0%" />
          <stop stopColor={theme.palette.secondary.light} offset="100%" />
        </linearGradient>
      </defs>
      <defs>
        <linearGradient x1="66.8412844%" y1="30.62426%" x2="-21.0581447%" y2="100%" id="hexaLinearGradient-2">
          <stop stopColor={theme.palette.primary.main} offset="0%" />
          <stop stopColor={theme.palette.primary.light} offset="100%" />
        </linearGradient>
      </defs>
    </svg>
  );
}
