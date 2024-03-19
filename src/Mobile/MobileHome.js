import React from 'react'
import MobileVisual from './Components/Home/MobileVisual'
import MobileCategory from './Components/Home/MobileCategory'
import MobileBanner from './Components/Home/MobileBanner'
import MobileRank from './Components/Home/MobileRank'
import MobileRecipe from './Components/Home/MobileRecipe'
import MobileTip from './Components/Home/MobileTip'

export default function MobileHome() {
  return (
    <>
    <MobileVisual/>
    <MobileCategory/>
    <MobileBanner/>
    <MobileRank/>
    <MobileRecipe/>
    <MobileTip/>
    </>
  )
}
