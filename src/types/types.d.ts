interface ArticleItem {
  id: string
  img: string
  imgLarge: string
  title: string
  subtitle: string
  content: string
}

interface ArticleBlock {
  blockTitle: string
  blockItems: ArticleItem[]
}

// used in the ArticleList component - it's the little 'photo + title + mini-description one
interface ArticleItemSimple {
  id: string | number;
  img: string;
  title: string;
}
