import { LinkTo } from '@/components';
import {
  platforms,
  RECRUIT_DETAILS_ID,
  AOS_DEFAULT_DURATION,
  AOS_BASE_DURATION_DISTANCE,
  ViewPort,
} from '@/constants';
import { useDetectViewPort } from '@/hooks';
import * as Styled from './RecruitingDetailNavigation.styled';

const cardsCountInRowByViewPortSizeMap: Record<ViewPort, number> = {
  desktop: 3,
  tablet_l: 2,
  tablet_s: 2,
  mobile: 1,
};

const RecruitingDetailNavigation = () => {
  const { size } = useDetectViewPort();

  const getAosDurationForEachCard = (index: number) => {
    const cardsCountInRow = cardsCountInRowByViewPortSizeMap[size];
    return AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE * (index % cardsCountInRow);
  };

  return (
    <Styled.Container id={RECRUIT_DETAILS_ID}>
      <Styled.Contents>
        <Styled.Heading data-aos="fade-up" data-aos-duration={`${AOS_DEFAULT_DURATION}`}>
          We&apos;re looking for Rookies!
        </Styled.Heading>
        <Styled.SubTitle
          data-aos="fade-up"
          data-aos-duration={`${AOS_DEFAULT_DURATION + AOS_BASE_DURATION_DISTANCE}`}
        >
          저희는 개인의 성장에 재미와 열정을 갖고 있는 학생과 직장인들이 모여있는 Mash-Up입니다.
          <br />
          *중복지원은 불가하며 1개의 팀에만 지원 가능한 점 참고 부탁드립니다.
        </Styled.SubTitle>
        <Styled.List>
          {platforms.map(({ key, name, role, path }, index) => (
            <Styled.ListItem
              key={key}
              data-aos="fade-up"
              data-aos-duration={`${getAosDurationForEachCard(index)}`}
            >
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
      </Styled.Contents>
    </Styled.Container>
  );
};
export default RecruitingDetailNavigation;
