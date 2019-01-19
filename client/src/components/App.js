import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer.js';

import Introduction from './Introduction';
import Notes from './Notes';
import NewNote from './NewNote';
import { BrowserRouter , Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <BrowserRouter>
                        <div>
                            <Route exact path="/" component={Introduction} />
                            <Route exact path="/notes" component={Notes} />
                            <Route exact path="/notes/new" component={NewNote} />
                        </div>
                    </BrowserRouter>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
