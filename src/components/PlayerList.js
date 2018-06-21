import React from 'react';

class PlayerList extends React.Component {
    render() {

        return(
            <li>{this.props.players.playerName}</li>
        )
    }
}

export default PlayerList;