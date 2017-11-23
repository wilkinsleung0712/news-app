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
                        <div className="left-container">
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
                        <Tabs className="tabs_news" defaultActiveKey="top">
                            <TabPane tab="news" key="top">
                                <NewsBlock count={22} type="top" width="100%" bordered="false"></NewsBlock>
                            </TabPane>
                            <TabPane tab="national" key="national">
                                <NewsBlock count={22} type="guoji" width="100%" bordered="false"></NewsBlock>
                            </TabPane>
                        </Tabs>

                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    }
}

export default NewsContainer;