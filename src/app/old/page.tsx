import { HeroSection } from '@/components/sections/HeroSection'
import { TargetAudienceSection } from '@/components/sections/TargetAudienceSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { CourseModulesSection } from '@/components/sections/CourseModulesSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { WhatYouGetSection } from '@/components/sections/WhatYouGetSection'
import { OfferSection } from '@/components/sections/OfferSection'
import { ExpertSection } from '@/components/sections/ExpertSection'
import { FAQSection } from '@/components/sections/FAQSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TargetAudienceSection />
      <ProblemSection />
      <CourseModulesSection />
      <HowItWorksSection />
      <WhatYouGetSection />
      <ExpertSection />
      <OfferSection />
      <FAQSection />
    </>
  )
}
