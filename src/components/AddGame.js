import React from 'react'

class AddGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit = (event) => {
        event.preventDefault();
        let gameName = this.state.value;
        this.postRequest(gameName);
    }

    postRequest = (gameName) => {
        fetch("https://ejl-tower-server.herokuapp.com/games/",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({gameName: gameName})
            })
            .then(response => response.json())
            .then(resData => console.log(resData))

        setTimeout(this.refreshPage, 2000)
    }

    refreshPage = () => {
        window.location.reload();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default AddGame;