import { Col, Flex, Row } from "antd";
import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./scss/main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {}

export default function MainPage({}: Props) {
  const { t, i18n } = useTranslation();

  const settings = {
    dots: true,
    dotsClass: "custom-dot line-indicator",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    customPaging: (i: any) => (
      <div
        style={{
          position: "absolute",
          width: "100%",
          top: "-10px",
          opacity: 0,
        }}
      >
        {i}
      </div>
    ),
  };

  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="/slide-next.svg" alt="Next" />
      </div>
    );
  }

  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <img src="/slide-prev.svg" alt="Previous" />
      </div>
    );
  }

  return (
    <>
      <Row gutter={24}>
        <Col span={24}>
          <div className="banner-wrap">
            <div className="container">
              <Row>
                <Col lg={{ span: 12, order: 1 }} xs={{ span: 24, order: 2 }}>
                  <div className="banner-content">
                    <h1 className="heading">
                      สมัครสมาชิก
                      <br />
                      สเวนเซ่นส์วันนี้ พร้อมรับสิทธิพิเศษมากมายรอคุณอยู่ที่นี่
                    </h1>
                    <p>
                      พิเศษสุดๆ!&nbsp;สำหรับสมาชิกสเวนเซ่นส์ ยิ่งกิน ยิ่งได้
                      ยิ่งคุ้ม&nbsp;ใครๆ ก็สมัครได้
                      ใช้ง่ายสะดวกสบายพร้อมสิทธิประโยชน์มากมายเพื่อคนสำคัญเช่นคุณ&nbsp;รอไม่ได้แล้ว
                      สมัครเลย
                    </p>
                    <div className="btn-delivery" />
                  </div>
                </Col>
                <Col lg={{ span: 12, order: 2 }} xs={{ span: 24, order: 1 }}>
                  <div className="banner-image">
                    <img src="/banner-image.svg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div className="carousel-box">
            <h1>{t("deal")}</h1>
            <Slider {...settings}>
              <div className="deal-item">
                <a>
                  <div className="image1" />
                </a>
              </div>
              <div className="deal-item">
                <a>
                  <div className="image2" />
                </a>
              </div>
              <div className="deal-item">
                <a>
                  <div className="image3" />
                </a>
              </div>
              <div className="deal-item">
                <a>
                  <div className="image4" />
                </a>
              </div>
            </Slider>
            <h1>{t("news")}</h1>
          </div>
        </Col>
        <Col span={24}>
          <div className="container">
            <div className="box-left">
              <div className="column-content">
                <img
                  src="https://swensens1112.com/images/app-screen-webp.webp"
                  alt=""
                />
              </div>
              <div className="box-right">
                <h1>{t("dl")}</h1>
                <div className="app-screen">
                  <img
                    src="https://swensens1112.com/images/google-play.png"
                    alt=""
                  />
                  <img
                    src="https://swensens1112.com/images/app-store.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
