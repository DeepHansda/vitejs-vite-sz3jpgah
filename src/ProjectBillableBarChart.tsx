import React from 'react';
import Chart from 'react-apexcharts';

interface ProjectData {
  project: string;
  hours: number;
}

interface Props {
  data: ProjectData[];
}

const ProjectBillableBarChart: React.FC<Props> = ({ data }) => {
  const projectNames = data.map((p) => p.project);
  const projectHours = data.map((p) => p.hours);

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        // horizontal: true,
        borderRadius: 5,
        // dataLabels: {
        //   position: "right",
        // },
      },
    },
    colors: ['#1E90FF'], // Blue
    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val} hrs`,
      style: {
        fontSize: '13px',
      },
    },
    xaxis: {
      categories: projectNames,
      title: { text: 'Hours' },
    },
    yaxis: {
      title: { text: 'Projects' },
    },
    grid: { strokeDashArray: 5 },
  };

  const series = [
    {
      name: 'Hours',
      data: projectHours,
    },
  ];

  return (
    <div className="w-full">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={Math.max(300, data.length * 50)}
      />
    </div>
  );
};

export default ProjectBillableBarChart;
