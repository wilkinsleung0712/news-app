import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class NewsImageBlock extends React.Component {

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
            .then(res => res.json())
            .then(data => this.setState({news: data}));
    }

    render() {
        const styleImage = {
            // start new line and go as far as it can on display block
            display: "block",
            width: this.props.imageWidth,
            height: "90px"
        };

        const styleH3 = {
            // control the text width
            width: this.props.imageWidth,
            whiteSpace: "nowrap",
            // control the overflow hidden for too much text
            overflow: "hidden",
            // control the ... to represent the over text
            textOverflow: "ellipsis"
        }
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <div key={index} className="imageblock">
                    <Router>
                        <Link to={`/details/${newsItem.uniquekey}`} target="_blank">
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                            <div className="custom-card">
                                <h3 style={styleH3}>{newsItem.title}</h3>
                                <p>{newsItem.author_name}</p>
                            </div>
                        </Link>
                    </Router>
                </div>
            ))
            : 'nothing to load';
        return (
            <div className="topNewsList">
                <Card
                    title={this.props.title}
                    bordered={true}
                    style={{
                    width: this.props.width
                }}>

                    {newsList}

                </Card>
            </div>
        )
    }
}

export default NewsImageBlock