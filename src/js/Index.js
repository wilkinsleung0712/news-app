import React from 'react';
import Header from '../js/component/header/Header';
import Footer from '../js/component/footer/Footer';
import MainIndex from '../js/component/main/MainIndex';
import 'antd/dist/antd.css';

class Index extends React.Component {
  render() {
    return (
      <div>
       <Header/>
       <MainIndex/>
       <Footer/>
      </div>
    );
  }
}

export default Index;