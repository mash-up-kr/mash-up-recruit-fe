import editorjsHTML from 'editorjs-html';
import type { block } from 'editorjs-html/build/transforms';

const listParser = ({ data }: block) => {
  const listStyle = data.style === 'unordered' ? 'ul' : 'ol';

  const recursor = (items: any, style: 'ul' | 'ol') => {
    const list = items.map((item: any) => {
      if (!item.content && !item.items) return `<li>${item}</li>`;

      let value = '';
      if (item.items) value = recursor(item.items, style);
      if (item.content) {
        return `<li> ${item.content} ${value}</li>`;
      }
      return undefined;
    });
    if (!list.length) return '';
    return `<${listStyle}>${list.join('')}</${listStyle}>`;
  };
  return recursor(data.items, listStyle);
};

const parser = editorjsHTML({ list: listParser });

export default parser;
