import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './index.less';

export default class Button extends Component {

    static propTypes = {
        size: PropTypes.string,
        borderType: PropTypes.bool,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        circle: PropTypes.bool,
        onClick: PropTypes.func
    };

    static defaultProps = {
        size: 'normal',
        borderType: false,
        type: 'default',
        disabled: false,
        circle: false,
        onClick: function () {}
    };

    render() {
        let buttonClass = 'hui-button';
        let buttonSizeClass = ` hui-button-size-${this.props.size}`;
        let buttonTypeClass = this.props.borderType ? ` hui-button-border-type-${this.props.type}` : ` hui-button-type-${this.props.type}`;
        let buttonDisabled = this.props.disabled ? ' hui-button-disabled' : '';
        let buttonCircle = this.props.circle ? ' hui-button-circle' : '';
        buttonClass += buttonSizeClass + buttonTypeClass + buttonDisabled + buttonCircle;

        return (
            <button className={buttonClass} onClick={(e)=>{this.props.onClick(e)}}>{this.props.children}</button>
        );
    }
}