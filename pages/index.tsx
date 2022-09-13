import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "../comps/Footer";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>home page</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni rem sed
        velit earum reprehenderit saepe perferendis ullam provident.
        Necessitatibus dicta sunt fugiat accusamus sequi doloremque, saepe
        quibusdam neque iusto optio.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni rem sed
        velit earum reprehenderit saepe perferendis ullam provident.
        Necessitatibus dicta sunt fugiat accusamus sequi doloremque, saepe
        quibusdam neque iusto optio.
      </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
};

export default Home;
