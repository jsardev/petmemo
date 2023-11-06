export type ImageApiClient = {
  fetchImages: (
    params: ImageApiSearchParams,
  ) => Promise<ImageApiFetchResponse[]>
}

export type ImageApiSearchParams = {
  limit: number
}

export type ImageApiFetchResponse = {
  id: string
  url: string
  width: number
  height: number
}
