import React from 'react';
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LabelWords extends React.Component{
    render(){
        return(
            <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Words</ControlLabel>
            <FormControl componentClass="select" multiple>
                <option value="other">...</option>
            </FormControl>
            </FormGroup>
        )
    }

}

function mapStateToProps(state){
    return{
        words: state.words.words
    }
}
export default connect(mapStateToProps,{})(LabelWords);