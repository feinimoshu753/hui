import React, {Component} from 'react';

export default class DemoDivider extends Component {

    render() {
        return (
            <div style={{marginTop: this.props.height ? this.props.height : '10px'}}></div>
        )
    }
}