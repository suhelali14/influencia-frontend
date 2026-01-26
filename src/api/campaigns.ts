import api from './client'

export interface Campaign {
  id: string
  brand_id: string
  title: string
  description: string
  platform: 'instagram' | 'youtube' | 'tiktok' | 'twitter'
  category: string
  budget: number
  start_date: string
  end_date: string
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
  requirements?: any
  target_audience?: any
  total_creators: number
  total_reach: number
  total_spent: number
  created_at: string
  updated_at: string
}

export const campaignsApi = {
  getAll: async () => {
    const { data } = await api.get<Campaign[]>('/campaigns')
    return data
  },

  getActive: async () => {
    const { data } = await api.get<Campaign[]>('/campaigns/active')
    return data
  },

  search: async (query: string) => {
    const { data } = await api.get<Campaign[]>(`/campaigns/search?q=${query}`)
    return data
  },

  getByBrand: async (brandId: string) => {
    const { data } = await api.get<Campaign[]>(`/campaigns/brand/${brandId}`)
    return data
  },

  getById: async (id: string) => {
    const { data } = await api.get<Campaign>(`/campaigns/${id}`)
    return data
  },

  create: async (campaign: Partial<Campaign>) => {
    const { data } = await api.post<Campaign>('/campaigns', campaign)
    return data
  },

  update: async (id: string, campaign: Partial<Campaign>) => {
    const { data } = await api.patch<Campaign>(`/campaigns/${id}`, campaign)
    return data
  },

  delete: async (id: string) => {
    await api.delete(`/campaigns/${id}`)
  },
}
