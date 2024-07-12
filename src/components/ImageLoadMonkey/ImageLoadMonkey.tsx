import Image from 'next/image'

export const ImageLoadMonkey = () => {

  return (
    <Image
      src="./monkeyCalculate.gif"
      width={500}
      height={500}
      alt="ImageLoadMonkey"
      className='rounded-lg'
      unoptimized
    />
  )
}