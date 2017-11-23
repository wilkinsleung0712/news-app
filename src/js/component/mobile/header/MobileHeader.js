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

class MobileHeader extends React.Component {
    constructor() {
        super();
        this.state = {
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
            ? <Link>
                    <Icon type="inbox"/>
                </Link>
            : <Icon
                type="setting"
                onClick={this
                .login
                .bind(this)}/>

        return (
            <div id="mobileheader">

                <header>
                    <img src="images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
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
                </header>
            </div>

        )
    }

    login(event) {
        this.setModalVisible(true);
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
        message.success("Login Success");
        this.setModalVisible(true);
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

export default MobileHeader = Form.create({})(MobileHeader);