const React = require('react');
const Form = require('./Form');

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <p>Weather App</p>
                <Form orientation='row' />
            </div>
        )
    }
}


module.exports = Nav;