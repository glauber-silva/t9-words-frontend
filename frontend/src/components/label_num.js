import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl  } from 'react-bootstrap';

class LabelNum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            typed:""
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({typed:nextProps.typed})
    }

    render(){
        
        return(
        <FormGroup bsSize="large">
            <FormControl type="text" value={this.state.typed}/>
        </FormGroup>
        )
    }

}

function mapStateToProps(state){
    return{
        typed: state.words.typed
    }
}
export default connect(mapStateToProps,{})(LabelNum);