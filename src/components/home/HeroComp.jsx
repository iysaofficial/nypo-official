const HeroComp = () => {
    return(
        <>
       
        <section className="hero-section">
            <div className="hero-container">
                <br />
                <img src="./assets/images/logo/NYPO.png" alt=""/>
                <h1>National Youth Physics Olympiad</h1>
                <p>Pendaftaran International Youth Physics Olympiad telah dibuka!<br /> dengan acara bergengsi ini dan dapatkan pengalaman yang tak terlupakan!
                </p>
                <br />
                <br />
                <a href="#" className="registration-button">Segera Hadir</a>
                
                <div className="hero-social-icon">
                    <br />
                    <br />
                    <span>Follow us</span>
                    <a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i className="fab fa-facebook-f facebook-bg"></i></a>
                    <a href="https://www.instagram.com/nypo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i className='fab fa-instagram instagram-bg'></i></a>
                    <a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i className='fab fa-youtube youtube-bg'></i></a>
                    <a href="https://www.tiktok.com/@iysa.official" target='_blank'><i className='fab fa-tiktok tiktok-bg'></i></a>
                    <a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i className='fab fa-linkedin linkedin-bg'></i></a>
                </div>
            </div>
        </section>
        </>
    )
}

export default HeroComp