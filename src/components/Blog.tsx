import React from 'react'
import {FiArrowRight} from 'react-icons/fi'

export const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Creating Streamlined Safeguarding with OneRen",
            img: require("../assets/images/blog-1.png")
        },
        {
            id: 2,
            title: "What are your safeguarding responsibilities and how can you manage them?",
            img: require("../assets/images/blog-2.png")
        },
        {
            id: 3,
            title: "Revamping the Membership Model with Triathlon Australia",
            img: require("../assets/images/blog-3.png")
        },
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='faq'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4'>Caring is the new marketing</h2>
            <p className='md:w-3/4 text-sm text-neutralGrey mb-8 mx-auto'>The WebWorks blog is the best place to read about the latest membeship insight, trends and more. See who is joining the community, read about how our community are increasing their membershit income and lots more</p>
        </div>

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {
                blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer'>
                    <img src={blog.img} alt='' className='hover:scale-95 transition-all duration-300 rounded'/>
                    <div className='text-center py-4 mx-8 bg-white shadow-lg rounded-md md:w3/4  absolute left-0 right-0 -bottom-12'>
                        <h3 className='mb-3 text-neutralGrey font-semibold'>{blog.title}</h3>
                        <div className='flex items-center gap-8 justify-center'>
                            <a href='/' className='text-brandPrimary hover:text-neutral-700'>Read more <FiArrowRight className='inline-block ml-2'/></a>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}
