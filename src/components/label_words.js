import React from 'react';
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LabelWords extends React.Component{
    buildOptions(){
        return this.props.words.map((n, index) => {
                return(
                    <option key={index} value={n}>{n}</option>
                )
            })
    }
    render(){
        return(
            <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Words</ControlLabel>
            <FormControl componentClass="select" multiple>
                {this.buildOptions()}
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