const React = require('react');
const Form = require('./Form');


class Home extends React.Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-form">
                    <h1 className="header">Enter a City and State</h1>
                    <Form orientation='column'/>
                </div>
            </div>
        )
    }
}

module.exports = Home;