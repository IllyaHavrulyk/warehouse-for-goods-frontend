import React, { Fragment } from 'react'
import style from "./Stats.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";

export const MultiAxisWarehouses = ({ stats: { averageWarehousesPerUser, averageProductsPerWarehouse } }) => {


    let averageWarehousesPerUserStatsKeys = [];
    let averageWarehousesPerUserStatsValues = [];
    for (const property in averageWarehousesPerUser) {
        averageWarehousesPerUserStatsKeys.push(`${property}`);
        averageWarehousesPerUserStatsValues.push(averageWarehousesPerUser[property]);
    }

    let averageProductsPerWarehouseValues = []
    let averageProductsPerWarehouseKeys = []
    for (const property in averageProductsPerWarehouse) {
        averageProductsPerWarehouseKeys.push(`${property}`);
        averageProductsPerWarehouseValues.push(averageProductsPerWarehouse[property])
    }

    const data = {
        labels: [averageWarehousesPerUserStatsKeys],
        datasets: [
            {
                label: '# warehouses per user.',
                data: averageWarehousesPerUserStatsValues,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '# products per warehouse',
                data: averageProductsPerWarehouseValues,
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(230,90,130)',
                yAxisID: 'y-axis-2',
            },
        ],
    }

    const options = {
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
    }
    return (
        <Fragment>
            <Line data={data} options={options} />
        </Fragment>
    )
}