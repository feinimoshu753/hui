import React, {Component} from 'react';
import '../style/App.css';
import { Route } from "react-router-dom";
import Index from './page/Index';
import ActionSheet from './page/ActionSheet';
import AddressPicker from './page/AddressPicker';
import Alert from './page/Alert';
import Button from './page/Button';
import Confirm from './page/Confirm';
import DatetimePicker from './page/DatetimePicker';
import Field from './page/Field';
import ImageLazyload from './page/ImageLazyload';
import ImagePreview from './page/ImagePreview';
import InfiniteLoaing from './page/InfiniteLoaing';
import Loading from './page/Loading';
import NavigationBar from './page/NavigationBar';
import Picker from './page/Picker';
import Popup from './page/Popup';
import PullToRefresh from './page/PullToRefresh';
import Radio from './page/Radio';
import Swipe from './page/Swipe';
import Tab from './page/Tab';
import TabBar from './page/TabBar';
import Toast from './page/Toast';

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/action_sheet" component={ActionSheet}/>
                <Route path="/address_picker" component={AddressPicker}/>
                <Route path="/alert" component={Alert}/>
                <Route path="/button" component={Button}/>
                <Route path="/confirm" component={Confirm}/>
                <Route path="/datetime_picker" component={DatetimePicker}/>
                <Route path="/field" component={Field}/>
                <Route path="/image_lazyload" component={ImageLazyload}/>
                <Route path="/image_preview" component={ImagePreview}/>
                <Route path="/infinite_loading" component={InfiniteLoaing}/>
                <Route path="/loading" component={Loading}/>
                <Route path="/navigation_bar" component={NavigationBar}/>
                <Route path="/picker" component={Picker}/>
                <Route path="/popup" component={Popup}/>
                <Route path="/pulltorefresh" component={PullToRefresh}/>
                <Route path="/radio" component={Radio}/>
                <Route path="/swipe" component={Swipe}/>
                <Route path="/tab" component={Tab}/>
                <Route path="/tab_bar" component={TabBar}/>
                <Route path="/toast" component={Toast}/>
            </div>
        );
    }
}

export default App;
