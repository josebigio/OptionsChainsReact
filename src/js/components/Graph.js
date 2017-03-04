import React from 'react';
import createPlotlyComponent from 'react-plotlyjs';
//See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own 
import Plotly from './scripts/ploty';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { modalDismissed } from '../actions/stockActions';

const PlotlyComponent = createPlotlyComponent(Plotly);



@connect((store)=>{
  return {
    xYData:store.graphReducer.xYData,
    title:store.graphReducer.title,
    fetching:store.graphReducer.fetching,
    error:store.graphReducer.error,
    show:store.graphReducer.show,
    name:store.graphReducer.name
  };
})
export default class Graph extends React.Component {
	
	componentWillMount() {
		console.log('mounted',this);
	}

	componentWillUnMount() {
		console.log('unmounting',this);
	}

  close() {
    console.log('close');
    this.props.dispatch(modalDismissed());
  }


	  render() {
      const { xYData, show, name } = this.props;

    let data = [
      {
        type: 'scatter',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter 
        x: xYData.x,     // more about "x": #scatter-x 
        y: xYData.y,     // #scatter-y 
        marker: {         // marker is an object, valid marker keys: #scatter-marker 
          color: 'rgb(16, 32, 77)' // more about "marker.color": #scatter-marker-color 
        }
      }
    ];
    let layout = {                     // all "layout" attributes: #layout 
      title: name,  // more about "layout.title": #layout-title 
      xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis 
        title: 'Price'         // more about "layout.xaxis.title": #layout-xaxis-title 
      },
      yaxis: {
        title: 'Strike'
      }
    };
    let config = {
      showLink: false,
      displayModeBar: false
    };
    return (
      <div>
          <Modal show={show} onHide={this.close.bind(this)}>
            <Modal.Body>
              <PlotlyComponent className="whatever" data={data} layout={layout} config={config}/>
            </Modal.Body>
          </Modal>
      </div>
    );
  }

}