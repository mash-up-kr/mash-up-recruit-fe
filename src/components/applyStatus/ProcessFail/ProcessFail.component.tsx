import * as Styled from './ProcessFail.styled';

interface ProcessFailProps {
  heading: string;
  paragraph: string;
}

const ProcessFail = ({ heading, paragraph }: ProcessFailProps) => {
  return (
    <Styled.ProcessFail>
      <Styled.FailHeading>{heading}</Styled.FailHeading>
      <Styled.FailParagraph>{paragraph}</Styled.FailParagraph>
    </Styled.ProcessFail>
  );
};

export default ProcessFail;
