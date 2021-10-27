import React from 'react';
import './App.css';
import { connect } from 'react-redux'

function App({darkMode, toggle, text, handleChange, submit, dislike, like, likes, things}){
  return (
    <div className={"App" + (darkMode ? " dark" : "")}>
      <button onClick={toggle}>Dark mode</button>
      <h3>{text}</h3>
      <input
        name="text"
        value={text}
        onChange={handleChange }/>
      <button onClick={submit}>Add!</button>

      <h4>{likes} likes</h4>
      <button onClick={dislike}>
        Dislike <span role="img" aria-label="thumbs down">👎</span>
      </button>
      <button onClick={like}>
        Like<span role="img" aria-label="thumbs up">👍</span>
      </button>
      {
        things.map((thang, index) => <h1 key={index} >{thang}</h1>)
      }
    </div>
  );
}

function mapStateToProps(state){
  return {
    likes: state.likes,
    darkMode: state.darkMode,
    text: state.text,
    things: state.thangs
  }
}

function mapDispatchToProps(dispatch){
  return {
    like: () => dispatch({type: "LIKE"}),
    dislike: () => dispatch({type: "DISLIKE"}),
    toggle: () => dispatch({type: "TOGGLE"}),
    submit: () => dispatch({type: "SUBMIT"}),
    handleChange: (event) => dispatch({type: "FORM_CHANGE", payload: event.target})
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
