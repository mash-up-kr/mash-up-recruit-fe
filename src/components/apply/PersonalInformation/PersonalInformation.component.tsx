import { LabeledInput } from '@/components';
import { KeyOf } from '@/types';
import { Applicant } from '@/types/dto';
import { validateForm } from '@/utils/reactHookForm';
import { isValidDate } from '@/utils/validDateString';
import { unescape } from 'lodash-es';
import { ChangeEventHandler } from 'react';
import { Controller, FieldValues, UseFormReturn } from 'react-hook-form';
import * as Styled from './PersonalInformation.styled';

export interface ApplyFormValues extends FieldValues {
  userName: string;
  email: string;
  phone: string;
  birthdate: string;
  residence: string;
  department: string;
  isAgreePersonalInfo: boolean;
}

export const APPLY_FORM_KEYS = {
  userName: 'userName',
  email: 'email',
  phone: 'phone',
  birthdate: 'birthdate',
  residence: 'residence',
  department: 'department',
  isAgreePersonalInfo: 'isAgreePersonalInfo',
} as const;

interface PersonalInformationProps {
  applicant: Applicant;
  applyForm: UseFormReturn<ApplyFormValues, object>;
  isDetailPageAndSubmitted: boolean;
}

const PersonalInformation = ({
  applicant,
  applyForm,
  isDetailPageAndSubmitted,
}: PersonalInformationProps) => {
  const {
    control,
    register,
    trigger,
    setValue,
    formState: { errors },
  } = applyForm;

  const handleReplacePhoneNumber: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const onlyNumberReg = /[^0-9]/g;

    if (onlyNumberReg.exec(currentTarget.value)) {
      setValue(APPLY_FORM_KEYS.phone, currentTarget.value.replace(onlyNumberReg, ''));
    }

    const restNumber = currentTarget.value.slice(3);
    const phoneNumberArr = [
      currentTarget.value.slice(0, 3),
      restNumber.slice(0, 4),
      restNumber.slice(4),
    ];

    const replacedPhoneNumber = phoneNumberArr.filter((isEmptyStr) => isEmptyStr).join('-');

    setValue(APPLY_FORM_KEYS.phone, replacedPhoneNumber);
  };

  const handleReplaceLocalDate: ChangeEventHandler<HTMLInputElement> = ({ currentTarget }) => {
    const onlyNumberReg = /[^0-9]/g;

    if (onlyNumberReg.exec(currentTarget.value)) {
      setValue(APPLY_FORM_KEYS.birthdate, currentTarget.value.replace(onlyNumberReg, ''));
    }

    const restNumber = currentTarget.value.slice(4);
    const localDateArr = [
      currentTarget.value.slice(0, 4),
      restNumber.slice(0, 2),
      restNumber.slice(2),
    ];

    const replacedLocalDate = localDateArr.filter((isEmptyStr) => isEmptyStr).join('-');

    setValue(APPLY_FORM_KEYS.birthdate, replacedLocalDate);
  };

  const handleValidForm = (applyFormKey: KeyOf<typeof APPLY_FORM_KEYS>) => {
    validateForm<ApplyFormValues>(trigger, applyFormKey);
  };

  return (
    <Styled.PersonalInformationSection>
      <Styled.SectionHeading>개인 정보</Styled.SectionHeading>

      <Styled.PersonalInformationWrapper>
        <Controller
          name={APPLY_FORM_KEYS.userName}
          control={control}
          rules={{
            required: '이름은 필수로 입력해야 해요!',
            maxLength: 24,
          }}
          defaultValue={unescape(applicant.name)}
          render={({ field }) => (
            <LabeledInput
              {...field}
              onChange={({ target }) => {
                if (target.value.length > 24) return;
                field.onChange(target.value);
              }}
              isError={!!errors.userName}
              errorMessage={errors.userName?.message}
              id={APPLY_FORM_KEYS.userName}
              placeholder="내용을 입력해주세요"
              label="이름"
              required
              disabled={isDetailPageAndSubmitted}
              $size="md"
              onBlur={() => {
                handleValidForm(APPLY_FORM_KEYS.userName);
              }}
            />
          )}
        />
      </Styled.PersonalInformationWrapper>

      <Styled.PersonalInformationWrapper>
        <LabeledInput
          {...register(APPLY_FORM_KEYS.phone, {
            required: '전화번호는 필수로 입력해야 해요!',
            pattern: {
              value: /^010-\d{3,4}-\d{4}$/,
              message: '전화번호 형식이 올바르지 않습니다.',
            },
            value: applicant.phoneNumber,
          })}
          maxLength={13}
          type="tel"
          onChange={handleReplacePhoneNumber}
          id={APPLY_FORM_KEYS.phone}
          placeholder="전화번호를 입력해주세요"
          label="전화번호"
          required
          disabled={isDetailPageAndSubmitted}
          isError={!!errors.phone}
          errorMessage={errors.phone?.message}
          $size="md"
          onBlur={() => {
            handleValidForm(APPLY_FORM_KEYS.phone);
          }}
        />
      </Styled.PersonalInformationWrapper>

      <Styled.PersonalInformationWrapper>
        <LabeledInput
          id={APPLY_FORM_KEYS.email}
          value={unescape(applicant.email)}
          disabled
          label="이메일"
          $size="md"
          required
          type="email"
        />
      </Styled.PersonalInformationWrapper>

      <Styled.PersonalInformationWrapper>
        <LabeledInput
          {...register(APPLY_FORM_KEYS.birthdate, {
            required: '생년월일은 필수로 입력해야 해요!',
            value: applicant.birthdate,
            validate: (value) => isValidDate(value) || '생년월일 형식이 올바르지 않습니다.',
          })}
          maxLength={10}
          type="text"
          onChange={handleReplaceLocalDate}
          id={APPLY_FORM_KEYS.birthdate}
          placeholder="생년월일을 입력해주세요 ex) 2000-01-15"
          label="생년월일"
          required
          disabled={isDetailPageAndSubmitted}
          isError={!!errors.birthdate}
          errorMessage={errors.birthdate?.message}
          $size="md"
          onBlur={() => {
            handleValidForm(APPLY_FORM_KEYS.birthdate);
          }}
        />
      </Styled.PersonalInformationWrapper>

      <Styled.PersonalInformationWrapper>
        <Controller
          name={APPLY_FORM_KEYS.residence}
          control={control}
          rules={{
            required: '거주지역은 필수로 입력해야 해요!',
            maxLength: 30,
          }}
          defaultValue={unescape(applicant.residence)}
          render={({ field }) => (
            <LabeledInput
              {...field}
              onChange={({ target }) => {
                if (target.value.length > 30) return;
                field.onChange(target.value);
              }}
              isError={!!errors.residence}
              errorMessage={errors.residence?.message}
              id={APPLY_FORM_KEYS.residence}
              placeholder="거주지역을 입력해주세요 ex) 서울시 강남구"
              label="거주지역"
              required
              disabled={isDetailPageAndSubmitted}
              $size="md"
              onBlur={() => {
                handleValidForm(APPLY_FORM_KEYS.residence);
              }}
            />
          )}
        />
      </Styled.PersonalInformationWrapper>

      <Styled.PersonalInformationWrapper>
        <Controller
          name={APPLY_FORM_KEYS.department}
          control={control}
          rules={{
            required: '소속은 필수로 입력해야 해요!',
            maxLength: 50,
          }}
          defaultValue={unescape(applicant.department)}
          render={({ field }) => (
            <LabeledInput
              {...field}
              onChange={({ target }) => {
                if (target.value.length > 50) return;
                field.onChange(target.value);
              }}
              isError={!!errors.department}
              errorMessage={errors.department?.message}
              id={APPLY_FORM_KEYS.department}
              placeholder="소속을 입력해주세요 ex) 회사, 학교, 취준생..."
              label="소속"
              required
              disabled={isDetailPageAndSubmitted}
              $size="md"
              onBlur={() => {
                handleValidForm(APPLY_FORM_KEYS.department);
              }}
            />
          )}
        />
      </Styled.PersonalInformationWrapper>
    </Styled.PersonalInformationSection>
  );
};

export default PersonalInformation;
