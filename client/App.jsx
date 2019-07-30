import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './utils/store';

import HelloWorld from './components/HelloWorld';

class App extends Component {
  render() {
    return (
      <Provider store={store(this.props)}>
        <HelloWorld/>
      </Provider>
    );
  }
}

export default App;