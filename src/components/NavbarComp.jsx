import React, { useEffect } from 'react';
import $ from 'jquery';

import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    useEffect(() => {
        // jquery for toggle dropdown menus
        $(document).ready(function(){
            // toggle sub-menus
            $(".sub-btn").click(function(){
                $(this).next(".sub-menu").slideToggle();
            });
            // toggle more-menus
            $(".more-btn").click(function(){
                $(this).next(".more-menu").slideToggle();
            });
        });
        

        // javascript for the responsive navigation menu
        var menu = document.querySelector(".menu");
        var menuBtn = document.querySelector(".menu-btn");
        var closeBtn = document.querySelector(".close-btn");

        menuBtn.addEventListener("click", () =>{
            menu.classList.add("active");
        });

        closeBtn.addEventListener("click", () =>{
            menu.classList.remove("active");
        });
    }, []);
    
    return(
        <>
        <header>
            <a href="/"><img className='logo-nav' src="./assets/images/logo/NYPO.png" alt="" /></a>
            <div className='navigation'>
                <ul className='menu'>
                    <div className='close-btn'>

                    </div>
                    <li className='menu-item'><a href="/">Utama</a></li>
                    <li className='menu-item'><a href="#about-section">Tentang</a></li>
                    {/* <li className='menu-item'><a href="/#category-main-section">Category</a></li> */}
                    {/* <li className='menu-item'><a href="#">FAQ</a></li> */}
                    {/* <li className='menu-item'><a href="#main-category-section">Kategori</a></li> */}
                    <li className='menu-item'><a href="https://drive.google.com/file/d/1xjalmo873BJAOGBJrzJG_29ygd9BbQ5f/view?usp=sharing" target='_blank'>Buku Panduan</a></li>
                    {/* <li className='menu-item'><a href="#contact-section-wrapper">Kontak</a></li> */}
                    {/* <li className='menu-item'><a href="https://drive.google.com/drive/folders/1l_bCazIZmdtOSUjAuBAgXTg7YEBTixPY" target='_blank'>Certificate Supervisor</a></li> */}
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Liputan Media <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1xtNRUdpRV1YpfkqCYINwnbG83y-La-bU/view?usp=sharing" target='_blank'>Press Release 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1Kf-TDvAVoVyKQCjkXfioeJAMS4bZZYAA/view?usp=sharing" target='_blank'>Press Release 2024</a></li>
                        </ul>
                    </li> 
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Daftar Pemenang <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1kt2kog3aRUKw07KYcm90ukh1ANOuO2Zt/view?usp=sharing" target='_blank'>Daftar Pemenang 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/file/d/1AS-LH4HLaqT33iyC6c3ibZKd-lsP3U8x/view?usp=drive_link" target='_blank'>Daftar Pemenang 2024</a></li>
                        </ul>
                    </li> 
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Kurasi <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1zWjmXL40yto118u2ydFRTJPEMv4W3jRG?usp=sharing" target='_blank'>Kurasi 2024</a></li>
                        </ul>
                    </li> 
                    
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Sertifikat Supervisor <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1HYevQOGrxqVCRxbtw0Hp8r1WlFSJbq4E?usp=sharing" target='_blank'>Sertifikat Supervisor 2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1bYotKQV-jsxLIbsrlsFMpXsKh5EZc0y2?usp=drive_link" target='_blank'>Sertifikat Supervisor 2024</a></li>
                        </ul>
                    </li> 
                    <li className='menu-item'>
                        <a className='sub-btn' href="#">Galeri <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1UuGC30v3b9rhjYON-dP_1nz1NYdBrQhI?usp=sharing" target='_blank'>2025</a></li>
                            <li className='sub-item'><a href="https://drive.google.com/drive/folders/1iazwpyafH3P0Zx4j0CXwuQ2J6mfADvql?usp=sharing" target='_blank'>2024</a></li>
                        </ul>
                    </li> 
                    {/* <li className='menu-item'>
                        <a className='sub-btn' href="#">With Sub-dropdown <i className='fas fa-angle-down'></i></a>
                        <ul className='sub-menu'>
                            <li className='sub-item'><a href="#">Sub Item 01</a></li>
                            <li className='sub-item'><a href="#">Sub Item 02</a></li>
                            <li className='sub-item'><a href="#">Sub Item 03</a></li>
                            <li className='sub-item'><a href="#">Sub Item 04</a></li>
                            <li className='sub-item more'>
                                <a className='more-btn' href="#">More Items <i className='fas fa-angle-right'></i></a>
                                <ul className='more-menu'>
                                    <li className='more-item'><a href="#">More Item 01</a></li>
                                    <li className='more-item'><a href="#">More Item 02</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li> */}
                </ul>
            </div>
            <div className='menu-btn'>

            </div>
        </header>
        </>
    )
}

export default NavbarComp