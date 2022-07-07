import React from 'react';

import { BrowserRouter as Router , Route} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        {/* User passes data in the login form */}
        <Route path="/" exact component = {Join} />
        {/* Passing user data through chat */}
        <Route path="/chat" exact component = {Chat} />
    </Router>
);

export default App;