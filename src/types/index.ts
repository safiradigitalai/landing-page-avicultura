import React from 'react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface TestimonialData {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
  rating: number
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  currency: string
  interval: 'monthly' | 'yearly'
  features: string[]
  popular?: boolean
  ctaText: string
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}
