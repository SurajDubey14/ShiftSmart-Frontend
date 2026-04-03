import React from "react";
import { Tally1, MailPlus, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white p-4 flex flex-col lg:flex-row shadow-2xl rounded-xl w-full max-w-6xl">
        {/* 🔵 Left Side */}
        <div className="bg-[#161616] rounded-xl text-white py-10 px-5 flex flex-col gap-y-6 w-full lg:w-1/3">
          <h1 className="text-2xl font-semibold">Contact Information</h1>
          <p className="text-lg">Say something to start a live chat!</p>

          <a
            href="tel:+919310745399"
            className="flex items-center gap-2 text-sm"
          >
            <Phone size={16} /> +91-9310745399
          </a>

          <a
            href="mailto:dubeysuraj1472002@gmail.com"
            className="flex items-center gap-2 text-sm"
          >
            <MailPlus size={16} />
            dubeysuraj1472002@gmail.com
          </a>

          {/* Social */}
          <div className="flex gap-4 pt-10">
            <div className="bg-white p-2 rounded-full text-black">
              <FaFacebook />
            </div>
            <div className="bg-white p-2 rounded-full text-black">
              <FaInstagram />
            </div>
            <div className="bg-white p-2 rounded-full text-black">
              <FaTwitter />
            </div>
          </div>
        </div>

        {/* ⚪ Right Side */}
        <div className="bg-white p-4 w-full lg:w-2/3">
          <h1 className="text-2xl font-bold">Let's Get In Touch</h1>

          <p className="text-sm mt-2">
            Or just reach out manually to
            <a
              href="mailto:dubeysuraj1472002@gmail.com"
              className="px-1 text-[var(--color-primary)] hover:underline"
            >
              dubeysuraj1472002@gmail.com
            </a>
          </p>

          {/* Form */}
          <div className="py-6">
            <form className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="px-3 py-2 border rounded-md w-full"
                />
                <input
                  type="tel"
                  placeholder="Mobile No"
                  className="px-3 py-2 border rounded-md w-full"
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email ID"
                  className="px-3 py-2 border rounded-md w-full"
                />
                <select className="px-3 py-2 border rounded-md w-full">
                  <option>Select Service</option>
                  <option>Home Shifting</option>
                  <option>Office Shifting</option>
                </select>
              </div>

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows="4"
                className="px-3 py-2 border rounded-md w-full"
              ></textarea>

              {/* Button */}
              <div className="flex justify-end">
                <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg active:scale-95">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
