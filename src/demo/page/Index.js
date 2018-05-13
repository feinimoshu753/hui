import React, {Component} from 'react';
import '../style/index.less'
import {Link} from 'react-router-dom';
import routes from '../route'
import NavigationBar from '../../../src/component/navigation_bar'

const Item = (props) => (
    <Link to={{
        pathname: props.link
    }} className="demo-index-item">
        <p>{props.title}</p>
    </Link>
)

export default class Index extends Component {

    render() {
        const items = routes.map(value => (
            <Item title={value.title} link={value.link} key={value.title }/>
        ))

        return (
            <div className="demo-index">
                <NavigationBar title="Components" fixedTop={true} styles={{backgroundColor: '#000', color: '#fff'}}/>
                {items}
            </div>
        )
    }
}
