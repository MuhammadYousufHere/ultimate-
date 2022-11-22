import { useState, useEffect } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState<string>('light');
  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  useEffect(() => {
    (function () {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    })();
  }, []);
  return { theme, toggleTheme };
};

export default useTheme;
