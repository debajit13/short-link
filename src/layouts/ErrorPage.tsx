import { Container, Row, Col, Button } from 'reactstrap';
import NotFound from '../assets/not-found.png';
import AppHeader from './AppHeader';
import { useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppHeader />
      <Container>
        <Row className='h-100'>
          <Col
            md='6'
            className='d-flex justify-content-center align-items-center'
          >
            <img alt='Sample' src={NotFound} width='100%' height='100%' />
          </Col>
          <Col
            md='6'
            className='d-flex flex-column justify-content-center align-items-center'
          >
            <h1 className='display-2'>404</h1>
            <h3 className='mt-3'>OOPS! Something went</h3>
            <h2>
              <strong>WRONG!</strong>
            </h2>
            <Button
              color='dark'
              size='lg'
              className='mt-3'
              onClick={() => {
                navigate('/');
              }}
            >
              Back to Homepage
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ErrorPage;
