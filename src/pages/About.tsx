import { Container } from 'reactstrap';
import AboutCard from '../components/about/AboutCard';

const About: React.FC = () => {
  return (
    <Container className='text-center mt-3'>
      <AboutCard
        title='About'
        description=' Short Link is a one stop solution for your link shortening task. In
            this digital era, links are our daily friends. But most of the time
            the lenght of the link is what makes it our reason for frustration.
            Maybe the message app that you use have certain length limit, or the
            tweet you want to do not support that much long link. In situations
            like this Short Link comes into picture to make your life easy.  Short Link under the hood uses SHRTCODE API, ReactJS, ReactStrap,
            Bootstrap, React Toastify, React Router and Axios.'
      />
    </Container>
  );
};

export default About;
