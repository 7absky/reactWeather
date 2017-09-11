const React = require('react');
const PropTypes = require('prop-types');
const API = require('../utils/Api');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let value = event.target.value;
        this.setState( () => {
            return {
                cityName: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let city = this.state.cityName;
        API.getCityCurrentWeather(city)
            .then(city => {
                console.log(city);
            });
    }

    render() {
        return (
            <div>
                <form 
                    className={this.props.orientation + " form"}
                    onSubmit={this.handleSubmit}>
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