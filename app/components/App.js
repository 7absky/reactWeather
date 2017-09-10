const React = require('react');
const Form = require('./Form');
const Nav = require('./Nav');
const Home = require('./Home');


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Nav />
                <Home />
            </div>
        )
    }
}

module.exports = App;