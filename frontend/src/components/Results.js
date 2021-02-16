import React from 'react'
import { Paper, Select, MenuItem, Typography } from '@material-ui/core';
import { useStyles } from './FilterStyles'
export default function Results({ results }) {
    const classes = useStyles()
    console.log(results)
    return (
      <Paper className={classes.root}>
        <pre>{JSON.stringify(results, null, 2)}</pre>
      </Paper>
    );
}
