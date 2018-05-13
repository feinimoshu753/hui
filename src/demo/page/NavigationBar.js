import React, {Component} from 'react';
import NavigationBar from '../../component/navigation_bar/index';
import DemoNavigationBar from '../component/DemoNavigationBar'
import DemoDivider from '../component/DemoDivider'
import '../style/navigation_bar.less'

export default class NavigationBarPage extends Component {

    render() {
        return (
            <div className="navigation-bar-demo">
                <DemoNavigationBar title="NavigationBar"/>

                <DemoDivider/>
                <NavigationBar title="标题1"/>

                <DemoDivider/>
                <NavigationBar title="标题2" styles={{backgroundColor: '#000', color: '#fff'}}/>
            </div>
        )
    }
}
