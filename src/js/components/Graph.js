import React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own 
import Plotly from './scripts/ploty';

const PlotlyComponent = createPlotlyComponent(Plotly);

export default class Graph extends React.Component {
	
	componentWillMount() {
		console.log('mounted',this);
	}

	componentWillUnMount() {
		console.log('unmounting',this);
	}


	  render() {
    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter 
        x: [1, 2, 3],     // more about "x": #scatter-x 
        y: [6, 2, 3],     // #scatter-y 
        marker: {         // marker is an object, valid marker keys: #scatter-marker 
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color 
        }
      }
    ];
    let layout = {                     // all "layout" attributes: #layout 
      title: 'Market',  // more about "layout.title": #layout-title 
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis 
        title: 'xAxisTitle'         // more about "layout.xaxis.title": #layout-xaxis-title 
      },
      yaxis: {
        title: 'yAxisTitle'
      }
    };
    let config = {
      showLink: false,
      displayModeBar: false
    };
    return (
      <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
    );
  }

}