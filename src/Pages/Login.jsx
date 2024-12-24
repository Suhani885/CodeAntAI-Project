import React, { useState } from "react";

const Login = () => {
  const [activeTab, setActiveTab] = useState("saas");

  const TabButton = ({ value, label }) => (
    <button
      onClick={() => setActiveTab(value)}
      className={`flex-1 py-3 text-center transition-colors ${
        activeTab === value
          ? "border-b-2 bg-blue-500 text-white font-medium rounded-md"
          : "text-gray-500 hover:text-gray-700"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="flex w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="hidden md:block w-1/2 bg-slate-50 p-8 relative">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold">AI to Detect & Autofix Bad Code</h3>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-sm text-gray-600">Language support</div>
                <div className="font-bold text-xl">30+</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Developers</div>
                <div className="font-bold text-xl">10K+</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Hours Saved</div>
                <div className="font-bold text-xl">100K+</div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className=" text-black px-4 py-2 rounded-full">
                Issues Fixed <br />
                <span className="font-bold text-xl">500K+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-8">
            <div className="h-12 w-12 mx-auto mb-4">
              <img
                src="/codeant-logo.png"
                alt="CodeAnt AI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-2xl font-bold">Welcome to CodeAnt AI</h2>
          </div>

          <div className="mb-8">
            <div className="flex border-b">
              <TabButton value="saas" label="SAAS" />
              <TabButton value="self-hosted" label="Self Hosted" />
            </div>
          </div>

          {activeTab === "saas" ? (
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Sign in with Github</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#2684FF">
                  <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.644l3.262-20.03a.768.768 0 00-.768-.891H.778zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z" />
                </svg>
                <span>Sign in with Bitbucket</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0078D4">
                  <path d="M0 2.5L9.5 0L18.5 2L24 0V18L18.5 22L9.5 19.5L0 22V2.5ZM1 3.5V20.5L9 18.5V4.5L1 3.5ZM10 4.5V18.5L17.5 20.5V6L10 4.5ZM23 1.5L19 3V19.5L23 16.5V1.5Z" />
                </svg>
                <span>Sign in with Azure DevOps</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FC6D26">
                  <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.03L12 23.054l11.624-8.437a.92.92 0 00.331-1.03" />
                </svg>
                <span>Sign in with GitLab</span>
              </button>

              <div className="mt-4 text-sm text-center text-gray-500">
                By signing up you agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="text-black font-semibold hover:underline "
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FC6D26">
                  <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.03L12 23.054l11.624-8.437a.92.92 0 00.331-1.03" />
                </svg>
                <span>Self Hosted GitLab</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>Sign in with SSO</span>
              </button>

              <div className="mt-4 text-sm text-center text-gray-500">
                By signing up you agree to the{" "}
                <a
                  href="/privacy-policy"
                  className="text-black font-semibold hover:underline "
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
