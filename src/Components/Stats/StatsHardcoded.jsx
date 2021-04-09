import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import style from "./Stats.module.css";
import { Line, Pie, Bar } from "react-chartjs-2";
export default function Stats() {

    const pieData = {
        labels: ['One', 'Two', 'Three', '4 and more'],
        datasets: [
            {
                label: 'Warehouses per user',
                data: [12, 19, 3, 5],
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

    const productsCreatedPerMonth = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '# of products',
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
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };

    const warehousesCreatedPerMonth = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
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
                data: [5, 3, 12, 20, 8, 18, 14]
            }
        ]
    };

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# warehouses per user.',
                data: [3, 4, 2, 4, 6, 5],
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                yAxisID: 'y-axis-1',
            },
            {
                label: '# products per warehouse',
                data: [10, 5, 6, 7, 12, 4, 8],
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

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '# of users registered',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    const barOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }

    return (
        <Fragment>
            <Container>
                <h2>Popular stats</h2>
                <Row>
                    <Col md="6"><Line data={warehousesCreatedPerMonth} /><h4>Warehouses created per month</h4></Col>
                    <Col md="6"><Line data={productsCreatedPerMonth} /><h4>Products created per month</h4></Col>
                </Row>
                <Row>
                    <Col md="12"><Line data={data} options={options} /><h4>Average warehouses per user & products created per warehouse</h4></Col>
                </Row>
                <Row>
                    <Col md="6"><Pie data={pieData} /><h4>User's warehouses</h4></Col>
                    <Col md="6"><Bar data={barData} options={barOptions} /><h4>Users registered per month</h4></Col>

                </Row>
            </Container>

        </Fragment>

    )
}