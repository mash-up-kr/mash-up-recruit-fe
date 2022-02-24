import { LinkTo } from '@/components';
import { platforms } from '@/constants';
import * as Styled from './RecruitingDetailNavigation.styled';

const RecruitingDetailNavigation = () => {
  return (
    <Styled.Container>
      <Styled.Heading id="header">We&apos;re looking for Rookies!</Styled.Heading>
      <Styled.SubTitle>
        저희는 개인의 성장에 재미와 열정을 갖고 있는 학생과 직장인들이 모여있는 Mash-Up입니다.
        <br />
        *중복지원은 불가하며 1개의 팀에만 지원 가능한 점 참고 부탁드립니다.
      </Styled.SubTitle>
      <Styled.List>
        {platforms.map(({ key, name, role, path }) => (
          <Styled.ListItem key={key}>
            <Styled.Card>
              <Styled.CardHeader>
                <h3>{name} Team</h3>
                <p>{role}</p>
              </Styled.CardHeader>
              <LinkTo href={path.recruit}>
                <button type="button">More Detail</button>
              </LinkTo>
            </Styled.Card>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.Container>
  );
};
export default RecruitingDetailNavigation;
