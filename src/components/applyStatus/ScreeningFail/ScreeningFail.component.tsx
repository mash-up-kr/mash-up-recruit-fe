import { ProcessFail, StatusDetailBackground } from '@/components';
import { CURRENT_GENERATION, TEAM_NICK_NAME } from '@/constants';
import { useDetectViewPort } from '@/hooks';
import { Application } from '@/types/dto';

interface ScreeningFailProps {
  application: Application;
}

const ScreeningFail = ({ application }: ScreeningFailProps) => {
  const { size } = useDetectViewPort();
  const { applicant, team } = application;
  return (
    <StatusDetailBackground imageType="basic" contentSize="s">
      <ProcessFail
        heading={`Mash-Up ${CURRENT_GENERATION}기 ${
          size === 'mobile' ? '\n' : ''
        }Rookie Recruiting \n${TEAM_NICK_NAME[team.name]} 서류 결과 안내`}
        paragraph={`안녕하세요 ${applicant.name}님, Mash-Up에 관심을 갖고 지원해주셔서 진심으로 감사드립니다. ${applicant.name}님과 Mash-Up이 함께 하는 방향을 진지하게 숙고했지만 아쉽게도 이번 Mash-Up ${CURRENT_GENERATION}기 1차 서류 전형에서는 함께 하기 어렵다는 말씀을 전하게 되었습니다. Mash-Up ${CURRENT_GENERATION}기에 함께 하기 위해 ${applicant.name}님께서 보여주신 열정과 시간을 생각하면 함께 하지 못한다는 사실을 말씀드리기 매우 조심스럽고 죄송스러운 마음입니다. 지금 당장은 인연이 닿지 않았지만 추후 더 좋은 기회에 꼭 다시 만나뵐 수 있도록 저희도 노력하겠습니다. 다시 한번 Mash-Up ${CURRENT_GENERATION}기에 보여주신 관심과 열정에 깊은 감사를 드립니다.`}
      />
    </StatusDetailBackground>
  );
};

export default ScreeningFail;
