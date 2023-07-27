import BlogCard from "@/components/UI/BlogCard";
import Slider from "@/components/UI/Slider";
import RootLayout from "@/components/layouts/RootLayout";
import Head from "next/head";
import style from "@/styles/Home.module.css";

const HomePage = ({ alldata }) => {
  // console.log(alldata);
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <meta
          name="Next Blog"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <div style={{ paddingBottom: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "36px",
            margin: "20px auto",
            color: "#40a0a8",
          }}
        >
          Latest Blogs
        </h1>

        <div className={style.cardContainer}>
          {alldata.map((data) => (
            <BlogCard key={data.id} data={data}></BlogCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  // console.log(data);

  return {
    props: { alldata: data },
    revalidate: 10,
  };
};
