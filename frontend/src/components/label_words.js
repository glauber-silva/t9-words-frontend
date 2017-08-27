import React from 'react';
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
export default LabelWords;