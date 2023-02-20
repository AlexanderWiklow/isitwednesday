import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [isWednesday, setIsWednesday] = useState(false);

  const weekday = new Date().getDay() === 3;
  
  useEffect(() => {
    setIsWednesday(weekday);
  }, [weekday]);

  return (
    <div className="App">
      <h1>Is it Wednesday?</h1>
      <h2 className={isWednesday ? 'yes' : 'no'}>{isWednesday ? 'Yes' : 'No'}</h2>
    </div>
  );
}
