export class ArticleId { 
    readonly value: number;

    constructor(value: number) {
        this.value = value;
    }
}

export default class Article { 
    readonly id: ArticleId;
    readonly name: string;
    readonly description: string;

    constructor(
        id: ArticleId,
        name: string,
        description: string
    ) {
      this.id = id
      this.name = name
      this.description = description
    }
}