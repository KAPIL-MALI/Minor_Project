import React from 'react';
import Navbar from './Navbar';
import ChatBot from '../chatbot/ChatBot';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  const isProblemDetail = location.pathname.startsWith('/problems/');

  return (
    <div className={`${isProblemDetail ? 'h-screen overflow-hidden' : 'min-h-screen'} flex flex-col bg-base-100 text-base-content transition-colors duration-300`}>
      <Navbar />
      
      <main className={`flex-1 flex flex-col ${isProblemDetail ? 'overflow-hidden min-h-0' : ''}`}>
        {children}
      </main>

      {!isProblemDetail && (
        <footer className="footer footer-center p-6 bg-base-200 text-base-content/80 mt-auto border-t border-base-content/5">
          <aside>
            <p className="font-semibold">
              Prime<span className="text-primary">Code</span> © {new Date().getFullYear()} - Master Data Structures & Algorithms
            </p>
          </aside>
        </footer>
      )}

      {/* Global AI Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Layout;
