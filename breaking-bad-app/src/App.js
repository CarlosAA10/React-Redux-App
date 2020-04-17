import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'; 

// importing components
import MappedCards from './components/MappingCard'; 

import { fetchHomies } from './store/actions/BreakingBadActions'; 

function App(props) {

  console.log('the props', props)

  useEffect(() => {
    props.fetchHomies(); 
  }, [])

  return (
    <div className="App">
      <h1>THC Meth King Pin Boyz</h1>
      {props.isFetching && (
        <Loader
        type="Puff"
        color="violet"
        height={200}
        width={200}
        />
      )}

      {props.homiesInfo && (
        <MappedCards homies={props.homiesInfo} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    homiesInfo: state.breaking.homiesInfo, 
    isFetching: state.breaking.isFetching, 
    error: state.breaking.error
  }
}


export default connect(
  mapStateToProps, 
  { fetchHomies }
) (App);
