"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/download.jpeg"
            alt="Bahir Dar University Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <span className="block font-bold text-blue-500 text-lg">
              Bahir Dar University
            </span>
            <span className="block text-sm text-gray-600 dark:text-gray-300">
              College of Science
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav
          ref={dropdownRef}
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          <div className="relative">
            <button
              onClick={() => handleDropdown("about")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              About
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen === "about" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen === "about" && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-lg py-2 w-48 border border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Overview
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  History
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleDropdown("administration")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              Administration
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen === "administration" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen === "administration" && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-lg py-2 w-48 border border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Leadership
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Departments
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-blue-600 transition-colors">
            Research
          </a>
          <div className="relative">
            <button
              onClick={() => handleDropdown("academics")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              Academics
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen === "academics" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen === "academics" && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-lg py-2 w-48 border border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Programs
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Admissions
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Calendar
                </a>
              </div>
            )}
          </div>
          <a href="#" className="hover:text-blue-600">
            Document
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Staffs
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            Library
          </a>
          <div className="relative">
            <button
              onClick={() => handleDropdown("services")}
              className="flex items-center gap-1 hover:text-blue-600 transition-colors"
            >
              Services
              <svg
                className={`w-4 h-4 transition-transform ${
                  dropdownOpen === "services" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen === "services" && (
              <div className="absolute top-full left-0 mt-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-xl rounded-lg py-2 w-48 border border-gray-200 dark:border-gray-700">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  IT Support
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Student Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  Facilities
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Theme toggle */}
        <div className="ml-4 flex items-center">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36 6.36-1.42-1.42M7.05 6.05 5.64 4.64m12.02 0L17.6 7.05M6.34 17.66 4.93 16.24"
                />
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700 dark:text-gray-200"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
