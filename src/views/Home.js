import React, { useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"

function Home() {
    useEffect(() => {
        document.body.className = "home-body"

        return () => {
            document.body.className = ""
        }
    }, [])

    return (
        <div className="home">
            <Container>
                <Row>
                    <Col sm md="4" className="homeInfo">
                        <h1>ALL COVID-19 DATA IN AN EASY TO READ WAY</h1>
                        <p>
                            Covid Stats compiles all your important COVID-19
                            related data into a visual and easy to read manner
                            so you can stay safe
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
