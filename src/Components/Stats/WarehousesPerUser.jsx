import React, { Fragment } from 'react'
import style from "./Stats.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";

const WarehousesPerUser = ({ stats }) => {

    let statsKeys = [];
    let statsValues = [];
    for (const property in stats) {
        statsKeys.push(`${property}`);
        statsValues.push(stats[property]);
    }

    const pieData = {
        labels: statsKeys,
        datasets: [
            {
                label: 'Warehouses per user',
                data: statsValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <Fragment>
            <Pie data={pieData} />
        </Fragment>
    )
}

export default WarehousesPerUser;