import React from 'react';

import './style.css';

export function App(props) {
  const inputRef = React.useRef<HTMLInputElement>();
  console.log('Received...', inputRef);

  return (
    <div className="parent-div">
      <button
        onClick={() => {
          inputRef.current.style.display = 'block';
        }}
      >
        Show Field
      </button>

      <button
        onClick={() => {
          inputRef.current.style.display = 'none';
        }}
      >
        Hide Field
      </button>
      <input ref={inputRef} />
    </div>
  );
}
