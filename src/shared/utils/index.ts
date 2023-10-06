export const preloadImages = async (imageUrls: string[]) =>
  Promise.all(
    imageUrls.map(
      (imageUrl) =>
        new Promise((resolve) => {
          const image = new Image()
          image.onload = resolve
          image.src = imageUrl
        }),
    ),
  )
