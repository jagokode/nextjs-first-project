import Head from "next/head";
import styles from "../../styles/Blogs.module.css";
import Link from "next/link";

// run at build time or before component rendered
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { blogs: data },
  };
};

const Ninjas = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Jago Kode | Blogs</title>
        <meta name="keywords" content="jagokode, nextjs" />
      </Head>
      <div>
        <h1>All Blogs</h1>
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <a className={styles.single}>
              <h3>{blog.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
