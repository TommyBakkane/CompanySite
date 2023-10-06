import * as BiIcons from 'react-icons/bi'
import {FiArrowRight} from 'react-icons/fi'

export const Products = () => {
    return(
        <div id='product'>
             <div className="px-4 lg:px-14 w-full max-auto my-8">
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>What we in WebWorks can offer you</h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque assumenda quasi ratione ex? Eveniet facere tenetur amet nemo repellendus optio?</p>
                        <button className='btn-primary'>Learn More</button>
                    </div>
                    <div className="w-1/3">
                        <img src={require("../assets/images/digital-presentation.png")} alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-14 w-full max-auto  bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-1/4 mx-20">
                        <img src={require("../assets/images/telenor-logo.png")} alt='company logo'/>
                    </div>

                    <div className='mx:w-2/3 mx-auto'>
                        <p className='md:w-4/5 text-sm text-neutralGrey mb-8 leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi ab veniam tenetur voluptatum molestias earum porro ratione rem perferendis dicta quas aliquam, totam qui hic, et autem consequatur, dolore amet? Suscipit accusamus explicabo voluptatum officiis quo blanditiis est consectetur.</p>
                        <h5 className='text-brandSecondary text-xl font-semibold mb-2'>Customer Name</h5>
                        <p className='text-base text-neutralDGrey mb-8'>Customer title</p>
                        <div className='flex items-center gap-8 flex-wrap'>
                            <img src={require('../assets/icons/company1.png')} alt='company logo' className='cursor-pointer' />
                            <img src={require('../assets/icons/company2.png')} alt='company logo' className='cursor-pointer' />
                            <img src={require('../assets/icons/company3.png')} alt='company logo' className='cursor-pointer' />
                            <img src={require('../assets/icons/company4.png')} alt='company logo' className='cursor-pointer' />
                            <img src={require('../assets/icons/company5.png')} alt='company logo' className='cursor-pointer' />
                            <img src={require('../assets/icons/company6.png')} alt='company logo' className='cursor-pointer' />
                            <div className='flex items-center gap-8'>
                                <a href='/' className='text-brandPrimary hover:text-neutral-700'>Meet all the customers <FiArrowRight className='inline-block ml-2'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}