import React from  'react';
import {connect} from 'react-redux';
import * as actions from '../actions/'
class Introduction extends React.Component{
    componentDidMount() {
        this.props.getUser(this.props.history);
    }

    render(){
        return(
            <div>
                <div className={"row"}>
                    <div className={"col offset-2"}>
                        <h3>Welcome to Everyday Note</h3>
                    </div>
                </div>
                <li>Store your notes at one place</li>
                <li>Safe Notes storage</li>
                <li>Free of cost</li>
            </div>
        )
    }
}

export default connect(null, actions)(Introduction);