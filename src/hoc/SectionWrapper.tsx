import { motion } from "framer-motion"
import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = ({ children, idName }: { children: React.ReactNode, idName: string }) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      {children}
      <span className="hash-span" id={idName} />
    </motion.section>
  )
}

export default SectionWrapper
