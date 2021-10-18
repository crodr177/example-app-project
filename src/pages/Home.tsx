interface HomeProps {
  title: String,
}
 
export const Home = (props: HomeProps): JSX.Element => {
  const { title } = props;

  return (
    <div className="page-container">
      <h1>{title}</h1>
    </div>
  );
}
 
export default Home;