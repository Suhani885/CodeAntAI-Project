import React, { useState } from "react";

const Interface = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const repositories = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      visibility: "Private",
      language: "Python",
      size: "4521 KB",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      visibility: "Public",
      language: "Swift",
      size: "3096 KB",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      visibility: "Private",
      language: "Java",
      size: "6210 KB",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      visibility: "Public",
      language: "HTML/CSS",
      size: "1876 KB",
      updatedAt: "4 days ago",
    },
  ];

  const Sidebar = () => (
    <div className="hidden md:flex md:flex-col w-64 h-screen border-r">
      <div className="flex items-center gap-2 p-4">
        <svg
          className="w-8 h-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 6l4 6 4-6M12 12l-4-6-4 6" />
        </svg>
        <span className="text-lg">CodeAnt AI</span>
      </div>

      <div className="flex-1 py-4">
        <div className="px-4 mb-4">
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center justify-between">
            <span>UtkarshDhairyaPanwar</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        <nav className="space-y-1 px-4">
          <a className="flex items-center gap-3 px-4 py-2 text-white bg-blue-500 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            <span>Repositories</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>AI Code Review</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Cloud Security</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>How to Use</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="mt-auto">
        <nav className="p-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </div>
  );

  const MobileMenu = () => (
    <div
      className={`fixed inset-0 bg-white z-50 ${
        isMobileMenuOpen ? "block" : "hidden"
      } md:hidden`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="CodeAnt AI" className="w-8 h-8" />
          <span className="text-lg">CodeAnt AI</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex-1 py-4">
        <div className="px-4 mb-4">
          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md flex items-center justify-between">
            <span>UtkarshDhairyaPanwar</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>

        <nav className="space-y-1 px-4">
          <a className="flex items-center gap-3 px-4 py-2 text-blue-600 bg-blue-50 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
            <span>Repositories</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>AI Code Review</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Cloud Security</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>How to Use</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div className="mt-auto border-t">
        <nav className="p-4 space-y-1">
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <span>Support</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </a>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MobileMenu />

      <div className="flex-1">
        <div className="md:hidden p-4 flex items-center justify-between border-b bg-white">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="CodeAnt AI" className="w-8 h-8" />
            <span className="text-lg">CodeAnt AI</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="px-6 py-4">
          <div className="mb-4">
            <h1 className="text-2xl mb-1">Repositories</h1>
            <p className="text-gray-600">33 total repositories</p>
          </div>

          <div className="flex gap-2 mb-6">
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh All
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              + Add Repository
            </button>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search Repositories"
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="space-y-px">
            {repositories.map((repo) => (
              <div key={repo.name} className="p-4 hover:bg-gray-50">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{repo.name}</span>
                    <span className="px-2 py-0.5 text-xs text-blue-500 bg-blue-50 rounded-full">
                      {repo.visibility}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      {repo.language}
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span>{repo.size}</span>
                    <span>Updated {repo.updatedAt}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interface;
