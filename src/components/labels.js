import React from 'react';
import {Jumbotron,Grid,Row,Col} from 'react-bootstrap';
import LabelWords from './label_words';
import LabelNum from './label_num';


class Labels extends React.Component{
    render(){
        return(
        <Jumbotron>

            <Row>
                <Col>
                    <LabelWords />
                    <LabelNum />
                </Col>
            </Row>

        </Jumbotron>
        )
    }
}

export default Labels;