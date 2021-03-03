import {
  Paper,
  Select,
  MenuItem,
  Typography,
  filters,
  FaChild,
  KeyboardArrowDownIcon,
  smartDate,
  Switch,
  FilterKey,
} from '../utils/index';
import { FormValues } from './Filter';
import { BootstrapInput, useStyles } from './FilterStyles';

export type FilterDisplayProps = {
  formFields: FormValues;
  handleChange: (key: FilterKey, value: unknown) => void;
  handleSwitch: () => void;
};

export const FilterDisplay: React.FC<FilterDisplayProps> = function FilterDisplay(
  props
) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      {filters.map((filter, i) => (
        <div key={i} className={classes.input}>
          <Typography variant='subtitle2'>{filter.title}</Typography>
          <Select
            labelId=''
            id='demo-simple-select'
            onChange={(e) => props.handleChange(filter.key, e.target.value)}
            defaultValue=''
            value={props.formFields[filter.key]}
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
        onChange={(e) => props.handleChange('zip_code', e.target.value)}
      />
      <div className={classes.flex}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaChild className={classes.icon} />
          <Typography variant='h5'>Child care provided</Typography>
        </div>
        <Switch
          checked={props.formFields.child_care}
          onChange={(e) => props.handleSwitch()}
          name='child_care'
          color='primary'
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </div>
    </Paper>
  );
};
