import { Line } from "react-chartjs-2"

function Linechart({ lineData }) {
    console.log(lineData.positive)
    const data = {
        labels: lineData.date.reverse(),
        datasets: [
            {
                label: "US Historical Data",
                data: lineData.positive.reverse(),
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
            },
        ],
    }

    const options = {
        // responsive: true,
        maintainAspectRatio: false,
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
        <>
            <Line data={data} options={options} height={300} />
        </>
    )
}

export default Linechart
