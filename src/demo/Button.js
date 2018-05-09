import React, {Component} from 'react';
import Button from '../component/button';
import NavigationBar from '../component/navigation_bar';
import './style/button.css'

export default class ButtonPage extends Component {

    render() {
        return (
            <div className="button-demo">
                <NavigationBar title="button" fixed={true}/>
                <div className="group">
                    <h3>小号按钮</h3>
                    <Button type="default" size="small">default</Button>
                    <Button type="primary" size="small">primary</Button>
                    <Button type="warn" size="small">warn</Button>
                </div>
                <div className="group">
                    <h3>普通按钮</h3>
                    <Button type="default" size="normal">default</Button>
                    <Button type="primary" size="normal">primary</Button>
                    <Button type="warn" size="normal">warn</Button>
                </div>
                <div className="group">
                    <h3>大号按钮</h3>
                    <Button type="default" size="large">default large</Button>
                    <Button type="primary" size="large">primary large</Button>
                    <Button type="warn" size="large">warn large</Button>
                </div>
                <div className="group">
                    <h3>不可点按钮</h3>
                    <Button type="default" size="large" disabled={true}>default disabled</Button>
                    <Button type="primary" size="large" disabled={true}>primary disabled</Button>
                    <Button type="warn" size="large" disabled={true}>warn disabled</Button>
                </div>

                <div className="group">
                    <h3>圆形按钮</h3>
                    <Button type="default" size="large" circle={true}>default circle</Button>
                    <Button type="primary" size="large" circle={true}>primary circle</Button>
                    <Button type="warn" size="large" circle={true}>warn circle</Button>
                </div>
            </div>
        )
    }
}
