import { ArticleRepository } from "../domain/articleRepository";

export class GetAllArticles { 
    constructor(private articleRepository: ArticleRepository) { }

    async execute() {
        return await this.articleRepository.findAll();
    }
}