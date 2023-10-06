import { Navbar } from "../components/Navbar"
import { ContactForm } from "../components/ContactForm"
import { GoogleMaps } from "../components/GoggleMaps"
import { MyFooter } from "../components/MyFooter"

export const ContactPage = () => {
    return (
        <>
        <Navbar/>
        <ContactForm />
        <GoogleMaps />
        <MyFooter />
        </>
    )
}