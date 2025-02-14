import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background text-foreground py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-end">
          {/* Contact Information */}
          <div className='flex-col flex gap-1'>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition-colors">
                  your.email@example.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdPhone size={20} />
                <a href="tel:18448287000" className="hover:text-blue-400 transition-colors">
                18448287000
                </a>
              </div>
              <Link href='terms-privacy' className='text-sm font-semibold'>
              Terms and Conditions
              </Link>
            </div>
          </div>
          <div className='md:mx-auto flex flex-col'>
            <h3 className='text-xl font-semibold mb-4'>Explore More</h3>
            <Link href="/" className='text-sm font-semibold mb-2'>Home</Link>
            <Link href="/about" className='text-sm font-semibold mb-2'>About Us</Link>
            <Link href="/blog" className='text-sm font-semibold mb-2'>Blog</Link>
          </div>
          {/* Social Links */}
          <div className='md:mx-auto'>
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>© {new Date().getFullYear()} Trika Financials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


