import React, {Component} from 'react';
import InfiniteLoading from '../../component/infinite_loading';

export default class InfiniteLoadingPage extends Component {

    render() {
        return (
            <div>
                <InfiniteLoading/>
                <InfiniteLoading/>
                <InfiniteLoading/>
            </div>
        )
    }
}
