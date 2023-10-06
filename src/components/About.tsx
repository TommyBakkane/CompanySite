import * as BiIcons from 'react-icons/bi'
import { AboutPage } from '../pages/AboutPage'
import { Link } from 'react-router-dom'

export const About = () => {
    return(
        <div id='about' className='w-screen flex flex-col justify-center items-center'>
            {/* about text */}
            <div className="px-4 lg:px-14 max-auto my-8">
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div className="w-1/3">
                        <img src={require("../assets/images/website-creator.png")} alt="illustration of a website creation" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>About:</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit, amet lias. ium quam perferenitatibus unde reprehenderit quidem, distinctio, ad nam ea minus fuga laudantium mollitia placeat ut! Quam, aperiam et! Earum temporibus praesentium, ea dolore quibusdam obcaecati at odio unde veritatis commodi animi, nesciunt veniam vel necessitatibus id voluptas alias iusto dicta distinctio quas. Doloribus, saepe facere possimus sequi minus expedita.</p>
                    <button className='btn-primary' >
                        <Link to='/about'>Learn More</Link>
                    </button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className="px-4 lg:px-14 w-full max-auto  bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">Lorem, ipsum dolor. <br></br><span className="text-brandPrimary">Lorem, ipsum dolor.</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?</p> 
                    </div>

                    {/* stats */}
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                    <BiIcons.BiUser className='text-2xl text-brandSecondary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Lorem</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiIcons.BiChart className='text-2xl text-brandSecondary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Lorem</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <BiIcons.BiCreditCard className='text-2xl text-brandSecondary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Lorem</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiIcons.BiBriefcase className='text-2xl text-brandSecondary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Lorem</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}