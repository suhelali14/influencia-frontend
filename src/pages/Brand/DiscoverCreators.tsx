import DashboardLayout from '../../components/Layout/DashboardLayout'
import { Search, Filter, Users, TrendingUp } from 'lucide-react'

export default function DiscoverCreators() {
  const creators = [
    {
      id: 1,
      name: 'Sarah Johnson',
      platform: 'Instagram',
      followers: '125K',
      engagement: '4.2%',
      category: 'Fashion & Lifestyle',
      matchScore: 95,
    },
    {
      id: 2,
      name: 'Mike Chen',
      platform: 'YouTube',
      followers: '85K',
      engagement: '5.8%',
      category: 'Tech Reviews',
      matchScore: 88,
    },
    {
      id: 3,
      name: 'Priya Sharma',
      platform: 'Instagram',
      followers: '210K',
      engagement: '3.9%',
      category: 'Beauty & Wellness',
      matchScore: 92,
    },
  ]

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Discover Creators</h1>
        <p className="text-gray-600 mt-2">Find perfect influencers for your campaigns</p>
      </div>

      {/* Filters */}
      <div className="card mb-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div className="relative md:col-span-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators..."
              className="input-field pl-10"
            />
          </div>
          <select className="input-field">
            <option>All Platforms</option>
            <option>Instagram</option>
            <option>YouTube</option>
            <option>TikTok</option>
          </select>
          <select className="input-field">
            <option>All Categories</option>
            <option>Fashion</option>
            <option>Tech</option>
            <option>Food</option>
            <option>Lifestyle</option>
          </select>
        </div>
        <div className="mt-4 flex gap-4">
          <button className="btn-outline flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </button>
          <div className="flex items-center gap-2 ml-auto">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="input-field py-2">
              <option>Match Score</option>
              <option>Followers</option>
              <option>Engagement Rate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Creators Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {creators.map((creator) => (
          <div key={creator.id} className="card hover:shadow-lg transition-shadow">
            {/* Match Score Badge */}
            <div className="flex justify-between items-start mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full"></div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-600">{creator.matchScore}%</div>
                <div className="text-xs text-gray-600">Match</div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-1">{creator.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{creator.category}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Followers
                </span>
                <span className="font-semibold text-gray-900">{creator.followers}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Engagement
                </span>
                <span className="font-semibold text-gray-900">{creator.engagement}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Platform</span>
                <span className="font-semibold text-gray-900">{creator.platform}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="btn-outline flex-1 text-sm">View Profile</button>
              <button className="btn-primary flex-1 text-sm">Invite</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
