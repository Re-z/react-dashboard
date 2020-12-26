import {Dashboard} from "./components/Dashboard";
import './styles.scss'
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header} from "./components/Header";
import React from "react";
import {Task} from "./components/Task";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from "./redux/reducers/rootReducer";

const store = createStore(rootReducer)

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
