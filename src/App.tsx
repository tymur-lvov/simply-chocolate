import { useEffect, useState } from 'react';

import { Header, Main } from '@components';

export const App = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const resizeHandle = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandle);

    return () => window.removeEventListener('resize', resizeHandle);
  }, []);

  return (
    <div key={viewportWidth}>
      <Header />
      <Main />
    </div>
  );
};
