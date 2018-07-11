import React from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends React.Component {
    render() {

        const data = {
            labels: ['Games', 'Players'],
            datasets: [
                {
                    label: 'Amount',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [this.props.gameLength, this.props.playerLength]
                }
            ]
        };


        return(
            <div>
                <h2>Amount of Games/Players</h2>
                <Bar
                    data={data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }
}

export default BarChart;