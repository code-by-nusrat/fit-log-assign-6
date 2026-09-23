
import Image from "next/image";
import React from "react";
import footerlogo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="mt-10 bg-black mb-10">
            <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-5">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={footerlogo}
                            width={28}
                            height={28}
                            alt="FitLog logo"
                        />

                        <h3 className="text-white font-bold">
                            FITLOG
                        </h3>
                    </div>

                    {/* Copyright */}
                    <p className="text-white font-thin text-sm sm:text-base text-center md:text-right">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;