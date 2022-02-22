import { useRef, useState } from 'react';
import Plus from '@/assets/svg/plus.svg';
import Minus from '@/assets/svg/minus.svg';
import { BulletedList } from '@/components';
import * as Styled from './Accordion.styled';
import { Item } from '../BulletedList/BulletedList.component';

interface AccordionProps {
  id: string;
  title: string;
  content: Item[];
  headingTagName?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Accordion = ({ id, title, content, headingTagName = 'h3' }: AccordionProps) => {
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
          id={`header-${id}`}
          aria-expanded={isExpanded}
          aria-controls={`panel-${id}`}
        >
          {title}
          <Icon aria-hidden />
        </button>
      </Styled.Header>
      <Styled.Panel
        id={`panel-${id}`}
        aria-hidden={!isExpanded}
        aria-labelledby={`header-${id}`}
        ref={panelRef}
      >
        <div ref={contentRef}>
          <BulletedList items={content} />
        </div>
      </Styled.Panel>
    </Styled.Accordion>
  );
};

export default Accordion;
