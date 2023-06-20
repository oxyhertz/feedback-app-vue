<template>
    <Bar id="my-chart-id" :style="myStyles" :options="chartOptions" :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    computed: {
        myStyles() {
            return {
                height: `210px`,
                position: 'relative',
                'background-image': 'linear - gradient(to right, #00369E, #005CFD, #A18DFF)',
                // width: '100%',
            }
        }
    },
    unmounted() {
        console.log('this._chart:', Bar);
        if (this._chart) {
            this._chart.destroy();
        }
    },
    data() {
        return {
            chartData: {
                labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],


                datasets: [{ data: [850, 600, 500, 620, 900, 500, 900, 630, 900] }]
            },
            chartOptions: {
                backgroundColor: '#fff',
                borderWidth: 0,
                borderSkipped: false,
                borderRadius: 6,
                maxBarThickness: 20,
                responsive: true,
                borderDash: [5, 5],
                layout: {
                    padding: {
                        top: 30,
                        right: 15,
                        left: 10,
                        bottom: 5,
                    },
                },
                // maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                tooltips: {
                    enabled: true,
                    mode: "index",
                    intersect: false,
                },
                scales: {
                    y: {
                        grid: {
                            display: true,
                            color: "rgba(255, 255, 255, .2)",
                            zeroLineColor: "#ffffff",
                            borderDash: [6],
                            borderDashOffset: [6],
                        },
                        ticks: {
                            suggestedMin: 0,
                            suggestedMax: 1000,
                            display: true,
                            color: "#fff",
                            font: {
                                size: 14,
                                lineHeight: 1.5,
                                weight: '600',
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
                            color: "#fff",
                            font: {
                                size: 14,
                                lineHeight: 1.5,
                                weight: '600',
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

<style>
#my-chart-id {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .12);
    background-image: linear-gradient(90deg, #00369e, #005cfd, #a18dff);
}
</style>