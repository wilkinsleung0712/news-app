import React from 'react';
import {Row, Col, BackTop} from 'antd';
import MobileHeader from '../header/MobileHeader';
import MobileFooter from '../footer/MobileFooter';

class MobileNewsDetail extends React.Component {

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
            })
    }

    createMarkup() {
        return {__html: this.state.newsItem.pagecontent};
    }

    render() {
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader/>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div
                                className="articleContainer"
                                dangerouslySetInnerHTML={this.createMarkup()}/>
                        </Col>
                    </Row>
                </div>
                <MobileFooter/>
                <BackTop/>
            </div>
        );
    }
}

export default MobileNewsDetail;