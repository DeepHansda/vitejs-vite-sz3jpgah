import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ProjectBillableBarChart from './ProjectBillableBarChart';
import BillableUtilizationChart from './BillableUtilizationChart';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
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
        <div>
          <BillableUtilizationChart
            billableHours={120}
            nonBillableHours={40}
          />
        </div>


      </div>
    </>
  );
}

export default App;
