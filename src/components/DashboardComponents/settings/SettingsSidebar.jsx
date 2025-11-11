import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SettingsSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeSection = location.pathname === '/dashboard/account-settings' ? 'account-settings' : 'data-privacy';

  return (
    <aside className="w-full lg:w-64 xl:w-72 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 flex-shrink-0">
      <nav className="p-4 lg:p-6 space-y-4 lg:space-y-6">
        {/* Personal Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Personal
          </h3>
          <button
            onClick={() => {
              navigate('/dashboard/account-settings');
            }}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              activeSection === 'account-settings'
                ? 'bg-gray-100 text-gray-900 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Account settings
          </button>
        </div>

        {/* Privacy Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">
            Privacy
          </h3>
          <button
            onClick={() => {
              // navigate('/dashboard/data-privacy');
            }}
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
              activeSection === 'data-privacy'
                ? 'bg-gray-100 text-gray-900 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Data privacy
          </button>
        </div>
      </nav>
    </aside>
  );
}

