import React, {Component} from 'react'
import './index.less'
import PropTypes from "prop-types";

export default class NavigationBar extends Component {

    static propTypes = {
        fixedTop: PropTypes.bool,
        styles: PropTypes.object,
        leftIcon: PropTypes.string,
        leftText: PropTypes.string,
        titleIcon: PropTypes.string,
        title: PropTypes.string,
        rightIcon: PropTypes.string,
        rightText: PropTypes.string,
        onLeftClick: PropTypes.func,
        onRightClick: PropTypes.func
    };

    static defaultProps = {
        fixedTop: false,
        onLeftClick: function () {},
        onRightClick: function () {}
    };

    render() {
        let navigationBarClass = 'hui-navigation-bar';
        if (this.props.fixedTop) {
            navigationBarClass += ' hui-navigation-bar-fixed-top'
        }

        return (
            <div className={navigationBarClass} style={this.props.styles}>
                <div className="hui-navigation-bar-left" onClick={e=>{this.props.onLeftClick(e)}}>
                    {this.props.leftIcon ?
                        <img className="hui-navigation-bar-left-icon" alt="" src={this.props.leftIcon}/> : ''}
                    <span className="hui-navigation-bar-left-text">{this.props.leftText}</span>
                </div>
                <div className="hui-navigation-bar-title">
                    {this.props.titleIcon ?
                        <img className="hui-navigation-bar-title-icon" alt="" src={this.props.titleIcon}/> : ''}
                    <span className="hui-navigation-bar-title-text">{this.props.title}</span>
                </div>
                <div className="hui-navigation-bar-right" onClick={e=>{this.props.onRightClick(e)}}>
                    {this.props.rightIcon ?
                        <img className="hui-navigation-bar-right-icon" alt="" src={this.props.rightIcon}/> : ''}
                    <span className="hui-navigation-bar-right-text">{this.props.rightText}</span>
                </div>
            </div>
        );
    }
}