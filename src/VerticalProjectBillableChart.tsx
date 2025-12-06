import React from "react";
import Chart from "react-apexcharts";

interface ProjectData {
  project: string;
  hours: number;
}

interface Props {
  data: ProjectData[];
}

const VerticalProjectBillableChart: React.FC<Props> = ({ data }) => {
  const projectNames = data.map((p) => p.project);
  const billableHours = data.map((p) => p.hours);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false, // 👉 vertical bars
        borderRadius: 5,
        columnWidth: "45%",
      },
    },
    colors: ["#1E90FF"],

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val} hrs`,
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#000"],
      },
    },

    tooltip: {
      y: {
        formatter: (val: number) => `${val} billable hours`,
      },
    },

    xaxis: {
      categories: projectNames,
      title: { text: "Projects" },
      labels: {
        rotate: -45, // better for long project names
      },
    },

    yaxis: {
      title: { text: "Hours" },
    },

    grid: { strokeDashArray: 5 },
  };

  const series = [
    {
      name: "Billable Hours",
      data: billableHours,
    },
  ];

  return (
    <div className="w-full">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={400}
      />
    </div>
  );
};

export default VerticalProjectBillableChart;
