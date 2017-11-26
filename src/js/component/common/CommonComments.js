import React from 'react';
import {Row, Col, Form, Input, Button,Card,notification} from 'antd';

const FormItem = Form.Item;

class CommonComments extends React.Component {

    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({comments: json});
            })
    };

    handleSubmit(e) {
        e.preventDefault();
        var myFetchOptions = {
			method: 'GET'
		};
		var formdata = this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.comment, myFetchOptions)
        .then(response => response.json())
        .then(json => {
			this.componentDidMount();
		})

    };

    addUserCollection(){
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.uniquekey,myFetchOptions)
        .then(response=>response.json())
        .then(json=>{
            	//收藏成功以后进行一下全局的提醒
			notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
        });
    }
    
    render() {
        const {getFieldDecorator} = this.props.form;
        const {comments} = this.state;
        const commentList = comments.length
            ? comments.reverse().slice(0,3).map((comment, index) => (
                <Card 
                    key={index}
                    title={comment.UserName}
                    extra={<a href = "#"> Date {comment.datetime} </a>}>
                    <p>{comment.Comments}</p>
                </Card>
            ))
            : "nothing to load";

        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                    {commentList}
                        <Form
                            layout="horizontal"
                            onSubmit={this
                            .handleSubmit
                            .bind(this)}>
                            <FormItem label="Your comment">
                                {getFieldDecorator('comment', {
                                    rules: [
                                        {
                                            required: false,
                                            message: 'Please input your username!'
                                        }
                                    ]
                                })(
                                    <Input type="textarea" placeholder="Please feel free to tell us"></Input>
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">Submit</Button>
                            &nbsp;&nbsp;
							<Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>Book Mark</Button>
                        </Form>

                    </Col>
                </Row>
            </div>
        )
    }
}
export default Form.create()(CommonComments);