import DashboardLayout from '../../components/Layout/DashboardLayout'
import { BarChart, TrendingUp, Users, Eye } from 'lucide-react'

export default function BrandAnalytics() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600 mt-2">Track your campaign performance and ROI</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Spend', value: '$125K', icon: BarChart, color: 'blue' },
          { label: 'Total Reach', value: '12.5M', icon: Eye, color: 'purple' },
          { label: 'Avg. ROI', value: '340%', icon: TrendingUp, color: 'green' },
          { label: 'Active Creators', value: '45', icon: Users, color: 'orange' },
        ].map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Performance</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Bar Chart Placeholder</p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">ROI Trend</h2>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Line Chart Placeholder</p>
          </div>
        </div>
      </div>

      {/* Campaign Breakdown */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Campaign Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Campaign</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Budget</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Reach</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Engagement</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">ROI</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Summer Launch', budget: '$25K', reach: '5.2M', engagement: '4.5%', roi: '320%' },
                { name: 'Q4 Awareness', budget: '$40K', reach: '8.5M', engagement: '3.8%', roi: '380%' },
                { name: 'Product Review', budget: '$12K', reach: '2.1M', engagement: '5.2%', roi: '290%' },
              ].map((campaign, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-4 font-medium text-gray-900">{campaign.name}</td>
                  <td className="py-4 px-4 text-gray-700">{campaign.budget}</td>
                  <td className="py-4 px-4 text-gray-700">{campaign.reach}</td>
                  <td className="py-4 px-4 text-gray-700">{campaign.engagement}</td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-semibold">{campaign.roi}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
