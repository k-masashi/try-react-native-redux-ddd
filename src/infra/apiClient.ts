import { injectable } from 'inversify'

@injectable()
export class SampleApiClient {
  readonly client: string

  constructor() {
    this.client = 'hoge'
  }
}
