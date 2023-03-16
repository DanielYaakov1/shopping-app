import React, { memo } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export interface FilterProps {
  value: string;
  handleChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
}

const categories = ['TV', 'Radio', 'Sofa'];

const Filtering = memo(({ value, handleChange }: FilterProps) => {
  return (
    <FormControl
      style={{
        minWidth: '20%',
      }}>
      <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        label="Filter">
        <MenuItem value="">
          <div>
            <em>None</em>
          </div>
        </MenuItem>
        {categories.map((category) => {
          return (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
});
export default Filtering;
