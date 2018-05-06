import React, {Component} from 'react';
import './style/index.css'
import {Link} from "react-router-dom";

const Item = (props) => (
    <Link to={{
        pathname: props.link
    }} className="demo-index-item">
        <p>{props.title}</p>
    </Link>
)

export default class ButtonPage extends Component {

    render() {
        return (
            <div>
                <Item title="button" link="/button"/>
                <Item title="loading" link="/loading"/>
                <Item title="toast" link="/toast"/>
            </div>
        )
    }
}
