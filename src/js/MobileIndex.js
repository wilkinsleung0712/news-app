import React from 'react';
import MobileHeader from '../js/component/mobile/header/MobileHeader';
import MobileFooter from '../js/component/mobile/footer/MobileFooter';
import MobileList from '../js/component/mobile/main/MobileList';
import 'antd/dist/antd.css';
import {Tabs, Carousel} from 'antd';

const TabPane = Tabs.TabPane;
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: true,
  effect: 'fade'
};

class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <Tabs defaultActiveKey="top" onChange={this.handleTabClick()}>
          <TabPane tab="Top News" key="top">
            <div class="carousel">
              <Carousel {...settings}>
                <div>
                  <img src="./images/carousel_1.jpg"/></div>
                <div><img src="./images/carousel_2.jpg"/></div>
                <div>
                  <img src="./images/carousel_3.jpg"/></div>
                <div>
                  <img src="./images/carousel_4.jpg"/></div>
              </Carousel>
            </div>
            <MobileList count={20} type="top"/>
          </TabPane>
          <TabPane tab="Social" key="social">
            <MobileList count={20} type="shehui"/>
          </TabPane>
          <TabPane tab="National" key="national">
            <MobileList count={20} type="guonei"/>
          </TabPane>
          <TabPane tab="Sport" key="sport">
            <MobileList count={20} type="yundong"/>
          </TabPane>
          <TabPane tab="Technology" key="technology">
            <MobileList count={20} type="keji"/>
          </TabPane>
        </Tabs>
        <MobileFooter/>
      </div>
    );
  }

  handleTabClick(event) {}
}

export default MobileIndex;