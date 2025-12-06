import { useState } from "react";
import "./App.css";
import BillableUtilizationChart from "./BillableUtilizationChart";
import EmployeeBillableDonutChart from "./EmployeeBillableDonutChart";
import EmployeeEffortContributionChart from "./EmployeeEffortContributionChart";
import EmployeeProjectHoursChart from "./EmployeeProjectHoursChart";
import EstimatedVsActualEffortChart from "./EstimatedVsActualEffortChart";
import ProjectBillableBarChart from "./ProjectBillableBarChart";
import TaskEffortDistributionChart from "./TaskEffortDistributionChart";
import TimesheetComplianceSummaryChart from "./TimesheetComplianceSummaryChart";
import VerticalProjectBillableChart from "./VerticalProjectBillableChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <ProjectBillableBarChart
            data={[
              { project: "E-Commerce App", hours: 48 },
              { project: "HR Portal", hours: 22 },
              { project: "API Backend", hours: 35 },
              { project: "CRM Revamp", hours: 17 },
            ]}
          />
        </div>
        <div>
          <BillableUtilizationChart billableHours={120} nonBillableHours={40} />
        </div>

        <div>
          <EmployeeBillableDonutChart
            data={[
              { name: "John", hours: 45 },
              { name: "Aditi", hours: 38 },
              { name: "Karan", hours: 22 },
              { name: "Sneha", hours: 30 },
            ]}
          />
        </div>
        <div>
          <VerticalProjectBillableChart
            data={[
              { project: "E-Commerce App", hours: 48 },
              { project: "HR Portal", hours: 22 },
              { project: "API Backend", hours: 35 },
              { project: "CRM Revamp", hours: 17 },
            ]}
          />
        </div>
        <div>
          <TaskEffortDistributionChart />
        </div>
        <div>
          <EmployeeProjectHoursChart />
        </div>
        <div>
          <EmployeeEffortContributionChart />
        </div>
        <div>
          <EstimatedVsActualEffortChart />
        </div>
        <div>
          <TimesheetComplianceSummaryChart/>
        </div>
      </div>
    </>
  );
}

export default App;
