import * as BiIcons from 'react-icons/bi'
import { Link } from 'react-router-dom'

export const AboutPage = () => {
    return (
        <div id='about' className='w-screen flex flex-col justify-center'>
            <Link to="/"><div className='flex items-center py-4 mx-4 '> <BiIcons.BiArrowBack/>Return </div></Link>

            <div className="px-4 lg:px-14 max-auto my-8">
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center'>
                    <div className='md:w-3/5 mx-auto'>
                    <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>About</h2>
                    <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit, amet lias. ium quam perferenitatibus unde reprehenderit quidem, distinctio, ad nam ea minus fuga laudantium mollitia placeat ut! Quam, aperiam et! Earum temporibus praesentium, ea dolore quibusdam obcaecati at odio unde veritatis commodi animi, nesciunt veniam vel necessitatibus id voluptas alias iusto dicta distinctio quas. Doloribus, saepe facere possimus sequi minus expedita.</p>
                    </div>
                    <div className='md:w-2/6 w-4/6'>
                        <img src={require("../assets/images/process.png")} alt="illustration of a process" />
                    </div>
                </div>
            </div>
                
            <div className="px-4 lg:px-14 w-full max-auto  bg-brandSecondary py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl text-neutralDGrey font-semibold mb-4 md:w-2/3">Three good reasons to use this service.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus?</p> 
                    </div>

                    {/* stats */}
                    <div className="w-screen mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
                        <div className="space-y-8 mx-4">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-xl text-neutralDGrey font-semibold">Reason 1</h4>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, provident. Vero sit adipisci architecto voluptas velit laboriosam quibusdam laudantium.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-xl text-neutralDGrey font-semibold">Reason 2</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet accusamus quod nam, porro asperiores suscipit? Cupiditate, veritatis magnam!</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 mx-4">
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-xl text-neutralDGrey font-semibold">Reason 3</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cumque reprehenderit ea sequi nisi alias.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="text-xl text-neutralDGrey font-semibold">Reason 4</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur odio ex ratione, eos laborum omnis distinctio incidunt nulla voluptas cumque!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}