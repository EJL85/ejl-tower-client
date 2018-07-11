import React from 'react';

class GameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showStatus: "hidden"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateFunc = (event) => {
        if (this.state.showStatus === "hidden") {
            this.setState({showStatus: ""});
        } else {
            this.setState({showStatus: "hidden"})
        }
        this.setState({value: this.props.games.gameName});
    }

    deleteFunc = (event) => {

        let delURL = `https://ejl-tower-server.herokuapp.com/games/${this.props.games.id}`;

        fetch(delURL,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        setTimeout(this.refreshPage, 1500)

    }

    refreshPage = () => {
        window.location.reload();
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        console.table(event);
        console.log(this.state.value);
        event.preventDefault();
        let updateURL = `https://ejl-tower-server.herokuapp.com/games/${this.props.games.id}`;

        fetch(updateURL,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({gameName: this.state.value})
            })

            .then(response => response.json())
            .then(resData => console.log(resData))

        setTimeout(this.refreshPage, 2000)
    }

    render() {

        return(
            <div>
                <li>{this.props.games.gameName}</li>
                <button onClick={this.updateFunc}>Update</button>
                <button onClick={this.deleteFunc}>Delete</button>
                <form onSubmit={this.handleSubmit} className={this.state.showStatus}>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default GameList;