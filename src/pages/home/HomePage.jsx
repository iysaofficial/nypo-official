import HeroComp from "../../components/home/HeroComp"
import AboutComp from "../../components/home/AboutComp"
import CategoryComp from "../../components/home/CategoryComp"
import LogoComp from "../../components/home/LogoComp"
import NewsletterComp from "../../components/home/NewsletterComp"
import ContactComp from "../../components/home/ContactComp"
import '../../assets/css/home/Home.css'

const HomePage = () => {
    return(
        <>
        <br />
        <br />
        <br />
        <HeroComp/>
        <AboutComp/>
        <CategoryComp></CategoryComp>
        <br />
        <br />
        <br />
        <ContactComp></ContactComp>
        <NewsletterComp></NewsletterComp>
        <LogoComp></LogoComp>
        </>
    )
}

export default HomePage