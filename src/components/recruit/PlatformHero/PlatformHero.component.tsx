import * as Styled from './PlatformHero.styled';

interface PlatformHeroProps {
  color: string;
  emojis: any[];
}

const PlatformHero = ({ color, emojis }: PlatformHeroProps) => {
  const [LeftEmoji, RightEmoji] = emojis;

  return (
    <Styled.Container color={color}>
      <Styled.EmojisContainer>
        <Styled.EmojiContainer>
          <LeftEmoji />
        </Styled.EmojiContainer>
        <Styled.EmojiContainer>
          <RightEmoji />
        </Styled.EmojiContainer>
      </Styled.EmojisContainer>
    </Styled.Container>
  );
};
export default PlatformHero;
