import { BsClipboardCheck } from 'react-icons/bs';
import { Card, CardBody } from 'reactstrap';
import { copyToClipboard } from '../../utils/copyToClipboard';

const URLCard: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Card color='dark' outline>
      <CardBody className='d-flex justify-content-between align-items-center'>
        <span>{url}</span>
        <span
          role='button'
          onClick={() => {
            copyToClipboard(url);
          }}
        >
          <BsClipboardCheck size={28} color='#000' />
        </span>
      </CardBody>
    </Card>
  );
};

export default URLCard;
