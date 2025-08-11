import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 md:py-20 px-4 md:px-20">
            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
                <a href="#"><FaFacebookF size={24} /></a>
                <a href="#"><FaInstagram size={24} /></a>
                <a href="#"><FaTwitter size={24} /></a>
                <a href="#"><FaYoutube size={24} /></a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
                <a href="#">Audio and Subtitles</a>
                <a href="#">Audio Description</a>
                <a href="#">Help Center</a>
                <a href="#">Gift Cards</a>

                <a href="#">Media Center</a>
                <a href="#">Investor Relations</a>
                <a href="#">Jobs</a>
                <a href="#">Terms of Use</a>

                <a href="#">Privacy</a>
                <a href="#">Legal Notices</a>
                <a href="#">Corporate Information</a>
                <a href="#">Contact Us</a>
            </div>

            {/* Copyright */}
            <p className="text-sm">&copy; 1997-2025 Netflix, Inc.</p>
        </footer>
    );
};

export default Footer;
