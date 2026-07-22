import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CatalogSection } from './components/CatalogSection';
import { ServicesSection } from './components/ServicesSection';
import { TeamSection } from './components/TeamSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { CallModal } from './components/CallModal';
import { SuccessToast } from './components/SuccessToast';
import { PROPERTIES } from './data';
import { FilterState, Property } from './types';

export default function App() {
  const [filter, setFilter] = useState<FilterState>({
    dealType: 'Все',
    district: 'Все',
    priceRange: 'Все',
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [viewingTitle, setViewingTitle] = useState<string | undefined>(undefined);
  const [successToastOpen, setSuccessToastOpen] = useState(false);

  const handleSearch = () => {
    const catalogEl = document.getElementById('catalog');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilter = () => {
    setFilter({
      dealType: 'Все',
      district: 'Все',
      priceRange: 'Все',
    });
  };

  const handleOpenCallModal = () => {
    setViewingTitle(undefined);
    setCallModalOpen(true);
  };

  const handleRequestViewing = (title: string) => {
    setViewingTitle(title);
    setCallModalOpen(true);
  };

  const handleFormSuccess = () => {
    setSuccessToastOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#e5e2e1] font-sans relative selection:bg-[#f2ca50] selection:text-[#3c2f00]">
      {/* Sticky Navigation Header */}
      <Navbar onOpenCallModal={handleOpenCallModal} />

      <main>
        {/* Hero Section & Search Bar */}
        <HeroSection
          filter={filter}
          setFilter={setFilter}
          onSearch={handleSearch}
        />

        {/* About Section */}
        <AboutSection />

        {/* Catalog Section */}
        <CatalogSection
          properties={PROPERTIES}
          filter={filter}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onResetFilter={handleResetFilter}
        />

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />

        {/* Inquiry Form Section */}
        <InquirySection onSuccess={handleFormSuccess} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onRequestViewing={handleRequestViewing}
      />

      {/* Callback / Viewing Request Modal */}
      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        onSubmitSuccess={handleFormSuccess}
        propertyTitle={viewingTitle}
      />

      {/* Success Notification Modal */}
      <SuccessToast
        isOpen={successToastOpen}
        onClose={() => setSuccessToastOpen(false)}
      />
    </div>
  );
}
