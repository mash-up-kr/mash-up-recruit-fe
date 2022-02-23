import { forwardRef, ReactNode } from 'react';
import * as Styled from './BulletedList.styled';

export interface Item {
  id: string;
  content: ReactNode;
  subItems?: Item[];
}

interface BulletedListItemProps {
  item: Item;
  subItems?: Item[];
}

const BulletedListItem = ({ item, subItems }: BulletedListItemProps) => {
  return (
    <Styled.ListItem>
      {item.content}
      {!subItems ? null : (
        <Styled.List>
          {subItems.map((subItem) => (
            <BulletedListItem key={subItem.id} item={subItem} subItems={subItem.subItems} />
          ))}
        </Styled.List>
      )}
    </Styled.ListItem>
  );
};

interface BulletedListProps {
  items: Item[];
}

const BulletedList = forwardRef<HTMLUListElement, BulletedListProps>(({ items }, ref) => {
  return (
    <Styled.List ref={ref}>
      {items.map((item) => (
        <BulletedListItem key={item.id} item={item} subItems={item.subItems} />
      ))}
    </Styled.List>
  );
});

BulletedList.displayName = 'BulletedList';

export default BulletedList;
