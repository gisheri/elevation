import { useState, useCallback } from 'react';
import { Filter } from './FilterPanel/components/Filter.tsx';
import { Results } from './components/Results.tsx';
import { ThemeProvider } from './utils/index';
import { theme } from './theme';
import axios from 'axios';
import { Header } from './components/Header.tsx';

function App() {
  const [results, setResults] = useState();
  const [detail, setDetail] = useState('');

  const getResults = useCallback(async function getResults(query) {
    try {
      const result = await axios.get(query);
      setResults(result.data);
    } catch (error) {
      console.error(error);
    }
  }, [])

  const getDetail = useCallback(async function getDetail(id) {
    try {
      let url = 'http://localhost:8000/groups/';
      let result = await axios.get(`${url}/${id}`);
      setDetail(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Filter getResults={getResults} />
        {results && (
          <Results
            results={results}
            getDetail={getDetail}
            detail={detail}
            setDetail={setDetail}
          />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
