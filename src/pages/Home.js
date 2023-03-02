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
import { ToastContainer, toast } from 'react-toastify';
import { getShortURL } from '../api';

const Home = () => {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');

  async function shortURLCopyHandler(url) {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('short URL copied successfully!', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (err) {
      if (err) {
        toast.error('Failed to copy short URL!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    }
  }

  const longURLInputHandler = (e) => {
    setLongURL(e.target.value);
    console.log(e.target.value);
  };

  const longURLSubmitHandler = (e) => {
    e.preventDefault();
    getShortURL(longURL).then((res) => {
      if (res?.data.ok) {
        setShortURL(res?.data.result.short_link);
      }
    });

    setLongURL('');
  };

  return (
    <Container className='d-flex h-75 flex-column align-items-center mt-3 justify-content-center'>
      <ToastContainer />

      <Card style={{ maxWidth: '500px', width: '100%' }}>
        <CardBody>
          <Form
            onSubmit={(e) => {
              longURLSubmitHandler(e);
            }}
            className='mt-3'
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
                <span
                  role='button'
                  onClick={() => {
                    shortURLCopyHandler(shortURL);
                  }}
                >
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
