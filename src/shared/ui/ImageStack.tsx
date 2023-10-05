import clsx from 'clsx'

type ImageStackProps = {
  images: string[]
  isReverse?: boolean
  withCount?: boolean
}

export const ImageStack = ({
  images,
  isReverse,
  withCount,
}: ImageStackProps) => {
  if (!images.length) {
    return null
  }

  return (
    <div
      className={clsx('flex', {
        'flex-row-reverse': isReverse,
      })}
    >
      {images.map((imageUrl, index) => (
        <div
          key={`image-stack-${index}`}
          className={clsx(
            'relative w-8 h-8 rounded border-2 select-none overflow-hidden',
            {
              '-ml-4 first:ml-0': !isReverse,
              '-mr-4 first:mr-0': isReverse,
            },
          )}
        >
          <img
            className="h-full w-full object-cover blur-sm"
            src={imageUrl}
            draggable={false}
          />
          {withCount && index === images.length - 1 && (
            <div className="text-md absolute inset-0 flex items-center justify-center font-bold text-white">
              {images.length}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
