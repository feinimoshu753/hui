import React, {Component} from 'react';
import ImageLazyload from '../../component/image_lazyload';

export default class ImageLazyloadPage extends Component {

    render() {
        return (
            <div>
                <ImageLazyload/>
                <ImageLazyload/>
                <ImageLazyload/>
            </div>
        )
    }
}
