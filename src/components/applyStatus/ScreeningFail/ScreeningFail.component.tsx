import { ProcessFail } from '@/components';
import { TEAM_NICK_NAME } from '@/constants';
import { useDetectViewPort } from '@/hooks';
import { Application } from '@/types/dto';

interface ScreeningFailProps {
  application: Application;
}

const ScreeningFail = ({ application }: ScreeningFailProps) => {
  const { size } = useDetectViewPort();
  const { applicant, team } = application;
  return (
    <ProcessFail
      heading={`Mash-Up 12기 ${size === 'mobile' ? '\n' : ''}Rookie Recruiting \n${
        TEAM_NICK_NAME[team.name]
      } 지원 서류 결과 안내`}
      paragraph={`안녕하세요 ${applicant.name}님, Mash-Up입니다. Mash-Up 12기에 많은 관심을 가지고 귀한 시간 내어 지원해 주셔서 진심으로 감사드립니다. 보내주신 지원서를 면밀히 검토 했으나, 아쉽지만 ${applicant.name}님은 Mash-Up 12기 Rookie Recruiting 1차 서류 전형에 불합격하셨습니다. Mash-Up 12기 Rookie Recruiting에 지원해주셔서 다시 한 번 감사드리며, 다음 기회에 인연이 될 수 있으면 좋겠습니다. 감사합니다.`}
    />
  );
};

export default ScreeningFail;
