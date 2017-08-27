import React from 'react';
import { FormGroup, FormControl  } from 'react-bootstrap';

class LabelNum extends React.Component{
    render(){
        return(
        <FormGroup bsSize="large">
            <FormControl type="tel" />
        </FormGroup>
        )
    }

}
export default LabelNum;