import { ImageApiClient as ImageApiClient } from './types'

export abstract class ImageApiClientFactory {
  public abstract create(): ImageApiClient
}
