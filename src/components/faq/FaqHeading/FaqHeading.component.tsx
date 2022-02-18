import * as Styled from './FaqHeading.styled';

interface FaqHeadingProps {
  title: string;
}

const FaqHeading = ({ title }: FaqHeadingProps) => {
  return <Styled.Heading>{title}</Styled.Heading>;
};

export default FaqHeading;
