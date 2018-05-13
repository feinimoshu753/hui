import React, {Component} from 'react';
import PullToreFresh from '../../component/pulltorefresh';

export default class pullToreFreshPage extends Component {

    render() {
        return (
            <div>
                <PullToreFresh/>
                <PullToreFresh/>
                <PullToreFresh/>
            </div>
        )
    }
}
