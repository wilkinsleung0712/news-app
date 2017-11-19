import React from 'react';
import MobileHeader from '../js/component/mobile/header/MobileHeader';
import MobileFooter from '../js/component/mobile/footer/MobileFooter';
import 'antd/dist/antd.css';

class MobileIndex extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <MobileFooter/>
      </div>
    );
  }
}

export default MobileIndex;