import ky from 'ky'

import { PetType } from '@/modules/game-settings'
import {
  ImageApiClient,
  ImageApiSearchParams,
  ImageApiClientFactory,
} from '@/shared/infrastructure'

const PET_TYPE_TO_API_URL_MAP = {
  [PetType.CATS]: 'https://api.thecatapi.com',
  [PetType.DOGS]: 'https://api.thedogapi.com',
}

const PET_TYPE_TO_API_KEY_MAP = {
  [PetType.CATS]: import.meta.env.VITE_CAT_API_KEY,
  [PetType.DOGS]: import.meta.env.VITE_DOG_API_KEY,
}

export class PetImageApiClientFactory extends ImageApiClientFactory {
  constructor(private petType: PetType) {
    super()
  }

  public create(): ImageApiClient {
    const baseApiClient = ky.create({
      prefixUrl: PET_TYPE_TO_API_URL_MAP[this.petType],
      headers: {
        'x-api-key': PET_TYPE_TO_API_KEY_MAP[this.petType],
      },
    })

    return {
      fetchImages: ({ limit }: ImageApiSearchParams) =>
        baseApiClient
          .get('v1/images/search', {
            searchParams: {
              limit,
            },
          })
          .json(),
    }
  }
}
