import DashLayout from "@/components/layouts/DashLayout";

const FeedsPage = ({ data }) => {
  //   console.log(data);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "36px",
          padding: "40px 0",
          color: "#40a0a8",
        }}
      >
        Some Notable Feedbacks
      </h1>
      <div style={{ fontSize: "20px", textAlign: "center" }}>
        {data?.map((feed, idx) => (
          <p key={idx} style={{ paddingBottom: "12px" }}>
            - {feed}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FeedsPage;

FeedsPage.getLayout = function getLayout(page) {
  return <DashLayout>{page}</DashLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/feedback");
  const data = await res.json();

  //   console.log(data);

  return {
    props: { data },
  };
};
