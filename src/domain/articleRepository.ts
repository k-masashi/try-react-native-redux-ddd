import Article, { ArticleId } from "./article";

export interface ArticleRepository  {
    findAll: () => Promise<Article[]>
    findById: (id: ArticleId) => Promise<Article>
};