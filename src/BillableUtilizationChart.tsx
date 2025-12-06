import React from 'react';
import Chart from 'react-apexcharts';

interface Props {
  billableHours: number;
  nonBillableHours: number;
}

const BillableUtilizationChart: React.FC<Props> = ({
  billableHours,
  nonBillableHours,
}) => {
  const series = [billableHours, nonBillableHours];
  const total = billableHours + nonBillableHours;

  const options: ApexCharts.ApexOptions = {
    labels: ['Billable', 'Non-Billable'],
    colors: ['#1E90FF', '#F4A300'], // Blue & Amber

    legend: {
      position: 'bottom',
    },

    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Total Hours',
              formatter: () => `${total}`,
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
      formatter: (val: number) => `${val.toFixed(1)}%`,
      // dropShadow: false,
    },
  };

  return (
    <div className="w-full flex justify-center">
      <Chart options={options} series={series} type="donut" width={380} />
    </div>
  );
};

export default BillableUtilizationChart;
