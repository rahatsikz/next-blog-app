import React from "react";
import img from "/public/undraw_Page_not_found_re_e9o6.png";
import { Image } from "antd";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image alt="" src={img.src} preview={false} />
    </div>
  );
};

export default ErrorPage;
