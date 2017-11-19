import React from 'react';
import Header from '../js/component/header/Header';
import Footer from '../js/component/footer/Footer';
import Main from '../js/component/main/Main';
import 'antd/dist/antd.css';

class Index extends React.Component {
  render() {
    return (
      <div>
       <Header/>
       <Main/>
       <Footer/>
      </div>
    );
  }
}

export default Index;