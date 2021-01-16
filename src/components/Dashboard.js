import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Map from "./Map"
import { ReactComponent as PosSvg } from "../images/positive.svg"
import { ReactComponent as DeathSvg } from "../images/death.svg"

function Dashboard({ mapData }) {
    const [mapMode, setMapMode] = useState("positive")

    const handeClick = mode => {
        setMapMode(mode)
    }

    const changeMap = () => {
        const { positive, dead } = mapData
        if (mapMode == "positive") {
            console.log(positive)
            return positive
        } else if (mapMode == "dead") {
            return dead
        }
    }
    return (
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
                                <div className="rightContent">
                                    <div className="mapHeader">
                                        <p>US State Data</p>
                                        <button
                                            onClick={() => {
                                                handeClick("positive")
                                            }}>
                                            Positive
                                        </button>
                                        <button
                                            onClick={() => {
                                                handeClick("dead")
                                            }}>
                                            Dead
                                        </button>
                                    </div>
                                    <div className="mapParent">
                                        <Map dataSet={changeMap()} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
