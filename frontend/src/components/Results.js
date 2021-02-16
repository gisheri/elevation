import React from 'react';
import { Paper } from '../store/index';
import { useStyles } from './ResultsStyles';
import Result from './Result';

export default function Results({ results }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      {results.map((result, i) => (
        <Result key={i} result={result} />
      ))}
    </Paper>
  );
}
