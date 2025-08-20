import React from 'react';

const NominationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-blue-800 mb-2">KEOnline</div>
          <h1 className="text-4xl font-bold text-gray-800 uppercase tracking-wide mb-2">
            DIGITALLY FIT AWARDS
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600">2024</h2>
        </div>

        {/* Nomination Text */}
        <div className="mb-10 text-center">
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            I/WE HAVE BEEN NOMINATED FOR THIS YEAR'S TOP DIGITALLY FIT AWARDS AS PART OF THE NOMINEES
          </p>
        </div>

        {/* Nominee Information */}
        <div className="space-y-6 mb-12">
          <div className="border-b border-gray-200 pb-4">
            <div className="text-sm uppercase font-semibold text-gray-500 mb-1">NAME</div>
            <div className="text-2xl font-bold text-blue-800">WANJIRU KANYI LAW ADVOCATES</div>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <div className="text-sm uppercase font-semibold text-gray-500 mb-1">CATEGORY</div>
            <div className="text-xl font-semibold text-gray-800">Advocating & Law</div>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <div className="text-sm uppercase font-semibold text-gray-500 mb-1">COUNTRY</div>
            <div className="text-xl font-semibold text-gray-800">Kenya</div>
          </div>
        </div>

        {/* Voting Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">TO VOTE</h3>
          <div className="space-y-3">
            <div>
              <a 
                href="https://www.keonline.biz/Top-Brands" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors block"
              >
                www.keonline.biz/Top-Brands
              </a>
            </div>
            <div>
              <a 
                href="https://www.digitallyfitawards.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium text-lg transition-colors block"
              >
                www.digitallyfitawards.com
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">© 2024 KEOnline Digitally Fit Awards</p>
        </div>
      </div>
    </div>
  );
};

export default NominationPage;