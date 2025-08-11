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
