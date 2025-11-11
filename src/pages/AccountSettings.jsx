import React from 'react'
import Header2 from '../components/DashboardComponents/Dashboard/Header2'
import SettingsScreen from '../components/DashboardComponents/settings/SettingsScreen'

export default function AccountSettings() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header2 />
      <div className="flex-1 bg-[#f5f5f5] overflow-hidden">
        <SettingsScreen />
      </div>
    </div>
  )
}
