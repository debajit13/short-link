import { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
} from 'reactstrap';
import { BsClipboardCheck } from 'react-icons/bs';

const Home = () => {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');

  const longURLInputHandler = (e) => {
    setLongURL(e.target.value);
    console.log(e.target.value);
  };

  const longURLSubmitHandler = (e) => {
    e.preventDefault();
    setShortURL(longURL);
    setLongURL('');
  };

  return (
    <Container className='d-flex flex-column align-items-center mt-3 justify-content-center'>
      <Card style={{ maxWidth: '500px', width: '100%' }}>
        <CardBody>
          <Form
            onSubmit={(e) => {
              longURLSubmitHandler(e);
            }}
          >
            <FormGroup>
              <InputGroup>
                <Input
                  id='inputURL'
                  name='longURL'
                  value={longURL}
                  onChange={(e) => {
                    longURLInputHandler(e);
                  }}
                  placeholder='Enter URL here...'
                  type='url'
                  required
                />

                <Button type='submit' color='dark'>
                  Submit
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
          {shortURL && (
            <Card color='dark' outline>
              <CardBody className='d-flex justify-content-between align-items-center'>
                <span>{shortURL}</span>
                <span>
                  <BsClipboardCheck size={28} color='#000' />
                </span>
              </CardBody>
            </Card>
          )}
        </CardBody>
      </Card>
    </Container>
  );
};

export default Home;
