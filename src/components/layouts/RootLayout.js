import { Button, Image, Layout, Menu, theme } from "antd";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Layout.module.css";
import logo from "/public/next-blog-high-resolution-color-logo.png";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer, colorPrimary },
  } = theme.useToken();

  const { data: session } = useSession();

  const router = useRouter();

  const handleLoginOrLogout = () => {
    // If the user is logged in, trigger logout action
    // If the user is not logged in, redirect to the login page
    session?.user ? signOut() : router.push("/login");
  };

  const items = [
    {
      label: <Link href="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link href="/feedbacks">Feedbacks</Link>,
      key: "Feedbacks",
    },
    {
      label: <Link href="/dashboard">Dashboard</Link>,
      key: "Dashboard",
    },
    {
      label: (
        <Button onClick={handleLoginOrLogout}>
          {session?.user ? "Logout" : "Login"}
        </Button>
      ),
      key: "Log out",
    },
  ];

  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <Layout className="layout">
      <Header className={styles.header}>
        <div className="demo-logo">
          <Link href="/">
            <Image alt="logo" src={logo.src} width={100} preview={false} />
          </Link>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={items}
          style={{
            display: "flex",
            gap: "18px",
            fontSize: "18px",
            background: "#303030",
            fontWeight: "bold",
            // color: "white",
            flex: "auto",
            minWidth: 0,
          }}
        />
      </Header>

      <Content
      //   style={{ padding: "0 50px" }}
      >
        <div
          className="site-layout-content"
          style={{ background: colorBgContainer, minHeight: "100vh" }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center", fontSize: "16px" }}>
        Next Blog ©2023 Created by Rahat Sikder
      </Footer>
    </Layout>
  );
};

export default RootLayout;
