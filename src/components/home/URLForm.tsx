import { useState } from 'react';
import { Form, FormGroup, Input, InputGroup, Button } from 'reactstrap';
import { getShortURL } from '../../api';
import { toast } from 'react-toastify';

interface submitResponse {
  data: {
    ok: boolean;
    result: {
      short_link: string;
    };
  };
}

const URLForm: React.FC<{ submitURLHandler: (url: string) => void }> = ({
  submitURLHandler,
}) => {
  const [longURL, setLongURL] = useState<string>('');
  const longURLInputHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setLongURL((e.target as HTMLInputElement).value);
  };

  const longURLSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getShortURL(longURL)
      .then((res: submitResponse) => {
        if (res?.data.ok) {
          submitURLHandler(res?.data.result.short_link);
        }
      })
      .catch((err) => {
        if (err.response.data.ok === false) {
          toast.error(err.response.data.error, {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          submitURLHandler('');
        }
      });
    setLongURL('');
  };
  return (
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
  );
};

export default URLForm;
