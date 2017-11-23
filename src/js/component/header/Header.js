import React from 'react';
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
import {
    Tabs,
    Button,
    message,
    Form,
    Input,
    Modal
} from 'antd';
import {Link} from 'react-router-dom'

const TabPane = Tabs.TabPane;
const FormItem = Form.Item

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
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                    <Button type="primary">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed">Your Profile</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Button>Logout</Button>
                </Menu.Item>
            : <Menu.Item key="register" className="register">
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
                        <Menu
                            mode="horizontal"
                            onClick={this
                            .handleMenuClick
                            .bind(this)}
                            selectedKeys={[this.state.current]}>
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

                        <Modal
                            title="User Center"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            okText="Close">

                            <Tabs type="card">
                                <TabPane tab="Register" key="2">
                                    <Form
                                        layout="horizontal"
                                        onSubmit={this
                                        .handleSubmit
                                        .bind(this)}>
                                        <FormItem label="UserName">
                                            {getFieldDecorator('r_userName', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Please input your username!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={< Icon type = "user" style = {{ fontSize: 13 }}/>}
                                                    placeholder="Username"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="Password">
                                            {getFieldDecorator('r_password', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Please input your Password!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                                                    type="password"
                                                    placeholder="Password"/>
                                            )}
                                        </FormItem>
                                        <FormItem label="Confirm Password">
                                            {getFieldDecorator('r_confirmpassword', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: 'Please input confirm your Password!'
                                                    }
                                                ]
                                            })(
                                                <Input
                                                    prefix={< Icon type = "lock" style = {{ fontSize: 13 }}/>}
                                                    type="password"
                                                    placeholder="Confirm Password"/>
                                            )}
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">Submit</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
    handleSubmit(event) {
        // when page has been submit we should login
        event.preventDefault();

        var myFetchOptions = {
            method: 'GET'
        };
        var formData = this
            .props
            .form
            .getFieldsValue();
        console.log(formData);
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&username=userName&p" +
                    "assword=password&r_userName=" + formData.r_userName + "&r_password=" + formData.r_password + "&r_confirmPassword=" + formData.r_confirmPassword, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({userNickName: json.NickUserName, userid: json.UserId});

            });
        this.setModalVisible(true);
        message.success("Login Success");
    }

    handleMenuClick(event) {
        // set current focus to tab
        if (event.key === "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: event.key});
        }
    }

    setModalVisible(status) {
        this.setState({modalVisible: status});
    }
}
export default Header = Form.create({})(Header);