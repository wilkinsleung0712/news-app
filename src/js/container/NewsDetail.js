import React from 'react';
import {Row, Col, BackTop} from 'antd';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import NewsImageBlock from '../container/NewsImageBlock';

class NewsDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount() {
        var fetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey, fetchOptions)
            .then(resp => resp.json())
            .then(data => {
                this.setState({newsItem: data})
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            });

    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    };

    render() {
        return (
            <div>
                <Header/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}>
                        <NewsImageBlock
                            count={40}
                            type="top"
                            width="100%"
                            title="related News"
                            imageWidth="150px"/>
                    </Col>
                    <Col span={2}></Col>

                </Row>
                <Footer/>
                <BackTop/>
            </div>
        );
    }
}

export default NewsDetail;