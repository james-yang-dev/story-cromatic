import { ThemeProvider } from '@emotion/react';
import { RecoilRoot } from 'recoil';

import { RouterManager } from '@src/routes/RouterManager';
import { Themes } from '@src/theme';

function App() {
  return (
    <ThemeProvider theme={Themes}>
      <RecoilRoot>
        <RouterManager />
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
