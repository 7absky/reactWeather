const React = require('react');
const PropTypes = require('prop-types');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState( () => {
            return {
                cityName: value
            }
        });
    }

    render() {
        return (
            <div>
                <form 
                    className={this.props.orientation + " form"}>
                    <input 
                        placeholder="St.George, Utah"
                        autoComplete="off"
                        type="text"
                        value={this.state.cityName}
                        onChange={this.handleChange}
                    />
                    <button className="btn btn-success"
                    type="submit"
                    disabled={!this.state.cityName}>
                        Get weather
                    </button>
                </form>
            </div>
        )
    }
}




module.exports = Form;