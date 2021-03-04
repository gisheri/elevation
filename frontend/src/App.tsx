import React, { useEffect } from 'react';
import { useState, useCallback } from 'react';
import { Filter } from './FilterPanel/Filter';
import { ThemeProvider } from './utils/index';
import { theme } from './theme';
import { Header } from './Header/Header';
import { getEmptyFilters, groupApi, GroupFilters, GroupModel } from './api/groups'
import { GroupsList } from './ResultsPanel/GroupsList'

const App: React.FC = () => {
  const [groups, setGroups] = useState<GroupModel[]>([]);

  const getGroups = useCallback((filters: GroupFilters) => groupApi.listGroups(filters)
    .then(res => setGroups(res.data))
    .catch(console.error)
  , []);

  useEffect(() => {
    getGroups(getEmptyFilters());
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Filter onFiltersChange={getGroups} />
        <GroupsList groups={groups} />
      </div>
    </ThemeProvider>
  );
}

export default App;
