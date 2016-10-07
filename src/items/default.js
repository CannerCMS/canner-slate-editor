export default {
  blocks: {
    'heading': {
      items: [
        {type: 'heading-one', element: 'h1', demo: '標題一'},
        {type: 'heading-two', element: 'h2', demo: '標題二'},
        {type: 'heading-three', element: 'h3', demo: '標題三'},
        {type: 'heading-four', element: 'h4', demo: '標題四'}
      ]
    },
    'block-quote': {icon: 'quote-left'},
    'list-ol': {icon: 'list-ol'},
    'list-ul': {icon: 'list-ul'}
  },
  inlines: {
    link: {icon: 'link'}
  },
  marks: {
    strikethrough: {icon: 'strikethrough'},
    bold: {icon: 'bold'},
    italic: {icon: 'italic'},
    underline: {icon: 'underline'},
    code: {icon: 'code'}
  }
};
