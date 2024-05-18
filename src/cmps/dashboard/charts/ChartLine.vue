<template>
    <Line :style="myStyles" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    name: 'LineChart',
    components: { Line },
    computed: {
        myStyles() {
            return {
                height: `310px`,
                position: 'relative',
                'background-image': 'linear - gradient(to right, #00369E, #005CFD, #A18DFF)',
            }
        }
    },
    data() {
        return {
            chartData: {
                labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Mobile apps",
                    tension: 0.4,
                    borderWidth: 0,
                    pointRadius: 0,
                    borderColor: "#1890FF",
                    borderWidth: 3,
                    data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                    maxBarThickness: 6

                },
                {
                    label: "Websites",
                    tension: 0.4,
                    borderWidth: 0,
                    pointRadius: 0,
                    borderColor: "#B37FEB",
                    borderWidth: 3,
                    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                    maxBarThickness: 6

                }],
            },
            chartOptions: {
                layout: {
                    padding: {
                        top: 30,
                        right: 15,
                        left: 10,
                        bottom: 5,
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                tooltips: {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                    // backgroundColor: '#000',
                    // callbacks: {
                    //     label: function (context) {
                    //         var label = context.dataset.label || '';
                    //         if (label) {
                    //             label += ': ';
                    //         }
                    //         label += '$' + context.parsed.y;
                    //         return label;
                    //     }
                    // }
                },
                scales: {
                    y: {
                        grid: {
                            display: true,
                            color: "rgba(0, 0, 0, .2)",
                            zeroLineColor: "#000000",
                            borderDash: [6],
                            borderDashOffset: [6],
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1000,
                            display: true,
                            color: "#8C8C8C",
                            font: {
                                size: 14,
                                lineHeight: 1.8,
                                weight: '400',
                                family: "Open Sans",
                            },
                        },
                    },
                    x: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: true,
                            color: "#8C8C8C",
                            font: {
                                size: 14,
                                lineHeight: 1.5,
                                weight: '400',
                                family: "Open Sans",
                            },
                        },
                    },
                },
            }
        }
    }
}
</script>
