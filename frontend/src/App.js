import { useState } from 'react';
import Filter from './components/Filter';
import Results from './components/Results';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import { Typography } from '@material-ui/core';
import { logo } from './store/index';
import axios from 'axios';
import Header from './components/Header';

function App() {
  const [results, setResults] = useState();
  async function getResults(query) {
    try {
      const result = await axios.get(query);
      setResults(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Filter getResults={getResults} />
        {results && <Results results={results} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
