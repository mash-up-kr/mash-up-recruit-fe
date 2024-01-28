import { LinkTo, RecruitDate } from '@/components';
import { Platforms } from '@/constants';
import { RecruitSchedule } from '@/types/dto';
import * as Styled from './BottomNavigation.styled';

interface BottomNavigationProps {
  platforms: Platforms;
  recruitSchedule: RecruitSchedule;
}

const BottomNavigation = ({ platforms, recruitSchedule }: BottomNavigationProps) => {
  return (
    <nav>
      <Styled.List>
        {platforms.map(({ key, path, name, role }) => {
          return (
            <Styled.ListItem key={key}>
              <LinkTo href={path.recruit}>
                <Styled.PlatformContainer>
                  <span>{name} Team</span>
                  <span>{role}</span>
                </Styled.PlatformContainer>
                <RecruitDate recruitSchedule={recruitSchedule} />
              </LinkTo>
            </Styled.ListItem>
          );
        })}
      </Styled.List>
    </nav>
  );
};
export default BottomNavigation;
