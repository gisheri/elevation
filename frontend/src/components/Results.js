import React from 'react';
import { Paper } from '../store/index';
import { useStyles } from './ResultsStyles';
import NoResults from './NoResults'
import Result from './Result';

export default function Results({ results }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {results.length === 0 && <NoResults />}
      {results.map((result, i) => (
        <Result key={i} result={result} />
      ))}
    </Paper>
  );
}
