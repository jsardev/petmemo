import clsx from 'clsx'

type ChooserProps<T> = {
  icon: string
  options: Array<{ option: string; value: T }>
  value: T
  onChange: (value: T) => void
}

export const Chooser = <T extends number | string>({
  icon,
  options,
  value,
  onChange,
}: ChooserProps<T>) => {
  const selectedOption = options.find((option) => option.value === value)

  const handleClick = () => {
    const currentOptionIndex = options.indexOf(selectedOption || options[0])

    if (currentOptionIndex + 1 > options.length - 1) {
      onChange(options[0].value)
      return
    }

    onChange(options[currentOptionIndex + 1].value)
  }

  return (
    <button
      className="w-24 flex flex-col cursor-pointer select-none items-center justify-center gap-2 rounded from-primary-400 to-primary-500 bg-gradient-to-r p-5 text-2xl font-bold text-white hover:to-primary-600 focus:outline-none focus:ring-3 focus:ring-primary-500"
      onClick={handleClick}
    >
      <i className={clsx(icon, 'text-2xl')} />
      {selectedOption?.option}
    </button>
  )
}
