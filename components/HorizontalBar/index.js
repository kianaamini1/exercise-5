
import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalBar() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 5, 11, 30, 13, 4, 5],
                    borderColor: 'rgb( 53, 162, 235)',
                    backgroundColor: 'rgb(9, 121, 105)'
                },
                {
                    label: 'Data 2',
                    data: [4, 6, 19, 8, 12, 11, 2],
                    borderColor: 'rgb( 53, 162, 235,)',
                    backgroundColor: 'rgb(80, 200, 120)'
                },
                {
                    label: 'Data 3',
                    data: [15, 9, 15, 20, 12, 1, 22],
                    borderColor: 'rgb( 53, 162, 235,)',
                    backgroundColor: 'rgb(175, 225, 175)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugin: {
                legend: {
                    position: 'top'
                }, 
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: true
            }
        })
    })

    return(
        <>
            <div>
                <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}