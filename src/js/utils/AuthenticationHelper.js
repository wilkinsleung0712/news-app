import {
    message
} from 'antd';

const AuthenticationHelper = ()=>{
    return ({
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
            this.setModalVisible(false);
            message.success("Login Success");
        },
    
        handleMenuClick(event) {
            // set current focus to tab
            if (event.key === "register") {
                this.setState({current: 'register'});
                this.setModalVisible(true);
            } else {
                this.setState({current: event.key});
            }
        },
    
        setModalVisible(status) {
            this.setState({modalVisible: status});
        }
    });
   
}

export default AuthenticationHelper;