import { ProcessFail } from '@/components';
import { Application } from '@/types/dto';
import { TEAM_NICK_NAME } from '@/constants';
import { useDetectViewPort } from '@/hooks';

interface InterviewFailProps {
  application: Application;
}

const InterviewFail = ({ application }: InterviewFailProps) => {
  const { applicant, team } = application;
  const { size } = useDetectViewPort();
  return (
    <ProcessFail
      heading={`Mash-Up 12기 ${size === 'mobile' ? '\n' : ''}Rookie Recruiting \n${
        TEAM_NICK_NAME[team.name]
      } 면접 결과 안내`}
      paragraph={`안녕하세요, ${
        applicant.name
      }님! Mash-Up입니다. 먼저 Mash-Up 12기에 많은 관심 가져 주시고, 귀한 시간 내어 지원해 주셔서 감사합니다. 보내주신 지원서와 면접 경험을 바탕으로 면밀히 살펴보고 ${
        TEAM_NICK_NAME[team.name]
      }이 추구하는 인재상과 잘 어울리는지 평가하였습니다.
  아쉽지만 ${applicant.name}님의 뛰어난 역량에도 불구하고, 제한된 모집 인원으로 인해 ${
        applicant.name
      }님을 Mash-Up 12기에 모실 수 없게 되었습니다. Mash-Up 12기 Rookie Recruiting에 지원해주셔서 다시 한 번 감사드리며, 다음 기회에 인연이 될 수 있으면 좋겠습니다. 감사합니다.`}
      survey
    />
  );
};

export default InterviewFail;
