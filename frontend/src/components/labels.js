import React from 'react';
import {Jumbotron,Grid,Row,Col} from 'react-bootstrap';
import LabelWords from './label_words';
class Labels extends React.Component{
    render(){
        return(
        <Jumbotron>

            <Row>
                <Col>
                    <LabelWords />
                </Col>
            </Row>

        </Jumbotron>
        )
    }
}

export default Labels;