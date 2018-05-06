import React, {Component} from 'react';
import Toast from '../component/toast';

export default class ToastPage extends Component {

    render() {
        return (
            <div>
                <Toast/>
                <Toast/>
                <Toast/>
            </div>
        )
    }
}
