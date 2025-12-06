import React from "react";
import Chart from "react-apexcharts";

const TaskEffortDistributionChart: React.FC = () => {
  // 🔥 Data lives inside the same component
  const data = [
    { task: "UI Development", hours: 12 },
    { task: "API Integration", hours: 8 },
    { task: "Testing", hours: 5 },
    { task: "Deployment", hours: 3 },
  ];

  const taskNames = data.map((t) => t.task);
  const taskHours = data.map((t) => t.hours);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
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
      categories: taskNames,
      title: { text: "Tasks" },
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
      name: "Effort (Hours)",
      data: taskHours,
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={400} />
    </div>
  );
};

export default TaskEffortDistributionChart;
