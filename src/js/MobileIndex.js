import React from 'react';
import MobileHeader from '../js/component/mobile/header/MobileHeader';
import MobileFooter from '../js/component/mobile/footer/MobileFooter';
import 'antd/dist/antd.css';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;
class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <Tabs defaultActiveKey="top" onChange={this.handleTabClick()}>
          <TabPane tab="Top News" key="top">Content of Tab Pane 1</TabPane>
          <TabPane tab="Social" key="social">Content of Tab Pane 2</TabPane>
          <TabPane tab="National" key="national">Content of Tab Pane 3</TabPane>
          <TabPane tab="Sport" key="sport">Content of Tab Pane 3</TabPane>
          <TabPane tab="Technology" key="technology">Content of Tab Pane 3</TabPane>
        </Tabs>
        <MobileFooter/>
      </div>
    );
  }

  handleTabClick(event){

  }
}

export default MobileIndex;