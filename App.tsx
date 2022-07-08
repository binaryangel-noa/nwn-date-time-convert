import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>
        <label>Arelith date time</label>
        <div>
          <input type="date" min="0177-01-01" max="0179-01-01" />
          <input type="time" />
        </div>
      </div>
      <div>
        <label>Target datetime</label>
        <div>
          <input type="datetime-local" />
        </div>
      </div>
      <div>
        <label>Target in game datetime</label>
        <div>
          <input type="datetime-local" />
        </div>
      </div>
    </div>
  );
}
