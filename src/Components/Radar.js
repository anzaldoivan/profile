import React from 'react';
 
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';
import '../App.css';

 
class Radar extends React.Component {
  render() {
 	 const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
        },
        meta: { color: 'blue' }
      },
      {
        data: {
          battery: 0.6,
          design: .85,
          useful: 0.5,
        },
        meta: { color: 'red' }
      }
    ];
 
    const captions = {
      // columns
      battery: 'Poder Ofensivo',
      design: 'Aptitud Defensiva',
      useful: 'Participacion Juego',
    };
 
    return (
      <div>
          
        <RadarChart
            captions={{
              // columns
              battery: 'Poder Ofensivo',
              design: 'Aptitud Defensiva',
              useful: 'Participacion Juego',
            }}
            data={[
              // data
              {
                data: {
                  battery: 0.96,
                  design: .44,
                  useful: 0.70,
                },
                meta: { color: '#58FCEC' }
              },
            ]}
            size={400}
          />
        </div>
    );
  }
}

export default Radar