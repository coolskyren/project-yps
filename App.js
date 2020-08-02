import React from 'react'
import Index from './components/pages/index'
import List from './components/pages/list'
import Play from './components/pages/play'
import {Switch,Route,Redirect} from 'react-router-dom'
class App extends React.Component {
  render() {
    return (
      <div className = 'app'>
        <Switch>
          <Route path='/index' component={Index}></Route>
          <Route path='/list' component={List}></Route>
          <Route path='/play' component={Play}></Route>
          <Redirect to = '/index'></Redirect>
        </Switch>
      </div>
    )
  }
}
export default App


