import HeroComp from "../../components/home/HeroComp"
import AboutComp from "../../components/home/AboutComp"
import CategoryComp from "../../components/home/CategoryComp"
import LogoComp from "../../components/home/LogoComp"
import NewsletterComp from "../../components/home/NewsletterComp"
import ContactComp from "../../components/home/ContactComp"
import '../../assets/css/home/Home.css'
import AfterEventComp from "../../components/home/AfterEventComp"
import NewsComp from '../../components/home/NewsComp'

const HomePage = () => {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp/>
        <AboutComp/>
        <CategoryComp></CategoryComp>   
        <AfterEventComp></AfterEventComp>
        <NewsletterComp></NewsletterComp>
        <ContactComp></ContactComp>
        {/* <NewsComp></NewsComp> */}
        <LogoComp></LogoComp>
        </>
    )
}

export default HomePage