import React from "react";
import Navbarcomp from "../../components/Navbarcomp";
import VendorRegistrationForm from "../../components/VendorRegistrationFormcomp/VendorRegistrationForm";
import VendorRegistrationHero from "../../components/VendorRegistrationHeroComp/VendorRegistrationHero";
import VendorFormAbout from "../../components/VendorFormAbout/VendorFormAbout";

export default function VendorRegistrationPage() {
  return (
    <div>
      <Navbarcomp />
      <VendorRegistrationHero />
      <VendorFormAbout />
      <VendorRegistrationForm />
    </div>
  );
}
