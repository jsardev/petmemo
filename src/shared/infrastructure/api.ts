import ky from 'ky'

const baseCatsApiClient = ky.create({
  prefixUrl: 'https://api.thecatapi.com',
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
})

export type ImageAPIClient = {
  fetchImages: (
    params: ImageAPISearchParams,
  ) => Promise<ImageAPIFetchResponse[]>
}

type ImageAPISearchParams = {
  limit: number
}

type ImageAPIFetchResponse = {
  id: string
  url: string
  width: number
  height: number
}

export const catsApiClient: ImageAPIClient = {
  fetchImages: ({ limit }: ImageAPISearchParams) =>
    baseCatsApiClient
      .get('v1/images/search', {
        searchParams: {
          limit,
        },
      })
      .json(),
}
