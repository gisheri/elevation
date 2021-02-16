import './App.css';
import Filter from './components/Filter';
import Results from './components/Results';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Choose your eGroup</h1>
        <Filter />
        <Results />
      </ThemeProvider>
    </>
  );
}

export default App;
