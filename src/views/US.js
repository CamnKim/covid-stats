import React, { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Map from "../components/Map"

function US() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [isLoading, setLoading] = useState(true)
    const [dataSets, setData] = useState({})
    //const [dead, setDead] = useState([])
    const [mapMode, setMapMode] = useState("positive")

    const fetchItems = async () => {
        setLoading(true)
        // api used to get US covid data, requires a cors proxy
        const corsProxy = "https://cors-anywhere.herokuapp.com/"
        const covidApi = "https://covidtracking.com/api/states"

        // fetching data from proxy
        const data = await fetch(corsProxy + covidApi)
        const dataJson = await data.json()
        console.log(dataJson)

        // storing the data sets as arrays in an object
        setData({
            positive: dataJson.map(element => {
                const { state, positive } = element
                return [state, positive]
            }),

            dead: dataJson.map(element => {
                const { state, death } = element
                return [state, death]
            }),
        })
        setLoading(false)
    }

    const handeClick = mode => {
        setMapMode(mode)
    }

    const changeMap = () => {
        const { positive, dead } = dataSets
        if (mapMode == "positive") {
            console.log(positive)
            return positive
        } else if (mapMode == "dead") {
            return dead
        }
    }

    return isLoading ? (
        <h1 className="loading">Loading...</h1>
    ) : (
        <Container fluid className="parent">
            <Row>
                <Col md={4}>
                    <Container fluid>
                        <div className="barParent"></div>
                    </Container>
                </Col>
                <Col md={8}>
                    <Container fluid>
                        <Row>
                            <Col>
                                <div className="rightContent lineParent"></div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="rightContent mapParent">
                                    <Map dataSet={changeMap()} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
{
    /* <button onClick={event => handeClick("positive")}>Positive</button>
<button onClick={event => handeClick("dead")}>Dead</button>
<Map data={changeMap()} /> */
}

export default US
