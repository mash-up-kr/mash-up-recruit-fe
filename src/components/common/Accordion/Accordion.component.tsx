import { useRef, useState } from 'react';
import Plus from '@/assets/svg/plus.svg';
import Minus from '@/assets/svg/minus.svg';
import * as Styled from './Accordion.styled';

interface AccordionProps {
  id: string;
  title: string;
  content: string;
  headingTagName?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Accordion = ({ id, title, content, headingTagName }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  const handleClickButton = () => {
    if (!(panelRef.current && contentRef.current)) return;

    panelRef.current.style.height = `${isExpanded ? 0 : contentRef.current.offsetHeight}px`;

    setIsExpanded(!isExpanded);
  };

  const Icon = isExpanded ? Minus : Plus;

  return (
    <Styled.Accordion>
      <Styled.Header as={headingTagName}>
        <button
          type="button"
          onClick={handleClickButton}
          id={`${id}-header`}
          aria-expanded={isExpanded}
          aria-controls={`${id}-panel`}
        >
          {title}
          <Icon aria-hidden />
        </button>
      </Styled.Header>
      <Styled.Panel
        id={`${id}-panel`}
        aria-hidden={!isExpanded}
        aria-labelledby={`${id}-header`}
        ref={panelRef}
      >
        <p ref={contentRef}>{content}</p>
      </Styled.Panel>
    </Styled.Accordion>
  );
};

export default Accordion;

Accordion.defaultProps = {
  headingTagName: 'h3',
};