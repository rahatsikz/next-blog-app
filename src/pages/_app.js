import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const defaultData = {
    borderRadius: 6,
    colorPrimary: "#40a0a8",
  };
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: defaultData.colorPrimary,
          borderRadius: defaultData.borderRadius,
        },
      }}
    >
      <SessionProvider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </ConfigProvider>
  );
}
