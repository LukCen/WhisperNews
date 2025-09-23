type ContentBlock = {
  htmlTag: string,
  htmlClassList: string,
  children: {
    childHtmlTag: string,
    childHtmlClassList: string,
    childContent: {
      header: string,
      text: {
        paragraphs: string[]
      }
    }[]
  }[]
}

type Article = {
  title: string,
  subtitle: string,
  contents: {
    contentBlock: ContentBlock
  }
}

type ArticleData = Record<string, Article>
