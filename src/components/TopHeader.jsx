import React from "react";
import { Tally1, MailPlus, Phone } from "lucide-react";
import {} from "lucide-react";
const TopHeader = () => {
  return (
    <div className="bg-[var(--color-primary)] hidden text-sm text-center text-white lg:flex items-center flex-col lg:flex-row lg:border-b-2 lg:border-white justify-between lg:px-56 py-2 shadow-2xl">
      <div className="border-b border-white lg:border-none py-2 lg:p-0">
        ShiftSmart – Move Smarter, Live Better.
      </div>
      <div className="flex items-center flex-col lg:flex-row text-center justify-center gap-y-2 lg:gap-x-4 py-4 lg:p-0">
        <div className="mob text-xs font-semibold leading-snug">
          <a
            href="tel:+91-9310745399"
            className="flex items-center justify-center gap-x-2"
          >
            {" "}
            <Phone size={16} strokeWidth={1.25} /> +91-931xxxxxxx
          </a>
        </div>
        <div className="lg:block hidden">
          <Tally1 size={16} strokeWidth={1.25} />
        </div>
        <div className="email text-xs font-semibold leading-snug">
          <a
            href="mailto:dubeysuraj1472002@gmail.com"
            className="flex items-center justify-center gap-x-2"
          >
            <MailPlus size={16} strokeWidth={1.25} />
            dubexxuxxxxx02@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
