import { Container } from 'inversify'
import { ArticleRepository } from '../domain/articleRepository'
import { SampleApiClient } from '../infra/apiClient'
import { ArticleReopsitoryImpl } from '../infra/articleRepositoryImpl'
import {
  GetAllArticlesUseCase,
  GetAllArticlesUseCaseImpl,
} from '../useCase/getAllArticles'

const container = new Container()

export const TYPES = {
  // Infra
  SampleApiClient: Symbol.for('SampleApiClient'),
  // Domain
  ArticleRepository: Symbol.for('ArticleRepository'),
  // UseCase
  GetAllArticlesUseCase: Symbol.for('GetAllArticlesUseCase'),
}

container
  .bind<SampleApiClient>(TYPES.SampleApiClient)
  .to(SampleApiClient)
  .inSingletonScope()
container
  .bind<ArticleRepository>(TYPES.ArticleRepository)
  .to(ArticleReopsitoryImpl)
  .inSingletonScope()
container
  .bind<GetAllArticlesUseCase>(TYPES.GetAllArticlesUseCase)
  .to(GetAllArticlesUseCaseImpl)

export const getArticlesUseCase = (): GetAllArticlesUseCase =>
  container.get(TYPES.GetAllArticlesUseCase)
