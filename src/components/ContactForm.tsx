import React, { useState, ChangeEvent, FormEvent } from 'react';
import {GrLinkedin, GrGithub} from 'react-icons/gr'

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
  };

  return (
    <div className='px-6 lg:px-14 w-screen h-screen flex flex-col justify-center items-center md:flex-row'>
        <div className='md:w-3/5 mx-auto mb-4'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>Feel free to keep in touch</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                We are here to help you with any inquiries you may have about our
                products and services. Please feel free to call or email us, or use our
                contact form to get in touch with us. We look forward to hearing from you!
            </p>
            <div className='flex gap-4 text-2xl'>            
                <GrLinkedin className='text-[#0077B5]' />
                <GrGithub />
            </div>
        </div>

        <form onSubmit={handleSubmit} className='w-full md:w-3/5 mx-auto p-4 flex flex-col items-center gap-4'>
            <input
                className='rounded-md w-full'
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder='Name:'
                onChange={handleChange}
                required
            />
            <input
                className='rounded-md w-full'
                type="email"
                id="email"
                name="email"
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input
                className='rounded-md w-full'
                type="text"
                id="subject"
                name="subject"
                placeholder='Subject'
                value={formData.subject}
                onChange={handleChange}
                required
            />
            <textarea
                className='rounded-md w-full'
                id="message"
                name="message"
                placeholder='Message'
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
            />
            <button type="submit" className='btn-primary'>Submit</button>
        </form>
    </div>
  );
};
