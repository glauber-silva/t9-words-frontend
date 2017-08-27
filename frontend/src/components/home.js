import React from 'react';
import Labels from './labels';
import Numpad from './numpad';

class Home extends React.Component{
    render(){
        return(
            <div>
                <Labels/>
                <Numpad />
            </div>
        )
    }
}
export default Home;