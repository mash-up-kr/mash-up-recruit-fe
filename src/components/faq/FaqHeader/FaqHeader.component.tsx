import * as Styled from './FaqHeader.styled';

interface FaqHeaderProps {
  title: string;
}

const FaqHeader = ({ title }: FaqHeaderProps) => {
  return <Styled.Heading>{title}</Styled.Heading>;
};

export default FaqHeader;
