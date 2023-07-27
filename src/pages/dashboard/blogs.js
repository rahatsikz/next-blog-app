import BlogCard from "@/components/UI/BlogCard";
import DashLayout from "@/components/layouts/DashLayout";
import style from "@/styles/Home.module.css";

const Blogs = ({ alldata }) => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          padding: "20px 0",
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
  );
};

export default Blogs;

Blogs.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
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
