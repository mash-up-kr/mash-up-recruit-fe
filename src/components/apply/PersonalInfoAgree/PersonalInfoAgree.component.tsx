import { LabeledCheckbox } from '@/components';
import { UseFormReturn } from 'react-hook-form';
import {
  ApplyFormValues,
  APPLY_FORM_KEYS,
} from '../PersonalInformation/PersonalInformation.component';

interface PersonalInfoAgreeProps {
  applyForm: UseFormReturn<ApplyFormValues, object>;
  isDetailPageAndSubmitted: boolean;
}

const PersonalInfoAgree = ({ applyForm, isDetailPageAndSubmitted }: PersonalInfoAgreeProps) => {
  const { register, watch } = applyForm;
  return (
    <LabeledCheckbox
      {...register(APPLY_FORM_KEYS.isAgreePersonalInfo)}
      checked={isDetailPageAndSubmitted ? true : watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
      id={APPLY_FORM_KEYS.isAgreePersonalInfo}
      disabled={isDetailPageAndSubmitted}
    >
      <a
        href="https://snow-chestnut-45b.notion.site/Mash-Up-Recruit-d4d1eccd3e504bcba575d6e5a95cf1b1"
        target="_blank"
        rel="noreferrer"
      >
        개인정보 수집 및 이용
      </a>
      에 동의합니다.
    </LabeledCheckbox>
  );
};

export default PersonalInfoAgree;
