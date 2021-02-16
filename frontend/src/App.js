import './App.css';
import Filter from './components/Filter';
import Results from './components/Results';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { Typography } from '@material-ui/core';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant='h1'>Choose your eGroup</Typography>
        <Filter />
        <Results />
      </ThemeProvider>
    </>
  );
}

export default App;
