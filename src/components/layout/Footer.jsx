import { customerLinks, quickLinks, socialLinks } from '@/data/footerdata'
import Link from 'next/link'
import { FiMail } from 'react-icons/fi'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-[#111827] text-white">

            <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                <div>
                    <Link href="/" className="inline-flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                            E
                        </span>
                        <span className="text-2xl font-bold">ShopHub</span>
                    </Link>
                    <p className="mt-6 max-w-xs text-lg leading-7 text-white">
                        Your one-stop shop for quality products at great prices.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Quick Links</h2>
                    <nav className="mt-7 flex flex-col gap-4 text-lg text-white">
                        {
                            quickLinks.map((link, idx) => (
                                <Link href={link.href} key={idx} className="transition hover:text-blue-400">
                                    {link.name}
                                </Link>
                            ))
                        }
                    </nav>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Customer Service</h2>
                    <nav className="mt-7 flex flex-col gap-4 text-lg text-white">

                        {customerLinks.map((link, idx) => (
                            <Link href={link.href} key={idx} className="transition hover:text-blue-400">
                                {link.name}
                            </Link>
                        ))
                        }
                    </nav>
                </div>

                <div>
                    <h2 className="text-2xl font-bold">Newsletter</h2>
                    <p className="mt-7 text-lg leading-7 text-white">
                        Subscribe to get special offers and updates.
                    </p>
                    <form className="mt-5 flex max-w-sm overflow-hidden rounded-xl bg-[#1f2937]">
                        <label htmlFor="footer-email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="footer-email"
                            type="email"
                            placeholder="Your email"
                            className="min-w-0 flex-1 bg-transparent px-4 py-4 text-lg text-white outline-none placeholder:text-slate-400"
                        />
                        <button
                            type="submit"
                            aria-label="Subscribe to newsletter"
                            className="flex w-16 shrink-0 items-center justify-center bg-blue-600 text-2xl transition hover:bg-blue-500"
                        >
                            <FiMail />
                        </button>
                    </form>
                </div>
            </div>

            <div className="relative border-t border-slate-700" >
                <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-lg text-white sm:flex-row sm:items-center sm:justify-between lg:px-8">
                    <p className='text-center'>&copy; 2026 ShopHub. All rights reserved.</p>
                    <div className="flex items-center justify-center gap-7 text-2xl text-slate-300">

                        {socialLinks.map(({ icon: Icon, href }, idx) => (
                            <Link href={href} key={idx} aria-label="Facebook" className="transition hover:text-blue-400">
                                <Icon />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
