import React, { Fragment } from 'react'
import style from "./Stats.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";

const WarehousesPerMonth = ({ stats }) => {

    let statsKeys = [];
    let statsValues = [];
    for (const property in stats) {
        statsKeys.push(`${property}`);
        statsValues.push(stats[property]);
    }

    const warehousesCreatedPerMonth = {
        labels: statsKeys,
        datasets: [
            {
                label: '# of warehouses',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: statsValues
            }
        ]
    };

    return (
        <Fragment>
            <Line data={warehousesCreatedPerMonth} />
        </Fragment>
    )
}

export default WarehousesPerMonth;