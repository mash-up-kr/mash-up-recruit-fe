import { Application } from '@/types/dto';
import { ProcessFail } from '@/components';

interface FinalConfirmRejectProps {
  application: Application;
}

const FinalConfirmReject = ({ application }: FinalConfirmRejectProps) => {
  const { applicant } = application;
  return (
    <ProcessFail
      heading="저희는 언제나.. 기다리고 있을게요..!
  행복..하세요..!!(눈물)"
      paragraph={`안녕하세요 ${applicant.name}님, Mash-Up입니다. 어째서.. 12기에 합류하지 않는 것인가요..!
  멋진 동료를 놓친 저희는 너무나 마음이 아픕니다.. 다음에 다시 기회가 된다면 Mash-Up으로 돌아와주세요! 12기 Rookie Recruiting 모든 프로세스에 임해주셔서 진심으로 감사드리며, 건강하고 행복하게 잘 지내세요! 다시 만나요!!`}
    />
  );
};

export default FinalConfirmReject;
