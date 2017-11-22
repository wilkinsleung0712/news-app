import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }
    render() {
        return (
            <div id="mobileheader">

                <header>
                    <img src="images/logo.png" alt="logo"/>
                    <span>ReactNews</span>

                </header>
            </div>

        )
    }
}

export default MobileHeader;