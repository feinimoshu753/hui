import React, {Component} from 'react';
import Loading from '../../component/loading/index';

export default class LoadingPage extends Component {

    render() {
        return (
            <div>
                <Loading/>
                <Loading/>
                <Loading/>
            </div>
        )
    }
}
