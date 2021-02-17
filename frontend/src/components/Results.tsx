import React from 'react';
import { Paper } from '../store/index';
import { useStyles } from './ResultsStyles';
import { NoResults } from './NoResults';
import {Result} from './Result';
import { Detail } from './Detail';
import { IDetail } from './Detail';

export interface IResults {
  detail: IDetail['detail'];
  setDetail: IDetail['setDetail'];
  results: [];
  getDetail: () => [];
}

export const Results: React.FC<IResults> = ({
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
