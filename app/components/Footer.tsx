export default function Footer() {
  return (
    <footer className="w-full bg-[#161616] rounded-t-[10px] mt-auto">
      <div className="w-full max-w-[1440px] mx-auto px-2 md:px-8 lg:px-16 py-4 md:py-16 lg:py-20">
        <div className="flex flex-col items-start gap-4 md:gap-16 lg:gap-20">
        <div className="flex flex-col gap-4 md:gap-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-4 w-full">
          <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[60%]">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block w-20 h-8 md:w-40 md:h-16" viewBox="0 0 162 65" fill="none">
                <path d="M100.804 45.0559C96.3966 34.8238 95.7893 26.4647 100.752 16.4754C109.236 -0.537631 130.89 -4.28362 148.102 4.82121C164.359 13.4231 166.528 32.708 151.19 37.3558C140.433 40.6162 123.811 37.2171 122.752 28.4764C122.249 24.2795 124.418 19.9439 129.484 18.886C133.544 18.0536 138.489 19.3369 139.791 22.2158C142.879 29.0834 129.294 29.569 129.294 29.569C129.294 29.569 140.294 34.0434 146.367 28.1989C150.479 24.2275 147.2 19.0421 142.064 15.7817C130.82 8.67125 113.314 16.6315 109.167 29.7945C104.222 45.4894 119.525 63.8725 119.525 63.8725C119.525 63.8725 104.916 54.5249 100.821 45.0212" fill="#EA0029"/>
                <path d="M118.831 25.9099C119.403 24.5398 120.063 23.2565 120.826 22.0251C117.373 34.4077 124.938 48.091 138.09 52.8948C140.172 53.6579 142.289 54.1609 144.371 54.4037C144.944 51.5595 147.598 49.4784 150.982 49.4784C155.007 49.4784 158.547 52.4439 158.894 56.1032C159.137 58.7393 157.644 61.0112 155.285 62.069C154.782 62.4853 154.053 62.8148 153.029 63.0055C147.477 64.1328 141.474 63.7513 135.731 61.5835C120.618 55.8604 113.036 39.888 118.814 25.8925" fill="#EA0029"/>
                <path d="M16.0953 7.28968L16.0207 0.895752L6.50917 1.00759C3.20812 1.04488 -0.0369815 2.98356 0.000318492 6.59996L0.224119 26.0241L8.00118 25.9309L7.81468 9.95537C7.79603 8.27766 8.76583 7.38289 10.5189 7.36424L16.0953 7.28968Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.2709 6.09648C46.2336 2.42416 44.1821 0.560044 39.7434 0.615968L26.1849 0.765101C21.6716 0.821025 19.6947 2.70379 19.732 6.35746L19.8998 20.4875C19.9371 23.9734 21.9886 25.763 26.6325 25.707L40.1351 25.5579C44.5365 25.502 46.4761 23.7124 46.4388 20.0215L46.2709 6.11512M30.3438 19.2572C28.5721 19.2758 27.6023 18.2319 27.5836 16.4237L27.509 9.89929C27.4904 8.16566 28.4975 7.19631 30.2506 7.17767L35.398 7.12175C37.263 7.10311 38.6058 7.84875 38.6244 9.69423L38.699 16.3864C38.7177 18.2319 37.5427 19.1826 35.6218 19.2013L30.3065 19.2572H30.3438Z" fill="white"/>
                <path d="M90.1395 -2.95639e-05L82.4189 0.0888672L82.7068 25.0664L90.4274 24.9775L90.1395 -2.95639e-05Z" fill="white"/>
                <path d="M46.6443 43.8077C46.607 40.0422 44.8166 38.3085 40.7509 38.3645L27.7705 38.5136L27.7332 35.6801L46.5883 35.4564L46.5137 29.0625L26.4463 29.2862C21.9517 29.3421 20.0121 31.2062 20.0494 34.8226L20.1053 39.4829C20.1426 43.1366 22.1755 44.9635 26.6888 44.9262L39.0351 44.777L39.0724 47.6664L20.6835 47.8901L20.7581 54.284L40.9374 54.0417C44.9471 54.0044 46.7562 52.1776 46.7002 48.468L46.6443 43.8077Z" fill="white"/>
                <path d="M50.9895 58.6648C51.0268 62.3371 53.0224 64.1453 57.4238 64.108L70.9264 63.9588C75.5516 63.9029 77.5844 62.0202 77.5285 58.3665L77.3606 44.4602C77.3233 40.8065 75.2532 38.9796 70.628 39.0169L51.978 39.2406L52.0526 45.6532L67.2896 45.4854C68.6511 45.4854 69.6582 46.1379 69.6768 47.536V48.8781L57.0881 49.0272C52.9105 49.0832 50.9149 51.1523 50.9709 55.5144L51.0082 58.702M69.7701 55.8313C69.7701 57.043 68.8749 57.509 67.7932 57.5276L60.7621 57.6022C59.6991 57.6022 58.6547 57.2294 58.636 55.9618C58.636 54.5264 59.6431 54.0976 60.7248 54.0976L67.7745 54.0045C68.8935 54.0045 69.7701 54.5078 69.7887 55.7008V55.8313H69.7701Z" fill="white"/>
                <path d="M90.4853 28.4451L82.7461 28.5369L83.1649 63.8035L90.9041 63.7117L90.4853 28.4451Z" fill="white"/>
                <path d="M58.9713 16.2746L58.8967 12.8446L58.7475 0.373678H57.6285C53.0966 0.448243 51.0823 2.29373 51.1196 5.89148L51.2875 19.7978C51.3248 23.5074 53.4136 25.3902 57.9269 25.3342L70.2173 25.1851V26.5273C70.2546 27.9627 69.1915 28.5592 67.7928 28.5778L51.3994 28.7642L51.474 35.2141L70.4411 34.9904C75.6631 34.9345 78.0316 32.7907 77.9943 28.7642L77.6586 0.131348L70.0308 0.224552L70.0867 12.6955L70.1613 18.7725L62.0672 18.8658C60.2395 18.8844 59.0086 18.0455 58.99 16.256" fill="white"/>
                </svg>
            </div>
            <div className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 42 42" fill="none">
                <path d="M4.98146 28.3782C2.51494 22.6147 2.17507 17.9062 4.95233 12.2794C9.70087 2.69634 21.8198 0.586302 31.4529 5.71486C40.5518 10.5601 41.7656 21.4229 33.1814 24.0409C27.1607 25.8774 17.8579 23.9628 17.2655 19.0394C16.9839 16.6753 18.1977 14.2332 21.0333 13.6373C23.3056 13.1684 26.0731 13.8913 26.8014 15.5129C28.5299 19.3813 20.9265 19.6548 20.9265 19.6548C20.9265 19.6548 27.083 22.1751 30.4818 18.8831C32.7832 16.646 30.9479 13.7252 28.0735 11.8887C21.781 7.88351 11.9829 12.3673 9.66203 19.7818C6.89447 28.6224 15.4593 38.9773 15.4593 38.9773C15.4593 38.9773 7.2829 33.7119 4.99117 28.3587" fill="#EA0029"/>
                <path d="M15.0707 17.5936C15.3911 16.8219 15.7601 16.099 16.1874 15.4054C14.255 22.3802 18.4889 30.0877 25.8496 32.7937C27.0149 33.2235 28.1996 33.5068 29.3649 33.6435C29.6853 32.0415 31.171 30.8692 33.0646 30.8692C35.3175 30.8692 37.2985 32.5397 37.4927 34.6009C37.6287 36.0857 36.7936 37.3654 35.4729 37.9613C35.1913 38.1957 34.7834 38.3814 34.2105 38.4888C31.1031 39.1238 27.7432 38.9089 24.5289 37.6878C16.0709 34.4641 11.8273 25.4671 15.061 17.5838" fill="#EA0029"/>
                </svg>
            </div>
            <p className="font-['Kanit'] font-normal text-xs md:text-base leading-[150%] text-white max-w-[500px]">
                Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col sm:flex-row gap-1.5 md:gap-2 w-full max-w-[500px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-2 md:px-4 py-2 md:py-3 rounded-[10px] bg-white/10 border border-white/20 font-['Kanit'] font-normal text-xs md:text-base text-white placeholder:text-white/50 focus:outline-none focus:border-[#A50019] focus:bg-white/15 transition-colors"
              />
              <button className="px-3 md:px-6 py-2 md:py-3 rounded-[10px] bg-[#A50019] font-['Kanit'] font-normal text-xs md:text-base text-white hover:bg-[#8a0015] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="font-['Kanit'] font-normal text-xs md:text-xs leading-[150%] text-[#AAAAAA] max-w-[500px]">
              By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
            </p>
          
           
          </div>

          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-auto">
            <h3 className="font-['Kanit'] font-semibold text-xs md:text-base text-white">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-1 md:gap-2">
              <a href="https://royisal.com/about-us" className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                About Us
              </a>
              <a href="https://royisal.com/articles" className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                Articles
              </a>
              <a href="https://royisal.com/sustainability" className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                Sustainability
              </a>
              <a href="https://royisal.com/contact-us" className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                Contact Us
              </a>
              <a href="https://royisal.com/faqs" className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                FAQs
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-2 md:gap-4 w-full md:w-[196px]">
            <h3 className="font-['Kanit'] font-semibold text-xs md:text-base text-white">
              Follow Us
            </h3>
            <nav className="flex flex-col items-start gap-1 md:gap-0">
              <a href="#" className="flex flex-row items-center py-1 md:py-2 gap-2 md:gap-3 w-full group transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#CCCCCC" className="group-hover:fill-[#A50019] transition-colors"/>
                </svg>
                <span className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] text-[#CCCCCC] group-hover:text-[#A50019] transition-colors">Facebook</span>
              </a>
              <a href="#" className="flex flex-row items-center py-1 md:py-2 gap-2 md:gap-3 w-full group transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#CCCCCC" className="group-hover:fill-[#A50019] transition-colors"/>
                </svg>
                <span className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] text-[#CCCCCC] group-hover:text-[#A50019] transition-colors">Instagram</span>
              </a>
              <a href="#" className="flex flex-row items-center py-1 md:py-2 gap-2 md:gap-3 w-full group transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#CCCCCC" className="group-hover:fill-[#A50019] transition-colors"/>
                </svg>
                <span className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] text-[#CCCCCC] group-hover:text-[#A50019] transition-colors">X</span>
              </a>
              <a href="#" className="flex flex-row items-center py-1 md:py-2 gap-2 md:gap-3 w-full group transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#CCCCCC" className="group-hover:fill-[#A50019] transition-colors"/>
                </svg>
                <span className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] text-[#CCCCCC] group-hover:text-[#A50019] transition-colors">LinkedIn</span>
              </a>
              <a href="#" className="flex flex-row items-center py-1 md:py-2 gap-2 md:gap-3 w-full group transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" className="md:w-6 md:h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#CCCCCC" className="group-hover:fill-[#A50019] transition-colors"/>
                </svg>
                <span className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] text-[#CCCCCC] group-hover:text-[#A50019] transition-colors">Youtube</span>
              </a>
            </nav>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-700"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0 w-full">
          <p className="font-['Kanit'] font-normal text-xs md:text-sm text-gray-400">
            © 2026 Royi Sal. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 sm:gap-6">
            <nav className="flex flex-col sm:flex-row items-start gap-2 md:gap-3 sm:gap-6">
              <a href="#" className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] underline text-[#666666] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] underline text-[#666666] hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-['Kanit'] font-normal text-xs md:text-sm leading-[150%] underline text-[#666666] hover:text-white transition-colors">
                Cookies Settings
              </a>
            </nav>
         
          </div>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
}
