import React from "react";
import FooterLogo from "../../assets/Footer.png";
import Scan from "../../assets/Scan.png";

const Footer = () => {
  return (
    <footer class="bg-white">
      <div class="pt-12 lg:pt-16 bg-black">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8 text-white">
          <div class="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 text-white">
            <div class="col-span-full lg:col-span-2 ">
              <div class="mb-4 lg:-mt-2">
                <a
                  href="/"
                  class="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <img src={FooterLogo} className="w-42 h-42" />
                </a>
              </div>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Support
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    111, Bijoy serani, Dhaka,Bangladeshi
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    exclusive@gmail.com
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    +88015-88888-9999
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Account
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    My Account
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Login/Register
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Cart
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Shop
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">
                Quick Link
              </div>

              <nav class="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Privacy Policy
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Term Of Use
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Blog
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    class="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <img src={Scan} className="h-full w-full" />
            </div>
          </div>

          <div class="border-t py-8 text-center text-sm text-gray-400">
            © Copyright FavorSelect 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
