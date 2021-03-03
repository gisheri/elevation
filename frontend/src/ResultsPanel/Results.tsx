import React from 'react';
import { Paper } from '../utils/index';
import { useStyles } from './ResultsStyles';
import { NoResults } from './NoResults';
import { Result } from './Result';
import { Detail } from './Detail';
import { DetailProps } from './Detail';

export interface ResultsProps {
  detail: DetailProps['detail'];
  setDetail: DetailProps['setDetail'];
  results: [];
  getDetail: () => [];
}

export const Results: React.FC<ResultsProps> = ({
  results,
  getDetail,
  detail,
  setDetail,
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      {results.length === 0 && <NoResults />}
      {detail && <Detail detail={detail} setDetail={setDetail} />}
      {results &&
        !detail &&
        results.map((result, i) => (
          <Result key={i} result={result} getDetail={getDetail} />
        ))}
    </Paper>
  );
};
