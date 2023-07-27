import RootLayout from "@/components/layouts/RootLayout";
import { Image } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";

const BlogDetails = ({ data }) => {
  const router = useRouter();

  // console.log(data);

  return (
    <div style={{ padding: "20px 50px" }}>
      <Head>
        <title>Next Blog</title>
        <meta
          name="Next Blog"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* <p>Detail of {router.query.blogID} </p> */}

      <div style={{ display: "flex", gap: "30px", justifyContent: "center" }}>
        <Image src={data.image} alt="" width={570} />

        <div>
          <h1 style={{ fontSize: "30px" }}> {data.title} </h1>
          <p style={{ fontSize: "16px" }}> {data.author} </p>
          <p style={{ fontSize: "16px" }}> {data.publishDate} </p>
          <p style={{ fontSize: "18px", marginTop: "15px", maxWidth: "470px" }}>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

BlogDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  const paths = data.map((card) => ({
    params: { blogID: card.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(`http://localhost:5000/blogs/${params.blogID}`);
  const data = await res.json();

  // console.log(data);

  return {
    props: { data },
    revalidate: 10,
  };
};
