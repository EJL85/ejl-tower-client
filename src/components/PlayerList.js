import React from 'react';

class PlayerList extends React.Component {
    render() {

        return(
            <div>
            <li>{this.props.players.playerName}</li>
            </div>
        )
    }
}

export default PlayerList;