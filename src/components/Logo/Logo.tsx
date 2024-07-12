import styles from './theme-image.module.css'
import Image, { ImageProps } from 'next/image'

type Props = Omit<ImageProps, 'src' | 'priority' | 'loading'> & {
  srcLight: ImageProps["src"]
  srcDark: ImageProps["src"]
}

export const Logo = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} src={srcLight} className={`dark:hidden ${styles.imgLight}`} alt='logo' />
      <Image {...rest} src={srcDark} className={`hidden dark:block ${styles.imgDark}`} alt='logo' />
    </>
  )
}