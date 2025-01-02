import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn, textVariant } from '../utils/motion'
import { testimonials } from '../constants'
import { style } from 'framer-motion/m'


const FeedbackCard = (index, testimonial, name, designation, company, image) => (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full '
    >
    </motion.div>
)

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px] '>
      <div className={`${style.padding} bg-tertiary rounded-2xl min-h-[300px] `}>
        <motion.div 
          variants={textVariant()}
        >
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <p className={`${styles.sectionHeadText}`}>Testominals.</p>
          </ motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20- pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index)=> (
            <FeedbackCard key={testimonial.name} index={index} {...testimonial}/>
          ))}
      </div>
    </div>
  )
}

export default Feedbacks