import React, { useState } from "react";
import Chart from "react-apexcharts";

interface AssignmentData {
  employee: string;
  assignment: string;
  hours: number;
}

const EmployeeEffortContributionChart: React.FC = () => {
  // 🔥 Full dataset inside component
  const allData: AssignmentData[] = [
    { employee: "John", assignment: "UI Development", hours: 12 },
    { employee: "John", assignment: "Bug Fixing", hours: 5 },
    { employee: "John", assignment: "API Testing", hours: 4 },

    { employee: "Aditi", assignment: "API Integration", hours: 10 },
    { employee: "Aditi", assignment: "Documentation", hours: 3 },

    { employee: "Karan", assignment: "Database Setup", hours: 8 },
    { employee: "Karan", assignment: "DevOps Support", hours: 6 },
  ];

  const employees = Array.from(new Set(allData.map((d) => d.employee)));

  const [selectedEmployee, setSelectedEmployee] = useState<string>(
    employees[0]
  );

  const filtered = allData.filter((item) => item.employee === selectedEmployee);

  const assignmentNames = filtered.map((f) => f.assignment);
  const hours = filtered.map((f) => f.hours);

  const totalHours = hours.reduce((a, b) => a + b, 0);

  const options: ApexCharts.ApexOptions = {
    labels: assignmentNames,

    legend: {
      position: "bottom",
      formatter: (seriesName: string, opts) => {
        const index = opts.seriesIndex;
        return `${seriesName}: ${hours[index]} hrs`;
      },
    },

    tooltip: {
      y: {
        formatter: (val: number, opts) => {
          const name = assignmentNames[opts.seriesIndex];
          return `${name}: ${val} hrs`;
        },
      },
    },

    colors: ["#1E90FF", "#F4A300", "#00C49F", "#FF6384", "#8A56E2"],

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total Hours",
              formatter: () => `${totalHours}`,
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
    },
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* 🔽 Employee Filter */}
      <select
        value={selectedEmployee}
        onChange={(e) => setSelectedEmployee(e.target.value)}
        className="border px-3 py-2 rounded-md"
      >
        {employees.map((emp) => (
          <option key={emp} value={emp}>
            {emp}
          </option>
        ))}
      </select>

      {/* Donut Chart */}
      <Chart options={options} series={hours} type="donut" width={420} />
    </div>
  );
};

export default EmployeeEffortContributionChart;
