import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
          <b>Next Door</b> is your go-to platform for finding and renting properties. From cozy cottages to luxurious villas, explore a wide range of listings and secure your next home with ease.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="reviews"
                className="hover:text-white transition-colors duration-300"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: rentyourhome@nextdoor.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© 2024 Next Door. All rights reserved.</p>
    </footer>
  )
}

export default Footer