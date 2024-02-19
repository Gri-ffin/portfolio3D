import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from '.'
import { SectionWrapper } from '../hoc'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    await emailjs.send(
      import.meta.env.VITE_SERVICEID,
      import.meta.env.VITE_TEMPLATEID,
      {
        from_name: form.name,
        to_name: import.meta.env.VITE_USERNAME,
        to_email: import.meta.env.VITE_EMAIL,
        message: form.message
      },
      import.meta.env.VITE_PUBLICKEY
    )
    setLoading(false)
    alert('Message sent successfully!, Thank you for reaching out.')
    setForm({
      name: '',
      email: '',
      message: ''
    })
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.currentTarget
    setForm({ ...form, [name]: value })
  }

  return (
    <SectionWrapper idName='contact'>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in touch!</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your name:</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your email:</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your message:</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='A message for me?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>

        <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
