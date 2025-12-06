import React from "react";
import Chart from "react-apexcharts";

const EstimatedVsActualEffortChart: React.FC = () => {
  // 🔥 Project-wise Estimated & Actual data (inside same component)
  const data = [
    { project: "E-Commerce App", estimated: 50, actual: 48 },
    { project: "HR Portal", estimated: 30, actual: 22 },
    { project: "API Backend", estimated: 40, actual: 35 },
    { project: "CRM Revamp", estimated: 25, actual: 28 },
  ];

  const projectNames = data.map((p) => p.project);
  const estimatedHours = data.map((p) => p.estimated);
  const actualHours = data.map((p) => p.actual);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      stacked: false,
      toolbar: { show: false },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 5,
      },
    },

    colors: ["#1E90FF", "#F4A300"],

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val} hrs`,
      offsetY: -10,
      style: { fontSize: "12px" },
    },

    xaxis: {
      categories: projectNames,
      title: { text: "Projects" },
      labels: {
        rotate: -45,
        style: { fontSize: "12px" },
      },
    },

    yaxis: {
      title: { text: "Hours" },
    },

    legend: {
      position: "bottom",
    },

    grid: { strokeDashArray: 5 },

    tooltip: {
      y: {
        formatter: (val: number) => `${val} hours`,
      },
    },
  };

  const series = [
    {
      name: "Estimated Hours",
      data: estimatedHours,
    },
    {
      name: "Actual Hours",
      data: actualHours,
    },
  ];

  return (
    <div className="w-full">
      <Chart options={options} series={series} type="bar" height={420} />
    </div>
  );
};

export default EstimatedVsActualEffortChart;
