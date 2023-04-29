import { Card, CardBody, CardHeader, CardText } from 'reactstrap';

interface AboutCardData {
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardData> = ({ title, description }) => {
  return (
    <Card color='dark' outline>
      <CardHeader>
        <h1>{title}</h1>
      </CardHeader>
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default AboutCard;
