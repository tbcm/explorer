import { Link } from 'react-router-dom'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBlock } from '../../actions/blocks';
import { withRouter } from 'react-router'
import './style.css';

class Block extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    var hash = nextProps.match.params.hash;
    this.props.fetchBlock(hash);
  }

  componentDidMount() {
    var hash = this.props.match.params.hash;
    this.props.fetchBlock(hash);
  }

  render() {

    if (!this.props.block) {
      return (
        <div className="Block">
          <h2>Block Info</h2>
        </div>
      );
    } else {
      console.log(this.props.block);
    }

    const block = this.props.block;
    const difficulty = parseInt(block.difficulty, 10);
    const difficultyTotal = parseInt(block.totalDifficulty, 10);
    const blockTimestamp = Date(parseInt(block.timestamp, 10)).toString();
    const blockTransactions = parseInt(block.transactions, 16);

    return (
      <div className="Block">
        <h2>Block Info</h2>
        <div>
          <table>
            <tbody>
              <tr><td className="tdLabel">Height: </td><td>{block.number}</td></tr>
              <tr><td className="tdLabel">Timestamp: </td><td>{blockTimestamp}</td></tr>
              <tr><td className="tdLabel">Transactions: </td><td>{blockTransactions}</td></tr>
              <tr><td className="tdLabel">Hash: </td><td>{block.hash}</td></tr>
              <tr>
                <td className="tdLabel">Parent hash: </td>
                <td>
                  <Link to={`../block/${block.parentHash}`}>
                    {block.parentHash}
                  </Link>
                </td>
              </tr>
              <tr><td className="tdLabel">Size: </td><td>{block.size}</td></tr>
              <tr><td className="tdLabel">Difficulty: </td><td>{difficulty}</td></tr>
              <tr><td className="tdLabel">Difficulty: </td><td>{difficultyTotal}</td></tr>
              <tr><td className="tdLabel">Gas Limit: </td><td>{block.gasLimit}</td></tr>
              <tr><td className="tdLabel">Gas Used: </td><td>{block.gasUsed}</td></tr>              
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    block: state.block,
  };
}

export default withRouter(connect(  mapStateToProps,  { fetchBlock }) (Block));
