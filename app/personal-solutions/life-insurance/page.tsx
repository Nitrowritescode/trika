import React from 'react'
import { TypesOfLifeInsurance } from './_components/Types'
import { CoverageDetails } from './_components/CoverageDetails'
import { EmployerPlanBenefits } from './_components/EmployerPlanBenefits'
import { LifeInsuranceHero } from './_components/LifeHero'
import { LifeInsuranceNeeds } from './_components/LifeInsuranceNeeds'

function LifeInsurancePage() {
  return (
    <div>
      <LifeInsuranceHero />
      <CoverageDetails />
      <EmployerPlanBenefits />
      <LifeInsuranceNeeds />
      <TypesOfLifeInsurance />
    </div>
  )
}

export default LifeInsurancePage
