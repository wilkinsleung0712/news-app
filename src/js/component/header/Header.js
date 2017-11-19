import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
import {
    Tabs,
    Button,
    message,
    From,
    Input,
    Checkbox
} from 'antd';
import {Link} from 'react-router-dom'
import Form from 'antd/lib/form/Form';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }
    render() {
        // let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" class="register">
                    <Button type="primary">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed">Your Profile</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button>Logout</Button>
                </Menu.Item>
            : <Menu.Item key="login" class="register">
                <Icon type="appstore"/>Login/Logout
            </Menu.Item>;

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
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>

        )
    }
}

export default Header = Form.create({})(Header);