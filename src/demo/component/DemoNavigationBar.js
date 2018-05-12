import React, {Component} from "react";
import NavigationBar from "../../component/navigation_bar";

export default class DemoNavigationBar extends Component{

    render() {
        return (
            <NavigationBar title={this.props.title} leftIcon={require('../img/icon_back.png')} fixed={true} onLeftClick={()=>{window.history.back()}}/>
        )
    }
}