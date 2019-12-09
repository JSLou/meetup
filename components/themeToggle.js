import { Button } from '@theme-ui/components';
import React from 'react';
import { useColorMode } from 'theme-ui';

export default () => {
  const [colorMode, setColorMode] = useColorMode();

  const nextMode = ({ currentMode }) => {
    console.log(currentMode);
    if (currentMode == 'light') return 'dark';
    if (currentMode == 'dark') return 'deep';
    if (currentMode == 'deep') return 'light';

    return 'light';
  };

  return (
    <Button
      onClick={e => {
        setColorMode(nextMode(colorMode));
      }}>
      Toggle to {nextMode(colorMode)} Theme
    </Button>
  );
};
