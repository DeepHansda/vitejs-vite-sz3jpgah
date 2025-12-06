import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProjectBillableBarChart from './ProjectBillableBarChart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ProjectBillableBarChart
          data={[
            { project: 'E-Commerce App', hours: 48 },
            { project: 'HR Portal', hours: 22 },
            { project: 'API Backend', hours: 35 },
            { project: 'CRM Revamp', hours: 17 },
          ]}
        />
      </div>
    </>
  );
}

export default App;
