import React, {Component} from 'react'
import './index.css'

export default class Button extends Component {

    render() {
        let buttonClass = 'hui-button';
        let buttonSizeClass = ` hui-button-size-${this.props.size}`;
        let buttonTypeClass = ` hui-button-type-${this.props.type}`;
        let buttonBorderType = this.props.borderType ? ' hui-button-border-type' : '';
        let buttonDisabled = this.props.disabled ? ' hui-button-disabled' : '';
        let buttonCircle = this.props.circle ? ' hui-button-circle' : '';
        buttonClass += buttonSizeClass + buttonTypeClass + buttonBorderType + buttonDisabled + buttonCircle;

        return (
            <button className={buttonClass}>{this.props.children}</button>
        );
    }
}