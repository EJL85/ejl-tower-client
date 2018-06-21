import React from 'react';
import Header from './Header';
import Footer from './Footer';
import GameList from './GameList';
import PlayerList from './PlayerList';
import BarChart from "./BarChart";

class App extends React.Component {

    state={
        games: {},
        players: {}
    };


    componentDidMount() {
        fetch("https://ejl-tower-server.herokuapp.com/games")
            .then(response => response.json())
            .then(games => this.setState({games: games.game}));
        fetch("https://ejl-tower-server.herokuapp.com/players")
            .then(response => response.json())
            .then(players => this.setState({players: players.player}));
    };



    render() {
        return(
            <div>
                <Header/>
                <main>
                <div>
                    <ul>
                        {Object.keys(this.state.games).map(key => <GameList
                            key={key}
                            games={this.state.games[key]}
                        />)}
                    </ul>
                </div>
                <div>
                    <ul>
                        {Object.keys(this.state.players).map(key => <PlayerList
                            key={key}
                            players={this.state.players[key]}
                        />)}
                    </ul>
                </div>
                </main>
                <BarChart/>
                <Footer/>
            </div>
        )
    }
}

export default App;