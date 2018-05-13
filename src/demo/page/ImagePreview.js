import React, {Component} from 'react';
import ImagePreview from '../../component/image_preview';

export default class ImagePreviewPage extends Component {

    render() {
        return (
            <div>
                <ImagePreview/>
                <ImagePreview/>
                <ImagePreview/>
            </div>
        )
    }
}
