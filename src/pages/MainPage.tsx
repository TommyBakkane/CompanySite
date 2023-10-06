import { Navbar } from "../components/Navbar"
import { Home } from "../components/Home"
import { Services } from "../components/Services"
import { About } from "../components/About"
import { Products } from "../components/Products"
import { Blog } from "../components/Blog"
import { MyFooter } from "../components/MyFooter"

export const MainPage = () => {
    return(
        <>
            <Navbar/>
            <Home />
            <Services/>
            <About />
            <Products />
            <Blog />
            <MyFooter />
        </>
    )
}