const React = require('react');
const ReactDOM = require('react-dom');
require('./index.css');


class HelloWorld extends React.Component {
    render() {
        return(
            <h1> hello, world! </h1>
        )
    }
}

ReactDOM.render(
    <HelloWorld />,
    document.getElementById('app')
);