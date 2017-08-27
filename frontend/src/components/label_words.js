import React from 'react';
import {FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class LabelWords extends React.Component{
    render(){
        return(
            <FormGroup controlId="formControlsSelectMultiple">
            <ControlLabel>Multiple select</ControlLabel>
            <FormControl componentClass="select" multiple>
                <option value="select">select (multiple)</option>
                <option value="other">...</option>
            </FormControl>
            </FormGroup>
        )
    }

}
export default LabelWords;