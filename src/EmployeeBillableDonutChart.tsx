import React from "react";
import Chart from "react-apexcharts";

interface EmployeeHour {
  name: string;
  hours: number;
}

interface Props {
  data: EmployeeHour[];
}

const EmployeeBillableDonutChart: React.FC<Props> = ({ data }) => {
  const employeeNames = data.map((e) => e.name);
  const billableHours = data.map((e) => e.hours);

  const totalHours = billableHours.reduce((sum, h) => sum + h, 0);

  const options: ApexCharts.ApexOptions = {
    labels: employeeNames,
    legend: {
      position: "bottom",
      formatter: (seriesName: string, opts) => {
        const index = opts.seriesIndex;
        return `${seriesName}: ${billableHours[index]} hrs`;
      },
    },

    tooltip: {
      y: {
        formatter: (value: number, opts) => {
          const employee = employeeNames[opts.seriesIndex];
          return `${employee}: ${value} hrs`;
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
      //   dropShadow: false,
    },
  };

  return (
    <div className="w-full flex justify-center">
      <Chart
        options={options}
        series={billableHours}
        type="donut"
        width={420}
      />
    </div>
  );
};

export default EmployeeBillableDonutChart;
