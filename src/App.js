import React, { Component } from 'react';
import { Provider } from 'react-redux'  // 子元素只能一个div包裹
import { HashRouter , Route} from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalStyleIcon } from './statics/iconFont/iconfont'
import Header from './common/header'
import store from './store' 
import Home from './pages/home'
import Login from './pages/login/loadable.js'
import Detail from './pages/detail/loadable.js'
import Write from './pages/write/loadable.js'


class App extends Component {
  render() {
    return (
      <div className="app">
        <GlobalStyle />
        <GlobalStyleIcon />
        <Provider store = { store }
          >
            <HashRouter>
              <div>
                <Header></Header>
                <Route path='/' exact component={ Home } ></Route>
                <Route path='/login' exact component={ Login } ></Route>
                <Route path='/write' exact component={ Write } ></Route>
                <Route path='/detail/:id' exact component={ Detail } ></Route>
              </div>
            </HashRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
