import React, {Component} from 'react'
import './index.less'

export default class Button extends Component {

    render() {
        let buttonClass = 'hui-button';
        let buttonSizeClass = ` hui-button-size-${this.props.size}`;
        let buttonTypeClass = this.props.borderType ? ` hui-button-border-type-${this.props.type}` : ` hui-button-type-${this.props.type}`;
        let buttonDisabled = this.props.disabled ? ' hui-button-disabled' : '';
        let buttonCircle = this.props.circle ? ' hui-button-circle' : '';
        buttonClass += buttonSizeClass + buttonTypeClass + buttonDisabled + buttonCircle;

        return (
            <button className={buttonClass}>{this.props.children}</button>
        );
    }
}