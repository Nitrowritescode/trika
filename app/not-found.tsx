import { Shield, Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function notFound() {
  return (
    <div className=' flex justify-center items-center flex-col min-h-screen'>
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center">
          <Shield className="h-24 w-24 text-blue-600" />
        </div>

        <h1 className="text-6xl font-bold text-blue-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">
          This page is not under our coverage
        </h2>
        
        <p className="text-gray-600 text-lg">
          Just like how insurance protects you from unexpected events, 
          let us help you get back to safety. The page you are looking for 
          seems to have moved or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            Return Home
          </Link>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contact Support
          </Link>
        </div>

        <p className="text-sm text-gray-500 pt-8">
          Need immediate assistance? Call us at 
          <span className='text-blue-600 font-bold px-1'>

          18448287000
          </span>
       
        </p>
      </div>
    </div>
    </div>
  )
}

export default notFound
