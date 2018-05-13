import React, {Component} from "react";
import NavigationBar from "../../component/navigation_bar";

export default class DemoNavigationBar extends Component {

    render() {
        return (
            <NavigationBar title={this.props.title} leftIcon={require('../img/icon_back.png')} fixedTop={true}
                           styles={{backgroundColor: '#000', color: '#fff'}} onLeftClick={() => {window.history.back()}}/>
        )
    }
}