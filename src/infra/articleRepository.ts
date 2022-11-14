import { RecyclerViewBackedScrollView } from "react-native";
import Article, { ArticleId } from "../domain/article";
import { ArticleRepository } from "../domain/articleRepository";

export class SampleApiCLient { 
    // TODO: Impl
}

export class ArticleReopsitory implements ArticleReopsitory {
    private sampleApiClient: SampleApiCLient

    constructor(apiClient: SampleApiCLient) {
        this.sampleApiClient = apiClient;
    }

    async findAll(): Promise<Article[]> { 
        // TODO: ApiClientの結果を返す
        return new Promise(resolve => { 
            resolve([
                new Article(
                    new ArticleId(0),
                    "sample",
                    "sample description"
                ),
                new Article(
                    new ArticleId(1),
                    "sample",
                    "sample description"
                ),
            ])
        })
    }

    async findById(id: ArticleId): Promise<Article> { 
        // TODO: ApiClientの結果を返す
        return new Promise(resolve => { 
            resolve(
                new Article(
                    new ArticleId(0),
                    "sample",
                    "sample description"
                )
            )
        })
    }
}