import * as Styled from './ApplyLink.styled';

interface ApplyLinkProps {
  href: string;
}

const ApplyLink = ({ href }: ApplyLinkProps) => {
  return (
    <Styled.Container>
      <Styled.Link href={href}>지원하기</Styled.Link>
    </Styled.Container>
  );
};
export default ApplyLink;
