import React, {Component} from 'react';

export default class Mask extends Component {

    render() {
        return (
            <div className="hui-mask" onClick={this.props.onClick()}>

            </div>
        )
    }
}