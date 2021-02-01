import { Line } from "react-chartjs-2"

function Linechart({ lineData, date}) {
    console.log(lineData.positive)
    const data = {
        labels: date,
        datasets: [lineData],
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
