import React from 'react';
import { Paper } from '../store/index';
import { useStyles } from './ResultsStyles';
import NoResults from './NoResults';
import Result from './Result';
import Detail from './Detail';

export default function Results({ results, getDetail, detail }) {
  const classes = useStyles();
  
  return (
    <Paper className={classes.paper}>
      {results.length === 0 && <NoResults />}
      {detail && <Detail detail={detail} />}
      {results &&
        !detail &&
        results.map((result, i) => (
          <Result key={i} result={result} getDetail={getDetail} />
        ))}
    </Paper>
  );
}
