
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Main from './component/Main';
import Data from './component/data.json'
import SelectedBeast from './component/SelectedBeast';

import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      name: "",
      mDisc: ""
    }
  }

  CloseModel = () => {
    this.setState({
      showModal: false
    })
  }
  show = (name, src ,mDisc) => {
    this.setState({
      showModal: true,
      name: name,
      src : src,
      mDisc: mDisc

    })
  }
  render() {
    return (
      <>
        <Header />
        <Main data={Data} show={this.show} />
        <SelectedBeast 
        CloseModel={this.CloseModel}
        showModal={this.state.showModal} 
        name={this.state.name}
        mSrc={this.state.src}
        mDisc={this.state.mDisc} 
        />
        <Footer />
      </>

    )
  }
}

export default App