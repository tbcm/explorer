
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTransc } from '../../actions/transc';
import { withRouter } from 'react-router'
import './style.css';


class Transaction extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return true;
      }
    
      componentWillReceiveProps(nextProps) {
        var hash = nextProps.match.params.hash;
        this.props.fetchTransc(hash);
      }
    
      componentDidMount() {
        var hash = this.props.match.params.hash;
        this.props.fetchTransc(hash);
      }
    
      render() {
    
        if (!this.props.trans) {
          return (
            <div className="Trans">
              <h2>Transaction Info</h2>
            </div>
          );
        } else {
          console.log('Rendering trans', this.props.trans);
        }
    
        const trans = this.props.trans;
     
    
        return (
          <div className="Transac">
            <h2>Transaction Info</h2>
            <div>
            
                <tbody>                 
                  <tr><td className="tdLabel">Hash: </td><td>{trans.hash}</td></tr>
                  <tr><td className="tdLabel">Index: </td><td>{trans.index}</td></tr>
                  <tr><td className="tdLabel">Value: </td><td>{trans.value}</td></tr>
                  </tbody>
            </div>
                  </div>
                  
        );
      }
    
    }
    
    function mapStateToProps(state) {
      return {
        trans: state.trans,
      };
    }
    
    export default withRouter (connect(mapStateToProps, { fetchTransc }) (Transaction));
    