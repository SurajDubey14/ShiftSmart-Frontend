import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">
      
      {/* 🔵 Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 
                      grid-cols-1 sm:grid-cols-2 md:grid-cols-4">

        {/* ✅ Brand */}
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-primary-light)]">
            Shift<span className="text-white">Smart</span>
          </h1>
          <p className="text-sm mt-2 text-gray-300">
            One Stop Relocation Platform
          </p>

          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            ShiftSmart helps you move homes, offices, and more with ease.
            Safe, reliable, and hassle-free relocation services across India.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-2 bg-white/10 rounded-full hover:bg-[var(--color-primary)] transition cursor-pointer"
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>
        </div>

        {/* ✅ Company */}
        <div>
          <h2 className="font-semibold text-lg mb-4">ShiftSmart</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Partner</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* ✅ Resources */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Get Quote</li>
            <li className="hover:text-white cursor-pointer">Track Shipment</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* ✅ Contact */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Get in Touch</h2>

          <div className="space-y-3 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Delhi, India
            </p>

            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-white"
            >
              <FaPhoneAlt /> +91-9876543210
            </a>

            <a
              href="mailto:support@shiftsmart.com"
              className="flex items-center gap-2 hover:text-white"
            >
              <FaEnvelope /> support@shiftsmart.com
            </a>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-white/20 text-center text-sm text-gray-400 py-4 px-4">
        © 2026 ShiftSmart®. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;