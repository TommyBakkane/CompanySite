import * as BsIcons from "react-icons/bs"

export const Services = () => {
    const services = [
        {
        id: 1,
        title: "Membership Organisations",
        description: "Our Membership management software provides full automation of membershit renewals and payments",
        image: <BsIcons.BsBriefcase />
        },
        {
        id: 2,
        title: "National Associations",
        description: "Our Membership management software provides full automation of membershit renewals and payments",
        image: <BsIcons.BsBuildings/>
        },
        {
        id: 3,
        title: "Clubs and Groups",
        description: "Our Membership management software provides full automation of membershit renewals and payments",
        image: <BsIcons.BsPeople />
        },

    ]

    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2x1 mx-auto" id="service">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
                <p className="text-neutralGrey">We have been working with:</p>

                {/* Company Logos */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src={require("../assets/icons/company1.png")} alt="logo1" />
                    <img src={require("../assets/icons/company2.png")} alt="logo2" />
                    <img src={require("../assets/icons/company3.png")} alt="logo3" />
                    <img src={require("../assets/icons/company4.png")} alt="logo4" />
                    <img src={require("../assets/icons/company5.png")} alt="logo5" />
                    <img src={require("../assets/icons/company6.png")} alt="logo6" />
                    <img src={require("../assets/icons/company7.png")} alt="logo7" />
                </div>
            </div>
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Manage your enitre community in a single system</h2>
                <p className="text-neutralGrey">Who is Company suitable for?</p>
            </div>

            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
                {
                    services.map(services => <div key={services.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-brandPrimary transition-all duration-300 flex items-center justify-center h-full">
                        <div>
                            <div className="bg-[#E8F5E9] mb- h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xlml-5 text-3xl">
                                <div className="ml-5 text-3xl">
                                    {services.image}
                                </div>
                            </div>
                            <h4 className="text-2x1 font-bold text-neutralDGrey mb-2 px-2">{services.title}</h4>
                            <p className="text-sm text-neutralGrey">{services.description}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
