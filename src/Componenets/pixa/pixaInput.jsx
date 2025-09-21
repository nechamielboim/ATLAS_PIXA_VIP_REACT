import React, { useRef } from 'react';

export default function PixaInput({ doApi }) {
  const inputRef = useRef();

  const onSearchClick = () => {
    doApi(inputRef.current.value);
  };

  return (
    <div className="bg-warning p-2">
      <div className="col-md-6 d-flex">
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              doApi(inputRef.current.value);
            }
          }}
          ref={inputRef}
          placeholder="Search for images..."
          type="text"
          className="form-control"
        />
        <button onClick={onSearchClick} className="btn btn-info">
          Search
        </button>
      </div>
    </div>
  );
}
