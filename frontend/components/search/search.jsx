import React from 'react';

import FilterForm from './filter_form';
import BenchIndex from './room_index';
import RoomMap from './../room_map/room_map';

const Search = ({ rooms, minPrice, maxPrice, updateFilter }) => (
  <div className="user-pane">
    <div className="left-half">
      <h5>Click Map to Add Room!</h5>
      <RoomMap
        roomes={roomes}
        updateFilter={updateFilter}
        singleBench={false} />
    </div>
    <div className="right-half">
      <FilterForm
        minPrice={minPrice}
        maxPrice={maxPrice}
        updateFilter={updateFilter} />
      <BenchIndex roomes={roomes} />
    </div>
  </div>
);

export default Search;
