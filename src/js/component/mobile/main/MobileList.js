import React from 'react';
import {Row, Col} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class MobileList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var fetchOption = {
            method: 'GET'
        }

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOption)
            .then(resp => resp.json())
            .then(data => this.setState({news: data}));
    }

    render() {

        const {news} = this.state;

        const newsList = news.length
            ? news.map((newsItem, index) => (
                <section key={index} className="m_article list-item special_section clearfix">
                    <Link to={`details/${newsItem.unique}`}>
                        <div className="m_article_img">
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title}/>
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                {newsItem.title}
                            </div>

                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.realtype}</span>
                                    <span className="m_article_time">{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
            ))
            : 'nothing to load';
        return (
            <div>
                <Row>
                    <Router>
                        <Col span={24}>
                            {newsList}
                        </Col>
                    </Router>
                </Row>
            </div>
        );
    }
}

export default MobileList;