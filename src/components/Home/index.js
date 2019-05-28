import _ from 'lodash';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransNumber } from '../../actions/transc';
import { fetchBlockNumber} from '../../actions/blocks';
import './style.css';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      blockIds: [],
      blockHashes: [],
      blockNumber: null,
      transcIde: [],
      transcHashes: [],
      transNumber: null,
    };
  }

 

  componentDidMount() {
    const {fetchBlockNumber, fetchTransNumber} = this.props;
    fetchBlockNumber();
    fetchTransNumber();
  


  }

  renderBlocks() {
    var rows = [];
    _.each(this.props.blocks.ids, (value, index) => {
      rows.push(
        <tr key={index}>
          <td>{value}</td>
          <td>
            <Link to={`/block/${this.props.blocks.hash[index]}`}>
              {this.props.blocks.hash[index]}
            </Link>
          </td>
        </tr>
      );
    });
    return rows;
  }
  renderTrans(){
    var tRows = [];
    _.each(this.props.transc, (transcIde, index) => {
      tRows.push(
        <tr key={index}>
          <td>{transcIde}</td>
          <td>
            <Link to={`/transc/${this.props.transc.hash[index]}`}>
              {this.props.transc.hash[index]}
            </Link>
          </td>
        </tr>
      );
    });
    return tRows;
  }

  render() {
    return (
      <div className="Home">
      <h2>Home page</h2>
      Current Block: {this.props.blockNumber}
      <table>
      <thead><tr><th>Block #</th><th>Hash adress</th></tr></thead>
      <tbody>
        {this.renderBlocks()}
      </tbody>
      </table>
      
      <div className="Transc">

      Current transaction: {this.props.transNumber}
      <table>
      <thead><tr><th> Value</th><th>Transc Hash adress</th></tr></thead>
      <tbody>
        {this.renderTrans()}
      </tbody>
      </table>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    blockNumber: state.blockNumber,
    blocks: state.blocks,
    transNumber: state.transNumber,
    transaction: state.transc,
  };
}

export default connect(mapStateToProps, { fetchBlockNumber, fetchTransNumber })(Home);
