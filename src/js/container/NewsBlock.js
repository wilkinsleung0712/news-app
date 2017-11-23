import React from 'react';
import {Card} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class NewsBlock extends React.Component {

    constructor() {
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount() {
        var fetchOptions = {
            method: 'GET'
        };

        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count, fetchOptions)
            .then(resp => resp.json())
            .then(json => this.setState({news: json}));
    }
    render() {
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        {newsItem.title}
                    </Link>
                </li>
            ))
            : "no news";

        return (
            <div className="topNewsList">
                <Card>
                    <Router>
                        <ul>
                            {newsList}
                        </ul>
                    </Router>
                </Card>
            </div>
        );
    }
}

export default NewsBlock;