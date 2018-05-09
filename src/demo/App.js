import React, {Component} from 'react';
import '../style/App.css';
import { Route } from "react-router-dom";
import Index from '../demo/Index'
import Button from '../demo/Button'
import Loading from '../demo/Loading'
import Toast from '../demo/Toast'

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/button" component={Button}/>
                <Route path="/loading" component={Loading}/>
                <Route path="/toast" component={Toast}/>
            </div>
        );
    }
}

export default App;
