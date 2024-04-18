import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });
    
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels:["Red", "Pink", "Yellow", "Green", "Blue", "Purple"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 6, 15, 20, 12, 4],
                    borderColor: [
                        'rgb(136, 8, 8)',
                        'rgb(255, 0, 255)',
                        'rgb(250, 213, 165)',
                        'rgb(34, 139, 34)',
                        'rgb( 53, 2, 235)',
                        'rgb( 112, 41, 99)'
                    ],

                    backgroundColor: [
                        'rgb(136, 8, 8, 0.4)',
                        'rgb(255, 0, 255, 0.4)',
                        'rgb(255, 255, 143, 0.4)',
                        'rgb(34, 139, 34, 0.4)',
                        'rgb(137, 207, 240, 0.4)',
                        'rgb(112, 41, 99, 0.4)'
                    ],
                    borderWidth: 1,
                }
            ]
        })

        setChartOptions({
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
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
            </div>
        </>
    )
}