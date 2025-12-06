import React from "react";
import Chart from "react-apexcharts";

const TimesheetComplianceSummaryChart: React.FC = () => {
  // 🔥 Branch rule: weekly hours required to be compliant
  const branchWeeklyHours = 40;

  // 🔥 Employee weekly hours (inside component)
  const employees = [
    { name: "John", hours: 42 },
    { name: "Aditi", hours: 38 },
    { name: "Karan", hours: 40 },
    { name: "Sneha", hours: 33 },
    { name: "Ravi", hours: 20 },
  ];

  const compliantEmployees: string[] = [];
  const nonCompliantEmployees: string[] = [];

  employees.forEach((emp) => {
    if (emp.hours >= branchWeeklyHours) {
      compliantEmployees.push(emp.name);
    } else {
      nonCompliantEmployees.push(emp.name);
    }
  });

  const series = [compliantEmployees.length, nonCompliantEmployees.length];

  const options: ApexCharts.ApexOptions = {
    labels: ["Compliant", "Non-Compliant"],

    colors: ["#1E90FF", "#F4A300"], // Blue & Amber

    legend: {
      position: "bottom",
    },

    tooltip: {
      y: {
        formatter: (val: number, opts) => {
          const label = opts.w.globals.labels[opts.seriesIndex];

          if (label === "Non-Compliant") {
            return nonCompliantEmployees.length
              ? nonCompliantEmployees.join(", ")
              : "No Non-Compliant Employees";
          }
          return `${val} Employees`;
        },
      },
    },

    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          labels: {
            show: true,
            total: {
              show: true,
              label: "Total",
              formatter: () => `${series.reduce((a, b) => a + b, 0)}`,
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
    <div className="w-full flex justify-center">
      <Chart options={options} series={series} type="donut" width={420} />
    </div>
  );
};

export default TimesheetComplianceSummaryChart;
