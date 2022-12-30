import { useRouter } from 'next/router';
import { useInterval } from '@/hooks';
import { getDifferenceOfDates, RECRUITMENT_START_KST_DATE } from '@/utils/date';
import type { DateDifference } from '@/utils/date';
import { useState, useEffect } from 'react';

import { CURRENT_GENERATION } from '@/constants';
import * as Styled from './RecruitingRemainder.styled';

const RecruitingRemainder = () => {
  const router = useRouter();

  const [difference, setDifference] = useState<DateDifference>(() =>
    getDifferenceOfDates(new Date(), RECRUITMENT_START_KST_DATE),
  );

  const [isPreviousDayOfRecruitingStart, isRunOutTimeOfRecruitingStart] = [
    difference.day === 0 && Object.values(difference).every((value) => value >= 0),
    difference.day <= -1,
  ];

  useInterval(
    () => {
      const currentDifference = getDifferenceOfDates(new Date(), RECRUITMENT_START_KST_DATE);
      setDifference(currentDifference);
    },
    isPreviousDayOfRecruitingStart ? 1000 : null,
  );

  useEffect(() => {
    if (!isRunOutTimeOfRecruitingStart) return;
    router.reload();
  }, [isRunOutTimeOfRecruitingStart, router]);

  return (
    <Styled.Container>
      <Styled.RemainderContainer>
        <Styled.Heading>Mash-Up {CURRENT_GENERATION}기 모집</Styled.Heading>
        {!isPreviousDayOfRecruitingStart && !isRunOutTimeOfRecruitingStart && (
          <Styled.Counter>
            <Styled.D />
            <Styled.Separator />
            <Styled.Day>{difference.day}</Styled.Day>
          </Styled.Counter>
        )}
        {isPreviousDayOfRecruitingStart && !isRunOutTimeOfRecruitingStart && (
          <Styled.Timer>
            <Styled.Hours>{difference.hour.toString().padStart(2, '0')}</Styled.Hours>
            <Styled.Colon />
            <Styled.Minutes>{difference.minute.toString().padStart(2, '0')}</Styled.Minutes>
            <Styled.Colon />
            <Styled.Seconds>{difference.second.toString().padStart(2, '0')}</Styled.Seconds>
          </Styled.Timer>
        )}
      </Styled.RemainderContainer>
      <Styled.SphereContainer>
        <Styled.BackLight />
        <Styled.Sphere />
      </Styled.SphereContainer>
    </Styled.Container>
  );
};

export default RecruitingRemainder;
