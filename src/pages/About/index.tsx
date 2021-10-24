interface AboutProps {
  title: String,
}
 
export const About = (props: AboutProps): JSX.Element => {
  const { title } = props;

  return (
    <div className="page-container">
      <h1>{title}</h1>
    </div>
  );
}
 
export default About;