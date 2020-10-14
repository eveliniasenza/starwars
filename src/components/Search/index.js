import {MDBInput} from "mdbreact";
import React, {useState} from 'react';

export const Search = ({ search, setSearch }) => {
  const [_search, _setSearch] = useState('')
  return (
    <div className="md-form">
      <input
        type="text"
        className="form-control"
        placeholder="Search and hint enter..."
        onChange={ev => _setSearch(ev.target.value)}
        onKeyPress={(ev) => {
          if (ev.key === 'Enter') {
            setSearch(_search);
          }
        }}
      />
    </div>
  );
}
