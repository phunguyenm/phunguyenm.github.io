export const metadata = {
  title: "Milky's Corner",
  description: 'Cute, cozy, pastel storefront demo',
}

import './globals.css'
import { poppins } from './fonts'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-pastelCream">
      <body className={`min-h-screen text-cocoa antialiased ${poppins.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}

