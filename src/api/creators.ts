import api from './client'

export interface Creator {
  id: string
  user_id: string
  bio?: string
  phone?: string
  location?: string
  avatar_url?: string
  social_links?: {
    instagram?: string
    youtube?: string
    tiktok?: string
    twitter?: string
  }
  overall_rating: number
  total_campaigns: number
  total_earnings: number
  categories: string[]
  languages: string[]
  is_active: boolean
  is_verified: boolean
  created_at: string
  updated_at: string
  user?: {
    id: string
    email: string
    first_name: string
    last_name: string
    role: string
  }
}

export const creatorsApi = {
  create: async (data: Partial<Creator>) => {
    const response = await api.post<Creator>('/creators', data)
    return response.data
  },

  getAll: async () => {
    const { data } = await api.get<Creator[]>('/creators')
    return data
  },

  search: async (query: string) => {
    const { data } = await api.get<Creator[]>(`/creators/search?q=${query}`)
    return data
  },

  getMe: async () => {
    const { data } = await api.get<Creator>('/creators/me')
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get<Creator>(`/creators/${id}`)
    return data
  },

  update: async (id: string, data: Partial<Creator>) => {
    const response = await api.patch<Creator>(`/creators/${id}`, data)
    return response.data
  },

  delete: async (id: string) => {
    await api.delete(`/creators/${id}`)
  },

  getCreatorStats: async () => {
    const { data } = await api.get('/creators/me/stats')
    return data
  },

  getRecentCollaborations: async (limit: number = 5) => {
    const { data } = await api.get(`/creators/me/collaborations?limit=${limit}&recent=true`)
    return data
  },

  getRecommendedCampaigns: async () => {
    const { data } = await api.get('/creators/me/recommended-campaigns')
    return data
  },

  getCollaborationDetail: async (id: string) => {
    const { data } = await api.get(`/creators/collaborations/${id}`)
    return data
  },

  acceptCollaboration: async (id: string, counterOffer?: number) => {
    const { data } = await api.post(`/creators/collaborations/${id}/accept`, {
      counter_offer: counterOffer,
    })
    return data
  },

  rejectCollaboration: async (id: string, reason: string) => {
    const { data } = await api.post(`/creators/collaborations/${id}/reject`, {
      reason,
    })
    return data
  },

  generateAIReport: async (id: string) => {
    const { data } = await api.post(`/creators/collaborations/${id}/generate-ai-report`)
    return data
  },
}
