import { motion } from 'framer-motion'
import { styles } from '../styles'

const SectionWrapper = ({
  children,
  idName
}: {
  children: React.ReactNode
  idName: string
}) => {
  return (
    <motion.section
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <span className='hash-span' id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  )
}

export default SectionWrapper
