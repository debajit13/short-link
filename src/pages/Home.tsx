import { useState } from 'react';
import { Card, CardBody, Container } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import URLForm from '../components/home/URLForm';
import URLCard from '../components/home/URLCard';

const Home = () => {
  const [shortURL, setShortURL] = useState<string>('');

  const submitURLHandler = (url: string) => {
    setShortURL(url);
  };

  return (
    <Container className='d-flex h-75 flex-column align-items-center mt-3 justify-content-center'>
      <ToastContainer />
      <Card style={{ maxWidth: '500px', width: '100%' }}>
        <CardBody>
          <URLForm submitURLHandler={submitURLHandler} />
          {shortURL && <URLCard url={shortURL} />}
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
