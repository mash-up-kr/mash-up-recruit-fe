import editorjsHTML from 'editorjs-html';
import { unescape } from 'lodash-es';

type ListItem = {
  content: string;
  items: ListItem[];
};

export type Block = {
  type: 'header' | 'list' | 'delimiter';
  data: {
    text?: string;
    level?: number;
    items?: string[] | ListItem[];
  };
};

export type FaqQuestion = {
  title: string;
  content: string;
};

const parser = editorjsHTML();

const transformer = ({ blocks }: { blocks: Block[] }): FaqQuestion[] => {
  return blocks
    .reduce((acc, block) => {
      if (block.type === 'header') {
        return [...acc, [block]];
      }
      if (block.type === 'list') {
        return [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], block]];
      }
      return acc;
    }, [] as Block[][])
    .map(([headerBlock, listBlock]) => {
      return [
        ['title', headerBlock.data.text],
        ['content', unescape(parser.parseBlock(listBlock))],
      ];
    })
    .map(Object.fromEntries) as FaqQuestion[];
};

export default transformer;
