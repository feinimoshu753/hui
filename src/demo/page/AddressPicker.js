import React, {Component} from 'react';
import AddressPicker from '../../component/address_picker';

export default class AddressPickerPage extends Component {

    render() {
        return (
            <div>
                <AddressPicker/>
                <AddressPicker/>
                <AddressPicker/>
            </div>
        )
    }
}
