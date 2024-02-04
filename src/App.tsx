import React, { useEffect, useState } from "react";
import "./scss/App.scss";
import MainPage from "./Main";
import {
  Button,
  Col,
  Divider,
  Drawer,
  Flex,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import {
  CaretDownOutlined,
  MenuOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Route, Routes, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";

function App() {
  const [lang, setLang] = useState("th");
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleChange = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const [pageTitle, setPageTitle] = useState("");

  const titleMap = [
    { path: "/", title: " " },
    { path: "/test1", title: `${t("Test1Des")}` },
    { path: "/test2", title: `${t("Test2Des")}` },
    { path: "/test3", title: `${t("Test3Des")}` },
  ];

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc, lang]);

  return (
    <Layout>
      <Row>
        <Col xs={0} lg={24}>
          <Layout.Header className="navbar-container">
            <div className="image">
              <div className="image-logo" />
            </div>
            <Space
              split={<Divider type="vertical" style={{ height: "6em" }} />}
            >
              <Menu style={{ border: "0" }}>
                <Menu.Item
                  style={{ display: "flex", alignItems: "center" }}
                  icon={
                    <img
                      alt=""
                      src="/location.svg"
                      width={"auto"}
                      height={20}
                    />
                  }
                >
                  <span>
                    กรุณาเลือกที่อยู่จัดส่ง{" "}
                    <CaretDownOutlined style={{ paddingLeft: "8px" }} />
                  </span>
                </Menu.Item>
              </Menu>
              <Flex justify="center" align="center" gap="middle">
                <Button className="btn-main-outline">Register</Button>
                <Button className="btn-main" type="primary">
                  Login
                </Button>
              </Flex>
              <Menu
                style={{
                  width: "90px",
                  display: "flex",
                  justifyContent: "end",
                  borderBottom: 0,
                }}
                mode="horizontal"
              >
                <SubMenu
                  title={
                    <span>
                      {lang === "th" ? `TH` : `EN`}
                      <CaretDownOutlined style={{ paddingLeft: "8px" }} />
                    </span>
                  }
                  className="language-menu"
                >
                  <Menu>
                    <Menu.Item key="en" onClick={() => handleChange("en")}>
                      English
                    </Menu.Item>
                    <Menu.Item key="th" onClick={() => handleChange("th")}>
                      ไทย
                    </Menu.Item>
                  </Menu>
                </SubMenu>
              </Menu>
            </Space>
          </Layout.Header>
        </Col>
        <Col xs={24} lg={0}>
          <Layout.Header className="navbar-container">
            <div className="navbar-sm">
              <img alt="" src="/icon-scan.svg" width={"auto"} height={32} />
              <div className="image">
                <div className="image-logo" />
              </div>
              <div>
                <Button type="text" className="btn">
                  <ShoppingOutlined />
                </Button>
                <Button type="text" className="btn" onClick={showDrawer}>
                  <MenuOutlined />
                </Button>
              </div>
            </div>
            <Menu style={{ border: "0" }}>
              <Menu.Item
                style={{ display: "flex", alignItems: "center" }}
                icon={
                  <img alt="" src="/location.svg" width={"auto"} height={20} />
                }
              >
                <span>
                  กรุณาเลือกที่อยู่จัดส่ง{" "}
                  <CaretDownOutlined style={{ paddingLeft: "8px" }} />
                </span>
              </Menu.Item>
            </Menu>
          </Layout.Header>
        </Col>
      </Row>
      <Layout.Content>
        <div className="content">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/test2" element={<></>} />
          </Routes>
        </div>
      </Layout.Content>
      <Layout.Footer className="footer">
        <div style={{ width: "100%", padding: "24px 32px" }}>
          <Row gutter={8}>
            <Col xs={24} lg={3}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/logo-red.svg" width={"auto"} height={50} alt="" />
              </div>
            </Col>
            <Col xs={24} lg={21}>
              <ul className="footer-list">
                <li>ไอศกรีมของเรา</li>
                <li>สิทธิพิเศษ</li>
                <li>รีวอร์ด</li>
                <li>คูปองของฉัน</li>
                <li>บัตรของขวัญ</li>
                <li>บัตรสเวนเซ่นส์การ์ด</li>
                <li>ข้อมูลของฉัน</li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="footer-social">
          <div className=" social-list">
            <img alt="" src="/icon-facebook.svg" width={"auto"} height={32} />
            <img alt="" src="/icon-instagram.svg" width={"auto"} height={32} />
            <img alt="" src="/icon-youtube.svg" width={"auto"} height={32} />
          </div>
          <ul className="footer-social-list">
            <li>คำถามที่พบบ่อย</li>
            <li>ข้อกำหนดการใช้งาน</li>
            <li>นโยบายความเป็นส่วนตัว</li>
          </ul>
        </div>
      </Layout.Footer>
      <Drawer
        title="ยินดีต้อนรับ"
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Flex justify="center" align="center" gap="middle" vertical>
          <Button className="btn-main-outline-w-full">Register</Button>
          <Button className="btn-main-w-full" type="primary">
            Login
          </Button>
        </Flex>
      </Drawer>
    </Layout>
  );
}

export default App;
