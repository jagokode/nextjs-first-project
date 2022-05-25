import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jago Kode | Home</title>
        <meta name="keywords" content="jagokode, nextjs" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          assumenda recusandae reprehenderit necessitatibus vero inventore unde
          voluptates, a ratione expedita!
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          cupiditate tenetur necessitatibus quos odit vel quisquam! Quia, nulla
          nostrum voluptatum temporibus autem eius est voluptas maxime alias
          facilis minima esse!
        </p>
        <Link href={"/blogs"}>
          <a className={styles.btn}>Baca Blogs</a>
        </Link>
      </div>
    </>
  );
}
