import {Dashboard} from "./components/Dashboard";
import './styles.scss'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header} from "./components/Header";
import React from "react";
import {Task} from "./components/Task";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//store
//actions

// const state = {
//     counter: 0
// }
// reducers
const reducer = (state = 0, action) => {
    switch (action.type) {
        case('increment'):
            return state + 1;
        default:
            return state
    }
}
//dispatch

const store = createStore(reducer)

function App() {
  return (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/task/:id" component={Task} />
      </Switch>
    </Router>
  </Provider>
  );
}

export default App;
