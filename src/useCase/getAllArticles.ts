import { ArticleRepository } from "../domain/articleRepository";
import { ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import { AppState } from '../redux/reducer'
import { setArticles } from '../redux/slice/articles'
import { inject, injectable } from 'inversify'
import { TYPES } from '../config/inversify.config'
import Article, { ArticleId } from '../domain/article'

export interface GetAllArticlesUseCase {
  execute: () => ThunkAction<Promise<void>, AppState, undefined, AnyAction>
}

@injectable()
export class GetAllArticlesUseCaseImpl {
  @inject(TYPES.ArticleRepository)
  private articleRepository?: ArticleRepository

  // TODO: constructorで動かない問題の調査
  //   constructor(
  //     @inject(TYPES.ArticleRepository)
  //     //private articleRepository: ArticleRepository,
  //   ) {}

  execute(): ThunkAction<Promise<void>, AppState, undefined, AnyAction> {
    return async dispatch => {
      const articles = (await this.articleRepository?.findAll()) ?? []
      dispatch(setArticles(articles))
    }
  }
}
