import React, {Component} from 'react';
import DatetimePicker from '../../component/datetime_picker';

export default class DatetimePickerPage extends Component {

    render() {
        return (
            <div>
                <DatetimePicker/>
                <DatetimePicker/>
                <DatetimePicker/>
            </div>
        )
    }
}
