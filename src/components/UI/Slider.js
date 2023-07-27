import { Carousel } from "antd";
import Image from "next/image";
import React from "react";
import styles from "@/styles/slider.module.css";

const Slider = () => {
  return (
    <Carousel autoplay>
      <div>
        <div
          className={styles.blurredBackground}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&dpr=1')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "70vh",
            width: "100%",
          }}
        >
          <h1 className={styles.centeredText}>
            All Desired <br /> Blogs are here now
          </h1>
        </div>
      </div>
      <div>
        <div
          className={styles.blurredBackground}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&dpr=1')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "70vh",
            width: "100%",
          }}
        >
          <h1 className={styles.centeredText}>
            Best Blog
            <br /> Site in the world
          </h1>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
