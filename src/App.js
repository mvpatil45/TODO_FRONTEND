import { ThemeProvider } from '@mui/material';
import Paths from './Routes';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paths/>
    </ThemeProvider>
  );
}

export default App;
