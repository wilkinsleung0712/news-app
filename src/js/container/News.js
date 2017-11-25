import React from 'react';
import {Row, Col, Tabs, Carousel} from 'antd';
import NewsBlock from './NewsBlock';
import NewsImageBlock from './NewsImageBlock';
const TabPane = Tabs.TabPane;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    effect: 'fade'
};

export class NewsContainer extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div>
                                        <img src="./images/carousel_1.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./images/carousel_2.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./images/carousel_3.jpg"/>
                                    </div>
                                    <div>
                                        <img src="./images/carousel_4.jpg"/>
                                    </div>
                                </Carousel>
                            </div>
                            <NewsImageBlock
                                count={6}
                                type="guoji"
                                width="400px"
                                title="国际头条"
                                imageWidth="112px"/>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条新闻" key="1">
                                <NewsBlock count={22} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <NewsBlock count={22} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <div>
                            <NewsImageBlock
                                count={8}
                                type="guonei"
                                width="100%"
                                title="国内新闻"
                                imageWidth="132px"/>
                            <NewsImageBlock
                                count={16}
                                type="yule"
                                width="100%"
                                title="娱乐新闻"
                                imageWidth="132px"/>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default NewsContainer;