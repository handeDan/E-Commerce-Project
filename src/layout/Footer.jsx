import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <div>
      {/* Üst Kısım */}
      <div className="bg-secondary-gray">
        <div className="flex max-md:flex-col justify-between p-10 bg-secondary-gray md:mx-48 shadow-sm">
          <img src="images/Bandage.svg" width={"108px"} />
          <div className="flex justify-start mt-5 gap-5 text-secondary-blue">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
      </div>

      {/* Bilgi Bölümleri */}
      <div className="p-10 flex max-md:flex-col gap-5 justify-between mt-10 md:mx-48">
        {/* Company Info */}
        <div>
          <p className="font-bold text-primary-dark">Company Info</p>
          <div className="text-primary">
            <ul className="flex flex-col gap-2 mt-5 text-sm">
              <li className="font-bold">About us</li>
              <li className="font-bold">Carrier</li>
              <li className="font-bold">We are hiring</li>
              <li className="font-bold">Blog</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="font-bold text-primary-dark">Legal</p>
          <div className="text-primary">
            <ul className="flex flex-col gap-2 mt-5 text-sm">
              <li className="font-bold">Terms & Conditions</li>
              <li className="font-bold">Privacy Policy</li>
              <li className="font-bold">Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div>
          <p className="font-bold text-primary-dark">Features</p>
          <div className="text-primary">
            <ul className="flex flex-col gap-2 mt-5 text-sm">
              <li className="font-bold">Business Marketing</li>
              <li className="font-bold">User Analytic</li>
              <li className="font-bold">Live Chat</li>
              <li className="font-bold">Unlimited Support</li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div>
          <p className="font-bold text-primary-dark">Resources</p>
          <div className="text-primary">
            <ul className="flex flex-col gap-2 mt-5 text-sm">
              <li className="font-bold">iOS & Android</li>
              <li className="font-bold">Watch a Demo</li>
              <li className="font-bold">Customers</li>
              <li className="font-bold">API</li>
            </ul>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <p className="font-bold text-primary-dark my-5">Get In Touch</p>
          <div className="flex mb-2">
            <input
              type="text"
              placeholder="Your Email"
              className="bg-secondary-gray border px-5 py-2"
            />
            <button className="bg-secondary-blue rounded-r-md px-5 py-2 text-white">
              Subscribe
            </button>
          </div>
          <p className="text-primary pb-10 text-sm">Lore imp sum dolor Amit</p>
        </div>
      </div>

      {/* Alt Kısım */}
      <div className="flex max-md:justify-center  bg-secondary-gray p-5">
        <p className="w-3/5 text-left pl-5 max-md:text-center text-primary font-bold text-sm md:mx-48">
          Made With Love By Finland All Right Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
