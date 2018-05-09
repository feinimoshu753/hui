import React, {Component} from 'react'
import './index.css'

export default class NavigationBar extends Component {

    render() {
        let navigationBarClass = 'hui-navigation-bar';
        console.log(this.props);
        if (this.props.fixed) {
            navigationBarClass += ' hui-navigation-bar-fixed'
        }

        return (
            <div className={navigationBarClass} style={this.props.styles}>
                <div className="hui-navigation-bar-left">
                    {this.props.leftIcon ?
                        <img className="hui-navigation-bar-left-icon" alt="" src={this.props.leftIcon}/> : ''}
                    <span className="hui-navigation-bar-left-text">{this.props.leftText}</span>
                </div>
                <div className="hui-navigation-bar-title">
                    {this.props.titleIcon ?
                        <img className="hui-navigation-bar-title-icon" alt="" src={this.props.titleIcon}/> : ''}
                    <span className="hui-navigation-bar-title-text">{this.props.title}</span>
                </div>
                <div className="hui-navigation-bar-right">
                    {this.props.rightIcon ?
                        <img className="hui-navigation-bar-right-icon" alt="" src={this.props.rightIcon}/> : ''}
                    <span className="hui-navigation-bar-right-text">{this.props.rightText}</span>
                </div>
            </div>
        );
    }
}