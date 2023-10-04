import { Carousel } from "flowbite-react"

export const Home = () => {
    return(
        <div className="bg-neutralSilver" id="home">
            <div className="px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen">

            
            <Carousel className="w-full mx-auto">
                {/* Slide 1 */}
                <div className="my-2 md:my-12  flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="flex items-center justify-center md:w-1/2">
                        <img src={require("../assets/images/business-plan.png")} alt="business plan image" className="w-3/4"/>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Lorem ipsum dolor sit. 
                        <span className="text-brandPrimary leading-snug">Lorem, ipsum dolor.</span></h1>
                        <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique!</p>
                        <button className="btn-primary">Register</button>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="my-2 md:my-12  flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="flex items-center justify-center md:w-1/2">
                    <img src={require("../assets/images/collab.png")} alt="collab image" className="w-3/4"/>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Lorem, ipsum dolor.
                        <span className="text-brandPrimary leading-snug"> Lorem ipsum dolor sit.</span></h1>
                        <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti molestias necessitatibus nisi, temporibus eius sed nostrum. Neque, rerum tempore.</p>
                        <button className="btn-primary">Register</button>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="my-2 md:my-12  flex flex-col md:flex-row-reverse items-center justify-between">
                    <div className="flex items-center justify-center md:w-1/2">
                        <img src={require("../assets/images/mobile-marketing.png")} alt="mobile marketing image" className="w-3/4"/>
                    </div>
                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">Lorem, ipsum. 
                        <span className="text-brandPrimary leading-snug"> Lorem, ipsum dolor.</span></h1>
                        <p className="text-neutralGrey text-base mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magni, repudiandae, tempora soluta officiis quam pariatur delectus ex repellendus perferendis quisquam odio quo itaque numquam!</p>
                        <button className="btn-primary">Register</button>
                    </div>
                </div>
                
            </Carousel>
            </div>
        </div>
    )
}