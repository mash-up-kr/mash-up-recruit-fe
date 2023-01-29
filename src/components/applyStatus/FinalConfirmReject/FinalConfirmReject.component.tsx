import { Application } from '@/types/dto';
import { ProcessFail, StatusDetailBackground } from '@/components';
import { CURRENT_GENERATION } from '@/constants';

interface FinalConfirmRejectProps {
  application: Application;
}

const FinalConfirmReject = ({ application }: FinalConfirmRejectProps) => {
  const { applicant } = application;
  return (
    <StatusDetailBackground imageType="basic" contentSize="s">
      <ProcessFail
        heading={`Mash-Up ${CURRENT_GENERATION}기에 합류하지 않으셨습니다.`}
        paragraph={`안녕하세요 ${applicant.name}님, Mash-Up에 관심을 갖고 지원해주셔서 진심으로 감사드립니다. 지금 당장은 인연이 닿지 않았지만 추후 더 좋은 기회에 꼭 다시 만나뵐 수 있도록 저희도 노력하겠습니다. 다시 한번 Mash-Up ${CURRENT_GENERATION}기에 보여주신 관심과 열정에 깊은 감사를 드립니다. `}
        survey
      />
    </StatusDetailBackground>
  );
};

export default FinalConfirmReject;
