import clsx from 'clsx'

type ChooserProps<T> = {
  icon: string
  options: Array<T>
  value: T
  onChange: (value: T) => void
}

export const Chooser = <T extends number | string>({
  icon,
  options,
  value,
  onChange,
}: ChooserProps<T>) => {
  const selectedOption = options.find((option) => option === value)

  const handleClick = () => {
    const currentOptionIndex = options.indexOf(selectedOption || options[0])

    if (currentOptionIndex + 1 > options.length - 1) {
      onChange(options[0])
      return
    }

    onChange(options[currentOptionIndex + 1])
  }

  return (
    <button
      className="text-white font-bold text-2xl p-5 bg-primary-400 hover:bg-primary-500 select-none cursor-pointer rounded w-24 flex justify-center items-center flex-col gap-2 focus:ring-3 focus:ring-primary-500 focus:outline-none"
      onClick={handleClick}
    >
      <i className={clsx(icon, 'text-2xl')} />
      {selectedOption}
    </button>
  )
}
