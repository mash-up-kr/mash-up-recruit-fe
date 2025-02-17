import { CURRENT_GENERATION } from '@/constants';
import * as Styled from './ProcessFail.styled';

interface ProcessFailProps {
  heading: string;
  paragraph: string;
  survey?: boolean;
}

const ProcessFail = ({ heading, paragraph, survey = false }: ProcessFailProps) => {
  return (
    <Styled.ProcessFail>
      <Styled.FailHeading>{heading}</Styled.FailHeading>
      <Styled.FailParagraph>{paragraph}</Styled.FailParagraph>
      {survey && (
        <Styled.SurveyRequestMessage>
          <Styled.SatisfactionSurveyLink
            href="https://forms.gle/bfpbkhrZckeg5Sim8"
            target="_blank"
            rel="noreferrer"
          >
            https://forms.gle/bfpbkhrZckeg5Sim8
          </Styled.SatisfactionSurveyLink>
          Mash-Up {CURRENT_GENERATION}기 모집 프로세스 경험에 대한 만족도 설문을 진행하고 있습니다.
          선택사항이며, 지원자님의 소중한 답변을 통해 더 나은 프로세스를 만들어 성장하는 Mash-Up이
          되겠습니다.
        </Styled.SurveyRequestMessage>
      )}
    </Styled.ProcessFail>
  );
};

export default ProcessFail;
