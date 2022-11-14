import { injectable } from 'inversify'
import Article, { ArticleId } from '../domain/article'
import { ArticleRepository } from '../domain/articleRepository'
import { SampleApiClient } from './apiClient'

@injectable()
export class ArticleReopsitoryImpl implements ArticleRepository {
  async findAll(): Promise<Article[]> {
    // TODO: ApiClientの結果を返す
    return new Promise(resolve => {
      resolve([
        new Article(new ArticleId(0), 'sample1', 'sample description'),
        new Article(new ArticleId(1), 'sample2', 'sample description'),
        new Article(new ArticleId(2), 'sample3', 'sample description'),
        new Article(new ArticleId(3), 'sample4', 'sample description'),
      ])
    })
  }

  async findById(id: ArticleId): Promise<Article> {
    // TODO: ApiClientの結果を返す
    return new Promise(resolve => {
      resolve(new Article(new ArticleId(0), 'sample', 'sample description'))
    })
  }
}
