import React, {Component} from 'react';
import NavigationBar from '../component/navigation_bar';

export default class NavigationBarPage extends Component {

    render() {
        return (
            <div className="navigation-bar-demo">
                <NavigationBar title="标题"/>
            </div>
        )
    }
}
