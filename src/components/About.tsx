import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({
  title,
  icon
}: {
  index: number
  title: string
  icon: string
}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div className='w-full green-pink-gradient p-[1px] rounded-md shadow-card'>
        <div className='bg-tertiary rounded-md py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16  h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <SectionWrapper idName='about'>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        A passionate and fast learner Full Stack Software Developer having
        experience in building Web application with Typescript / ReactJs /
        NodeJs / AngularJs and some other cool libraries and frameworks.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default About
