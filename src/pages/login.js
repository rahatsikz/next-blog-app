import { Button } from "antd";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const { callbackUrl } = router.query;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "36px",
            padding: "40px 0",
            color: "#40a0a8",
          }}
        >
          Login With Your Social Account
        </h1>
        <Button
          onClick={() =>
            signIn("github", {
              callbackUrl: callbackUrl || "http://localhost:3000/",
            })
          }
          shape="round"
          style={{ padding: "0px 80px", fontSize: "18px", height: "45px" }}
        >
          <GithubOutlined />
          Login With Github
        </Button>
        <br />
        <br />
        <Button
          onClick={() =>
            signIn("google", {
              callbackUrl: callbackUrl || "http://localhost:3000/",
            })
          }
          shape="round"
          style={{ padding: "0px 80px", fontSize: "18px", height: "45px" }}
        >
          <GoogleOutlined />
          Login With Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
