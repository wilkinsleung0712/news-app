import React from 'react';
import {Row, Col} from 'antd';

class NewsDetail extends React.Component{

    constructor(){
        super();
        this.state = {
            newsItem:''
        }
    }

    componentWillMount(){
        var fetchOptions = {
            method:'GET'
        }
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey="+ this.props.params.uniquekey,fetchOptions)
        .then(resp=>resp.json())
        .then(data=>this.setState({new:data}));

        document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";

    }

    createMarkup() {
		return {__html: this.state.newsItem.pagecontent};
	};

    render(){
        return (
            <div>
                <Row>
                    <Col span={2}>
                    </Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" angerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}>
                    </Col>
                    <Col span={2}>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default NewsDetail