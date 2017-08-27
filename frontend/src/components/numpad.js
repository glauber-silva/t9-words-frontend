import React from 'react';
import { Row, Col } from 'react-bootstrap';

class Numpad extends React.Component{
    render(){
        return(
            <div className="numpad">
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">1</span>
                        <p>&nbsp;</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">2</span>
                        <p>A B C</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">3</span>
                        <p>D E F</p>
                    </Col>
                </Row>
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">4</span>
                        <p>G H I</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">5</span>
                        <p>J K L</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">6</span>
                        <p>M N O</p>
                    </Col>
                </Row>
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">7</span>
                        <p>P Q R S</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">8</span>
                        <p>T U V</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">9</span>
                        <p>W X Y Z</p>
                    </Col>
                </Row>
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">*</span>
                        <p>,</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">0</span>
                        <p>+</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4}>
                        <span className="num">#</span>
                        <p>&nbsp;</p>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Numpad;