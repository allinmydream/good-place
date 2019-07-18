import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap';
import Post from './Post';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : [
        {
          postNo: "1",
          postWriter: "Jimy",
          postContent: "This is my first post",
          postAt: new Date(),
        },
        {
          postNo: "2",
          postWriter: "Tom",
          postContent: "Wow... finally I got this",
          postAt: new Date(),
        },

      ],
      maxNo: "",
    }
  }
  render() {
    const list = this.state.posts.map(row => {
      return ( <Post key={row.postNo} row={row} /> )
    })
    return (
      <div id="layout">
        <Jumbotron>
          {
            list
          }
        </Jumbotron>
      </div>      
    )
  }
}

export default App;