import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            current:'top'
        }
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="images/logo.png" alt=""/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>Top ReactNews
                            </Menu.Item>
                            <Menu.Item key="social">
                                <Icon type="appstore"/>Social
                            </Menu.Item>
                            <Menu.Item key="national">
                                <Icon type="appstore"/>National
                            </Menu.Item>
                            <Menu.Item key="sport">
                                <Icon type="appstore"/>Sport
                            </Menu.Item>
                            <Menu.Item key="techlogory">
                                <Icon type="appstore"/>Techlogory
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>

        )
    }
}

export default Header;