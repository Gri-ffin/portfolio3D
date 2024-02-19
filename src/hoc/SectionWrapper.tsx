import { styles } from '../styles'

const SectionWrapper = ({
  children,
  idName
}: {
  children: React.ReactNode
  idName: string
}) => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>
      {children}
    </section>
  )
}

export default SectionWrapper
