import * as BiIcons from 'react-icons/bi'

export const About = () => {
    return(
        <div id='about' className='w-screen flex flex-col justify-center items-center'>
            {/* about text */}
            <div className="px-4 lg:px-14 max-auto my-8">
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div className="w-1/3">
                        <img src={require("../assets/images/checklist.png")} alt="" />
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laudantium ea ut omnis non voluptatibus, blanditiis explicabo minus, quo voluptas ad corrupti rem incidunt magni enim! Eligendi similique dolor, veniam eum, sint dolore sapiente aspernatur delectus voluptatum itaque numquam iste!</p>
                    <button className='btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className="px-4 lg:px-14 w-full max-auto  bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">Helping a local <br></br><span className="text-brandPrimary">business reinvent itself</span></h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>

                    {/* stats */}
                    <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                    <BiIcons.BiUser className='text-2xl text-brandPrimary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiIcons.BiChart className='text-2xl text-brandPrimary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <BiIcons.BiCreditCard className='text-2xl text-brandPrimary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Subscribers</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <BiIcons.BiBriefcase className='text-2xl text-brandPrimary'/>
                                <div>
                                    <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                                    <p>Bookings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}