import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type SortingProps = {
  isSortingOption: any;
  handleSortingChange: ((event: SelectChangeEvent<any>, child: React.ReactNode) => void) | undefined;
};

export function Sorting({ isSortingOption, handleSortingChange }: SortingProps) {
  return (
    <FormControl
      style={{
        minWidth: '20%',
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label">Filter</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={isSortingOption}
        onChange={handleSortingChange}
        label="Filter"
      >
        <MenuItem value="">
          <div>
            <em>None</em>
          </div>
        </MenuItem>

        <MenuItem value="priceLow">Price lowest first</MenuItem>
        <MenuItem value="priceHigh">Price highest first</MenuItem>
        <MenuItem value="nameAsc">Sort A-Z</MenuItem>
        <MenuItem value="nameDesc">Sort Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
