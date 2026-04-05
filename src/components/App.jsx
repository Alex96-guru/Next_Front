import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
                <Main />
            </div>
        );
    }
}

export default App;