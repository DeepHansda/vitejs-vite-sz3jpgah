import React from "react";
import Chart from "react-apexcharts";

const EmployeeProjectHoursChart: React.FC = () => {
  // 🔥 Data inside component (employee → hours)
  const data = [
    { employee: "John", hours: 42 },
    { employee: "Aditi", hours: 36 },
    { employee: "Karan", hours: 28 },
    { employee: "Sneha", hours: 31 },
  ];

  const employeeNames = data.map((e) => e.employee);
  const employeeHours = data.map((e) => e.hours);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        horizontal: false, // vertical bars
        borderRadius: 5,
        columnWidth: "45%",
      },
    },

    colors: ["#1E90FF"],

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val} hrs`,
      offsetY: -10,
      style: {
        fontSize: "12px",
      },
    },

    tooltip: {
      y: {
        formatter: (val: number) => `${val} hours`,
      },
    },

    xaxis: {
      categories: employeeNames,
      title: { text: "Employees" },
      labels: {
        rotate: -45,
        style: { fontSize: "12px" },
      },
    },

    yaxis: {
      title: { text: "Hours" },
    },

    grid: {
      strokeDashArray: 5,
    },
  };

  const series = [
    {
      name: "Project Hours",
      data: employeeHours,
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default EmployeeProjectHoursChart;
