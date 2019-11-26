import React from 'react';
import { useColorMode } from 'theme-ui';

export default props => {
  const [colorMode, setColorMode] = useColorMode();

  const nextMode = currentMode => {
    if (currentMode == 'light') return 'dark';
    if (currentMode == 'dark') return 'deep';
    if (currentMode == 'deep') return 'light';

    return 'light';
  };

  return (
    <header>
      <button
        onClick={e => {
          setColorMode(nextMode(colorMode));
        }}>
        Toggle to {nextMode(colorMode)} Theme
      </button>
    </header>
  );
};
