import { Application } from '@/types/dto';
import { ProcessFail } from '@/components';

interface InterviewRejectProps {
  application: Application;
}

const InterviewReject = ({ application }: InterviewRejectProps) => {
  const { applicant } = application;
  return (
    <ProcessFail
      heading="인연이라면.. 저희 다시 만날 수 있겠죠..?"
      paragraph={`안녕하세요 ${applicant.name}님, Mash-Up Staff입니다. Mash-Up 12기에 많은 관심을 가지고 귀한 시간 내어 지원해 주셔서 진심으로 감사드립니다. 비록.. 면접에서 만나 뵙지 못했지만, 다음에 또 좋은 기회가 생긴다면 꼭 함께 할 수 있길 고대해봅니다. Mash-Up 12기 Rookie Recruiting에 지원해주셔서 다시 한 번 감사드리며 건강히 잘 지내시길 바랍니다.`}
    />
  );
};

export default InterviewReject;
