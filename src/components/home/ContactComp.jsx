const ContactComp = () =>{
    return(
        <>
        <section id="contact-section-wrapper">
            <div className="contact-box-wrapper">
                <div className="contact-info-wrap">
                    <h2 className="contact-info-title">Informasi Kontak</h2>
                    <h3 className="contact-info-sub-title">Jangan ragu untuk menghubungi kami. Kami di sini untuk membantu semua kebutuhan Anda.</h3>
                    <ul className="contact-info-details">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            <span></span><a href="https://goo.gl/maps/9x18coXGCmSscKec6" target="_blank">Jl. Kemang No. 63 RT 03 RW 06</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span></span><a href="mailto:iysa.olympiad@gmail.com" target="_blank">iysa.olympiad@gmail.com</a>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span></span><a href="https://wa.me/+6283870026877" target="_blank">+6283870026877</a>
                        </li>
                    </ul>
                    <ul class="contact-social-icons">
                        <li><a href="https://www.facebook.com/profile.php?id=100063979907207" target='_blank'><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/nypo.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.youtube.com/@IYSAOfficial" target='_blank'><i class="fab fa-youtube"></i></a></li>
                        <li><a href="https://www.tiktok.com/@iysa.official" target='_blank'><i class="fab fa-tiktok"></i></a></li>
                        <li><a href="https://www.linkedin.com/company/indonesian-young-scientist-association-iysa" target='_blank'><i class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="contact-form-wrap">
                    <form action="https://formspree.io/f/xzbnolwg" method="POST">
                        <h2 className="contact-form-title">Kirim Pesan</h2>
                        <div className="contact-form-fields">
                            <div className="contact-form-group">
                                <input type="text" name="name" className="fname" placeholder="Masukan nama anda"/>
                            </div>
                          
                            <div className="contact-form-group">
                                <input type="email" name="email" className="email" placeholder="Masukan email anda"/>
                            </div>

                            <div className="contact-form-group">
                                <textarea name="message" id="" placeholder="Masukan pesan"></textarea>
                            </div>
                            <input type="submit" value={"Kirim"} className="contact-submit-button"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactComp