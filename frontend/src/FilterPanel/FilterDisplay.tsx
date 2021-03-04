import { GroupFilters } from '../api/groups';
import {
  Paper,
  Select,
  MenuItem,
  Typography,
  filterConfigs,
  FaChild,
  KeyboardArrowDownIcon,
  smartDate,
  Switch,
} from '../utils/index';
import { BootstrapInput, useStyles } from './FilterStyles';

export type FilterDisplayProps = {
  filters: GroupFilters;
  handleChange: (filters: Partial<GroupFilters>) => void;
  handleSwitch: () => void;
};

export const FilterDisplay: React.FC<FilterDisplayProps> = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {filterConfigs.map((filter, i) => (
        <div key={i} className={classes.input}>
          <Typography variant='subtitle2'>{filter.title}</Typography>
          <Select
            id={`select-${filter.key}`}
            onChange={(e) => props.handleChange({ [filter.key]: e.target.value })}
            value={props.filters[filter.key]}
            input={<BootstrapInput />}
            name={filter.key}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value=''>View all</MenuItem>
            {filter.options.map((option, i) => (
              <MenuItem value={option.value} key={i}>
                {smartDate(option.name)}
              </MenuItem>
            ))}
          </Select>
        </div>
      ))}
      <Typography variant='subtitle2'>Zip Code</Typography>
      <BootstrapInput
        id='bootstrap-input'
        name='zip_code'
        className={classes.input}
        onChange={(e) => props.handleChange({ zip_code: e.target.value })}
      />
      <div className={classes.flex}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChild className={classes.icon} />
          <Typography variant='h5'>Child care provided</Typography>
        </div>
        <Switch
          checked={props.filters.child_care}
          onChange={(e) => props.handleSwitch()}
          name='child_care'
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    </Paper>
  );
};
