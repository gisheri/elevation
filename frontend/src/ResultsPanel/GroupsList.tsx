import React, { useState } from 'react';
import { Paper } from '../utils/index';
import { useStyles } from './ResultsStyles';
import { NoResults } from './NoResults';
import { GroupDetails } from './GroupDetails';
import { GroupSummary } from './GroupSummary'
import { GroupModel } from '../api/groups';

export interface ResultsProps {
  groups: GroupModel[];
}

export const GroupsList: React.FC<ResultsProps> = ({
  groups,
}) => {
  const classes = useStyles();
  const [currGroup, setCurrGroup] = useState<GroupModel>();
  
  //not necessary because it's the same info as what's in the groups list
  // const getGroup = useCallback((id: string) => groupApi.getGroup(id)
  //   .then(res => setCurrGroup(res.data))
  //   .catch(console.error)
  //   , []);
  
  return (
    <Paper className={classes.paper}>
      {groups.length === 0 && <NoResults />}
      {currGroup
        ? <GroupDetails group={currGroup} goBack={ () => setCurrGroup(undefined)} />
        : groups.map((group, i) =>
          <GroupSummary key={i} group={group} onClick={() => setCurrGroup(group)} />
        )
      }
    </Paper>
  );
};
