import { Card, Image } from "antd";
import { UserOutlined, CalendarOutlined } from "@ant-design/icons";
import Link from "next/link";

const BlogCard = ({ data }) => {
  const { Meta } = Card;
  return (
    <Link href={`/blog/${data.id}`}>
      <Card
        hoverable
        style={{ textAlign: "center" }}
        cover={<Image alt="example" src={data.image} preview={false} />}
      >
        <h1 style={{ fontSize: "25px" }}>{data.title}</h1>
        <p style={{ margin: "10px 0" }}>{data.content.slice(0, 50)}...</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <UserOutlined />
            <span>{data.author}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <CalendarOutlined />
            <span>{data.publishDate}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
