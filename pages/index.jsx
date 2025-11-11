import React from 'react'
import TopHeader from '../components/TopHeader'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ScalableSection from '../components/ScalableSection'
import Solution from '../components/Solution'
import Support from '../components/Support'
import Plans from '../components/Plans'
import GlobalExp from '../components/GlobalExp'
import Devlopment from '../components/Devlopment'
import Footer from '../components/Footer'
import SkillsSolutions from '../components/SkillsSolutions'
import IntoSuccess from '@/components/IntoSuccess'
import SuccessTogather from '@/components/SuccessTogather'
import Faqs from '@/components/Faqs'
import Contact from '@/components/Contact'
import ProcessHire from '@/components/ProcessHire'
import WhyKretoss from '@/components/WhyKretoss'
import ClientReviews from '@/components/ClientReviews'
export default function index() {
  return (
    <>
      <TopHeader />
      <Header />
      {/* <Hero /> */}
      <ScalableSection />
      <Solution />
      <Support />
      <Plans />
      <GlobalExp />
      <Devlopment />
      {/* <SkillsSolutions /> */}
      <IntoSuccess />
      {/* <ClientReviews /> */}
      <SuccessTogather />
      <ProcessHire />
      <WhyKretoss />
      <Faqs />
      <Contact />
      <Footer />
    </>
  )
}
