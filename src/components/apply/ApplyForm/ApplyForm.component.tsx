import { LabeledCheckbox, LabeledInput, LabeledTextArea, LinkTo } from '@/components';
import {
  APPLY_ANDROID_PAGE,
  APPLY_DESIGN_PAGE,
  APPLY_FRONT_END_PAGE,
  APPLY_IOS_PAGE,
  APPLY_NODE_PAGE,
  APPLY_SPRING_PAGE,
} from '@/constants';
import { ValueOf } from '@/types';
import { useRouter } from 'next/router';
import { Question } from 'pages/apply/[platformName]';
import { ChangeEventHandler } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import * as Styled from './ApplyForm.styled';

interface ApplyFormProps {
  heading: string;
  questionList: Question[];
}

interface ApplyFormValues extends FieldValues {
  userName: string;
  email: string;
  phone: string;
  isAgreePersonalInfo: boolean;
}

const APPLY_FORM_KEYS = {
  userName: 'userName',
  email: 'email',
  phone: 'phone',
  isAgreePersonalInfo: 'isAgreePersonalInfo',
} as const;

export const PLATFORM_HEADINGS = {
  [APPLY_FRONT_END_PAGE]: 'Frontend Developer',
  [APPLY_ANDROID_PAGE]: 'Android Developer',
  [APPLY_DESIGN_PAGE]: 'Product Design',
  [APPLY_IOS_PAGE]: 'iOS Developer',
  [APPLY_NODE_PAGE]: 'Server Developer (Node.js)',
  [APPLY_SPRING_PAGE]: 'Server Developer (Spring)',
} as const;

export type PlatformHeadings = typeof PLATFORM_HEADINGS;

const ApplyForm = ({ heading, questionList }: ApplyFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<ApplyFormValues>();

  const router = useRouter();

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

  const handleValidateForm = (formKey: ValueOf<ApplyFormValues>) => {
    trigger(formKey);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <section>
      <Styled.PlatformHeading>{heading}</Styled.PlatformHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.PersonalInformationSection>
          <Styled.SectionHeading>개인 정보</Styled.SectionHeading>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.userName, {
                required: '이름은 필수로 입력해야 해요!',
              })}
              maxLength={30}
              isError={!!errors.name}
              errorMessage={errors.name?.message}
              id={APPLY_FORM_KEYS.userName}
              placeholder="내용을 입력해주세요"
              label="이름"
              required
              $size="md"
              onBlur={() => {
                handleValidateForm(APPLY_FORM_KEYS.userName);
              }}
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
              })}
              maxLength={13}
              type="tel"
              onChange={handleReplacePhoneNumber}
              id={APPLY_FORM_KEYS.phone}
              placeholder="010-1234-5678"
              label="전화번호"
              required
              isError={!!errors.phone}
              errorMessage={errors.phone?.message}
              $size="md"
              onBlur={() => {
                handleValidateForm(APPLY_FORM_KEYS.phone);
              }}
            />
          </Styled.PersonalInformationWrapper>

          <Styled.PersonalInformationWrapper>
            <LabeledInput
              {...register(APPLY_FORM_KEYS.email)}
              id={APPLY_FORM_KEYS.email}
              // TODO:(하준) 유저의 이메일로 value 삽입
              value="mashup12th@gmail.com"
              disabled
              label="이메일"
              $size="md"
              required
            />
            <Styled.ModifyEmailMessage>
              이메일 수정은 마이페이지에서 가능합니다.
            </Styled.ModifyEmailMessage>
          </Styled.PersonalInformationWrapper>
        </Styled.PersonalInformationSection>
        <Styled.QuestionListSection>
          <Styled.SectionHeading>질문 목록</Styled.SectionHeading>
          {questionList?.map((question) => {
            const uniqueQuestionId = `question-${question.questionId}`;
            return (
              <Styled.QuestionWrapper key={uniqueQuestionId}>
                {question.questionType === 'MULTI_LINE_TEXT' ? (
                  <LabeledTextArea
                    {...register(uniqueQuestionId, {
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: question.maxContentSize,
                    })}
                    maxLength={question.maxContentSize}
                    label={question.content}
                    placeholder="내용을 입력해주세요."
                    required={question.required}
                    id={uniqueQuestionId}
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidateForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentSize={question.maxContentSize}
                  />
                ) : (
                  <LabeledInput
                    {...register(uniqueQuestionId, {
                      required: {
                        value: question.required,
                        message: '필수로 입력해야하는 항목이에요!',
                      },
                      maxLength: question.maxContentSize,
                    })}
                    maxLength={question.maxContentSize}
                    id={uniqueQuestionId}
                    label={question.content}
                    required={question.required}
                    $size="md"
                    placeholder="내용을 입력해주세요."
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidateForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentSize={question.maxContentSize}
                  />
                )}
              </Styled.QuestionWrapper>
            );
          })}
        </Styled.QuestionListSection>
        <LabeledCheckbox
          {...register(APPLY_FORM_KEYS.isAgreePersonalInfo)}
          checked={watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}
          id={APPLY_FORM_KEYS.isAgreePersonalInfo}
        >
          <LinkTo href="/">개인정보 수집 및 이용</LinkTo>에 동의합니다.
        </LabeledCheckbox>
        <Styled.ControlSection>
          <Styled.TempSaveButton disabled={!watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}>
            임시저장하기
          </Styled.TempSaveButton>
          <Styled.SubmitButton disabled={!watch(APPLY_FORM_KEYS.isAgreePersonalInfo)}>
            제출하기
          </Styled.SubmitButton>
          <Styled.BackToListButton type="button" onClick={router.back}>
            목록으로 돌아가기
          </Styled.BackToListButton>
        </Styled.ControlSection>
      </form>
    </section>
  );
};

export default ApplyForm;
