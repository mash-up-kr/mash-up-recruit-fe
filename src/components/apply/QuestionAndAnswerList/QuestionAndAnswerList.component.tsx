import { LabeledInput, LabeledTextArea } from '@/components/common';
import { Question } from '@/types/dto';
import { validateForm } from '@/utils/reactHookForm';
import { unescape } from 'lodash-es';
import { Controller, UseFormReturn } from 'react-hook-form';
import { ApplyFormValues } from '../PersonalInformation/PersonalInformation.component';
import * as Styled from './QuestionAndAnswerList.styled';

export interface QuestionAndAnswer {
  question: Question;
  answer: {
    content: string;
    answerId: number;
    questionId: number;
  };
}

interface QuestionAndAnswerProps {
  questionsAndAnswers: QuestionAndAnswer[];
  applyForm: UseFormReturn<ApplyFormValues, object>;
  isDetailPageAndSubmitted: boolean;
}

const QuestionAndAnswerList = ({
  questionsAndAnswers,
  applyForm,
  isDetailPageAndSubmitted,
}: QuestionAndAnswerProps) => {
  const {
    control,
    watch,
    trigger,
    formState: { errors },
  } = applyForm;

  const handleValidForm = (applyFormKey: string) => {
    validateForm<ApplyFormValues>(trigger, applyFormKey);
  };
  return (
    <Styled.QuestionListSection>
      <Styled.SectionHeading>질문 목록</Styled.SectionHeading>
      {questionsAndAnswers?.map(({ question, answer }, index) => {
        const uniqueQuestionId = `question-${question.questionId}`;
        return (
          <Styled.QuestionWrapper key={uniqueQuestionId}>
            {question.questionType === 'MULTI_LINE_TEXT' ? (
              <Controller
                name={uniqueQuestionId}
                control={control}
                rules={{
                  required: {
                    value: question.required,
                    message: '필수로 입력해야하는 항목이에요!',
                  },
                  maxLength: {
                    value: question.maxContentLength || 10000,
                    message: '최대 글자수를 초과하였습니다.',
                  },
                }}
                defaultValue={unescape(answer?.content)}
                render={({ field }) => (
                  <LabeledTextArea
                    {...field}
                    onChange={({ target }) => {
                      const { maxContentLength } = question;
                      if (!maxContentLength && target.value.length > 10000) return;

                      if (maxContentLength && maxContentLength < target.value.length) return;

                      field.onChange(target.value);
                    }}
                    label={`${index + 1}. ${question.content}`}
                    placeholder="내용을 입력해주세요."
                    required={question.required}
                    disabled={isDetailPageAndSubmitted}
                    id={uniqueQuestionId}
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentLength={question.maxContentLength}
                    description={question.description}
                  />
                )}
              />
            ) : (
              <Controller
                name={uniqueQuestionId}
                control={control}
                rules={{
                  required: {
                    value: question.required,
                    message: '필수로 입력해야하는 항목이에요!',
                  },
                  maxLength: {
                    value: question.maxContentLength || 10000,
                    message: '최대 글자수를 초과하였습니다.',
                  },
                }}
                defaultValue={unescape(answer?.content)}
                render={({ field }) => (
                  <LabeledInput
                    {...field}
                    onChange={({ target }) => {
                      const { maxContentLength } = question;
                      if (!maxContentLength && target.value.length > 10000) return;

                      if (maxContentLength && maxContentLength < target.value.length) return;

                      field.onChange(target.value);
                    }}
                    id={uniqueQuestionId}
                    label={`${index + 1}. ${question.content}`}
                    required={question.required}
                    disabled={isDetailPageAndSubmitted}
                    $size="md"
                    placeholder="내용을 입력해주세요."
                    isError={!!errors[uniqueQuestionId]}
                    errorMessage={errors[uniqueQuestionId]?.message}
                    onBlur={() => {
                      handleValidForm(uniqueQuestionId);
                    }}
                    currentLength={watch(uniqueQuestionId)?.length}
                    maxContentLength={question.maxContentLength}
                    description={question.description}
                  />
                )}
              />
            )}
          </Styled.QuestionWrapper>
        );
      })}
    </Styled.QuestionListSection>
  );
};

export default QuestionAndAnswerList;
