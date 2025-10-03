import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import { FaInstagram, FaTiktok } from "react-icons/fa";
//import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-gray-200 dark:border-gray-800">
            <div className='container mx-auto py-8 px-5'>
                <div className='flex gap-2'>
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <span className="text-30-extrabold ml-2 text-foreground">Ace Educate</span>
                </div>
                <div className="flex justify-between gap-5 mt-5 card_grid">
                    <div className="flex flex-col gap-2">
                        <span className="text-18-semibold text-foreground">For Students & Parents</span>
                        <div className="flex flex-col gap-1">
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/#services" scroll={true}>Featured Services</Link>
                            </div>
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/#pricing" scroll={true}>Pricing</Link>
                            </div>
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/#enquiry-form" scroll={true}>Book a lesson</Link>
                            </div>
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/find-tutor" scroll={true}>Find a tutor</Link>
                            </div>

                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-2">
                        <span className="text-18-semibold text-foreground">For Tutors</span>
                        <div className="flex flex-col gap-1">
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/#enquiry-form" scroll={true}>Apply to be a tutor</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <span className="text-18-semibold text-foreground">About</span>
                        <div className="flex flex-col gap-1">
                            
                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/about" scroll={true}>Our Story</Link>
                            </div>

                            <div className="hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-sm px-2">
                                <Link href="/#contact" scroll={true}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="my-5 bg-gray-200 dark:bg-gray-800" />
                
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <p className="text-foreground">Ace Educate Ltd</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            United Kingdom
                        </p>
                        <div className="flex gap-10 mt-3">
                            <Link href="/privacy-policy" className="text-foreground hover:text-gray-600 dark:hover:text-gray-300">Privacy Policy</Link>
                            <Link href="/safeguarding-policy" className="text-foreground hover:text-gray-600 dark:hover:text-gray-300">Safeguarding Policy</Link>
                            {/* <Link href="/terms-and-conditions" className="text-foreground hover:text-gray-600 dark:hover:text-gray-300">Terms of Use</Link> */}
                            <Link href="/marketing-policy" className="text-foreground hover:text-gray-600 dark:hover:text-gray-300">Marketing Policy</Link>
                        </div>
                    </div>
                    <div id="socials" className="flex gap-4">
                        <Link href="https://www.tiktok.com/@ace_educate" target="_blank" rel="noopener noreferrer">
                            <FaTiktok className="text-3xl text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 rounded-sm hover:scale-125 transition duration-200 ease-in-out" />
                        </Link>
                        <Link href="https://www.instagram.com/aceeducate/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-3xl text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 rounded-sm hover:scale-125 transition duration-200 ease-in-out" />
                        </Link>
                        {/* <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="text-3xl text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-600 dark:hover:text-gray-300 rounded-sm hover:scale-125 transition duration-200 ease-in-out" />
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;