import FeatureSection from '@/components/about/FeatureSection'
import Hero from '@/components/about/Hero'
import Mission from '@/components/about/Mission'
import StatsSection from '@/components/about/StatsSection'
import TeamSection from '@/components/about/TeamSection'
import React from 'react'
import { DiVim } from 'react-icons/di'

export default function page() {
  return (
    <div>
        <Hero/>
        <Mission/>
        <FeatureSection/>
        <StatsSection/>
        <TeamSection/>
    </div>
  )
}
