import React from 'react';

class GameList extends React.Component {
    render() {

        return(
            <li>{this.props.games.gameName}</li>
        )
    }
}

export default GameList;