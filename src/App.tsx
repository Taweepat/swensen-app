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
import Register from "./register";
import Login from "./login";

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
            <NavLink to="/">
              <div className="image">
                <div className="image-logo" />
              </div>
            </NavLink>
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
                    {t("delivery")}
                    <CaretDownOutlined style={{ paddingLeft: "8px" }} />
                  </span>
                </Menu.Item>
              </Menu>
              <Flex justify="center" align="center" gap="middle">
                <NavLink to="/Login">
                  <Button className="btn-main-outline">{t("register")}</Button>
                </NavLink>
                <NavLink to="/Register">
                  <Button className="btn-main" type="primary">
                    {t("login")}
                  </Button>
                </NavLink>
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
                      Thai
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
              <NavLink to="/">
                <div className="image">
                  <div className="image-logo" />
                </div>
              </NavLink>
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
                  {t("delivery")}
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
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
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
                <li>{t("brandsite")}</li>
                <li>{t("privilege")}</li>
                <li>{t("reward")}</li>
                <li>{t("mycoupons")}</li>
                <li>{t("giftvoucher")}</li>
                <li>{t("membercard")}</li>
                <li>{t("myaccount")}</li>
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
            <li>{t("faq")}</li>
            <li>{t("terms")}</li>
            <li>{t("policy")}</li>
          </ul>
        </div>
      </Layout.Footer>
      <Drawer
        title={t("welcome")}
        placement={"right"}
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Flex justify="center" align="center" gap="middle" vertical>
          <NavLink to="/Login">
            <Button className="btn-main-outline-w-full">{t("register")}</Button>
          </NavLink>
          <NavLink to="/Register">
            <Button className="btn-main-w-full" type="primary">
              {t("login")}
            </Button>
          </NavLink>
        </Flex>
      </Drawer>
    </Layout>
  );
}

export default App;
