// components/Footer.tsx

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {currentYear} Your Company Name. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            {/* Placeholder for Social Media Links */}
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition duration-300" aria-label="Link to Facebook">
              {/* Replace with your actual Facebook icon (e.g., from lucide-react) */}
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 9.107 4.159 9.107 7.535V9.5H7v4h2.107V22h4V13.5z"/>
                </svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition duration-300" aria-label="Link to Twitter">
               {/* Replace with your actual Twitter icon */}
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.783-1.386 2.315-2.424-.9.534-1.897.922-2.958 1.195-.88-.904-2.066-1.57-3.412-1.676-1.168-.09-2.359.366-3.184 1.178-1.058 1.038-1.375 2.616-.912 4.057-3.976-.2-7.656-2.184-10.148-5.906-.4.689-.63 1.49-.63 2.342 0 1.51.755 2.967 1.993 3.912-.701-.022-1.402-.235-2.05-.64v.065c0 2.182 1.497 4.227 3.737 4.768-.409.104-.814.142-1.248.142-.302 0-.607-.03-1.065-.124.545 1.873 2.254 3.37 4.354 3.54-1.567 1.195-3.464 1.946-5.614 1.855-.391-.017-.768-.023-1.173-.067 2.189 1.347 4.768 2.105 7.548 2.105 9.054 0 14.671-7.723 14.671-14.42 0-.22-.011-.438-.017-.657.962-.695 1.853-1.532 2.675-2.424"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition duration-300" aria-label="Link to Instagram">
                {/* Replace with your actual Instagram icon */}
                <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                   <path d="M16.823 5.204c.92-.034 1.883-.04 2.848-.04s1.932.006 2.852.04c2.034.018 3.044.895 3.458 2.834.18.85.287 1.74.323 2.635.036.913.042 1.882.04 2.847s-.006 1.933-.04 2.852c-.018 2.027-.897 3.046-2.832 3.457-.845.186-1.743.298-2.633.334-.919.037-1.885.042-2.852.04s-1.933-.006-2.848-.04c-2.035-.018-3.054-.899-3.465-2.835-.184-.848-.295-1.74-.331-2.635-.036-.913-.042-1.882-.04-2.847s.006-1.933.04-2.852c.018-2.035.897-3.053 2.834-3.466.85-.175 1.745-.282 2.634-.318Zm-4.827 11.304c-2.288 0-4.143-1.987-4.143-4.242 0-2.255 1.855-4.243 4.143-4.243s4.143 1.988 4.143 4.243c0 2.255-1.855 4.242-4.143 4.242Zm5.644-8.408c-.554 0-1.005-.451-1.005-1.005s.451-1.005 1.005-1.005 1.004.451 1.004 1.005-.45 1.005-1.004 1.005Zm-5.644 1.329c-1.673 0-3.033-1.36-3.033-3.033s1.36-3.033 3.033-3.033 3.033 1.36 3.033 3.033-1.36 3.033-3.033 3.033Z"/>
                </svg>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition duration-300"  aria-label="Link to Linkedin">
                {/* Replace with your actual LinkedIn icon*/}
                 <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                      <path d="M20.47 2H3.56C2.7 2 2 2.7 2 3.56v16.88C2 21.3 2.7 22 3.56 22h16.91c.82 0 1.5-.7 1.5-1.56V3.56C22 2.7 21.3 2 20.47 2zM8.09 19.09H5V9.52h3.09V19.1zM6.54 8.017c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764.966 0 1.75.79 1.75 1.764 0 .974-.783 1.764-1.75 1.764zM20 19.09h-3.08v-4.8c0-1.204-.44-2.023-1.516-2.023-.83 0-1.317.557-1.532 1.097-.08.195-.1.465-.1.738v5h-3.08c0-8.748 0-9.57 0-9.57h3.08v1.363s.043.065.064.097h.097c.427-.636 1.182-1.55 2.873-1.55 3.036 0 3.666 2.137 3.666 4.914V19.1z"/>
                </svg>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>

        <div className="mt-4 text-center">
          {/* Placeholder for Footer Links */}
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mx-2 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mx-2 text-sm">
            Terms of Service
          </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mx-2 text-sm">
            Cookie Policy
          </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 mx-2 text-sm">
            Contact
          </a>
          {/* Add more links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;