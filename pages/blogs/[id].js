export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const data = await response.json();

  const paths = data.map((blog) => {
    return {
      params: { id: blog.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  return {
    props: { blog: data },
  };
};

const Blog = ({ blog }) => {
  return (
    <div>
      <h1>{blog.name}</h1>
      <p>{blog.email}</p>
      <p>{blog.website}</p>
      <p>{blog.address.city}</p>
    </div>
  );
};

export default Blog;
