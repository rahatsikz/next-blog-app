import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useState } from "react";
import { HomeOutlined, FileOutlined, CommentOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const DashLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "Home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link href="/dashboard/blogs">Blogs</Link>,
      key: "Blogs",
      icon: <FileOutlined />,
    },
    {
      label: <Link href="/dashboard/feeds">Feedbacks</Link>,
      key: "Feedbacks",
      icon: <CommentOutlined />,
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Layout>
        <Content
          style={
            {
              // margin: "0 16px",
            }
          }
        >
          <div
            style={{
              padding: 24,
              minHeight: "100vh",

              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
      <Sider
        style={{ background: "#303030" }}
        collapsible
        reverseArrow
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          style={{ background: "#303030" }}
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
    </Layout>
  );
};

export default DashLayout;
