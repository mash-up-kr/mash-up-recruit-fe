import * as Styled from './RecruitHeader.styled';

interface RecruitHeaderProps {
  name: string;
  role: string;
}

const RecruitHeader = ({ name, role }: RecruitHeaderProps) => {
  return (
    <Styled.Container>
      <Styled.Heading>{name} Team</Styled.Heading>
      <Styled.SubTitle>{role}</Styled.SubTitle>
    </Styled.Container>
  );
};

export default RecruitHeader;
