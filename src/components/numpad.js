import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { inputNum, inputLetters, clearState } from '../actions/tnine_actions.js';

class Numpad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            letters: ""
        }
    }
    inputNum(num, str){
        let letters = this.state.letters + str;
        this.setState({letters:letters});
        this.props.inputNum(num);
        this.props.inputLetters(letters);
    }
    clearState(){
        this.setState({letters:""});
        this.props.clearState();
    }
    render(){
        return(
            <div className="numpad">
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('1', '')} >
                        <span className="num">1</span>
                        <p>&nbsp;</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('2','abc')} >
                        <span className="num">2</span>
                        <p>A B C</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('3','def')} >
                        <span className="num">3</span>
                        <p>D E F</p>
                    </Col>
                </Row>
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('4', 'ghi')} >
                        <span className="num">4</span>
                        <p>G H I</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('5', 'jkl')} >
                        <span className="num">5</span>
                        <p>J K L</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('6', 'mno')} >
                        <span className="num">6</span>
                        <p>M N O</p>
                    </Col>
                </Row>
                <Row className="buttons">
                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('7', 'qrs')} >
                        <span className="num">7</span>
                        <p>P Q R S</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('8','tuv')} >
                        <span className="num">8</span>
                        <p>T U V</p>
                    </Col>

                    <Col className="btn btn-default" md={4} xs={4} onClick={ () => this.inputNum('9', 'wxyz')} >
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
                <Row className="buttons">
                    <Col className="btn btn-warning" md={12} xs={12} onClick={ () => this.clearState()}>
                        <p> CLEAR </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default connect(null,{inputNum, inputLetters, clearState})(Numpad);