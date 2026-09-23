import Image from 'next/image';
import React from 'react';
import footerlogo from '@/assets/logo.png'
const Footer = () => {
    return (
        <div>
        <div className='w-7xl h-25.25 border container mx-auto'>
            <div>
                <div>
                   <Image src={footerlogo} alt=''>

                   </Image>
                   <h3>FITLOG</h3>
                </div>
                <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
        </div>
    );
};

export default Footer;