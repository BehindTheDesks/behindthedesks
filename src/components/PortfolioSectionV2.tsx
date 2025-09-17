// src/components/PortfolioSectionV2.tsx
import React, { useRef, useState, useMemo } from "react";
import { AnimatedWrapper } from "./AnimatedWrapper"; // Assuming this is in ./AnimatedWrapper.tsx
import { fadeInUp, staggerContainer } from "./animations/variants"; // Your animation variants
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { PortfolioItemV2 } from "./ProjectCardV2";
import ProjectCardV2 from "./ProjectCardV2";
import mabketImage from "../assets/images/mabket.png";
import foundImage from "../assets/images/found.png";
import vipvendorImage from "../assets/images/vipvendor.png";
import dopeAfricaImage from "../assets/images/dope-africa.png";
import aynaDataSolutionImage from "../assets/images/ayna.png";
import quartered from "../assets/images/quartered.png";
import thekrownfixer from "../assets/images/thekrownfixer.png";
import som from "../assets/images/som.png";
import crestidge from "../assets/images/crestidge.png";

// --- Placeholder Data (Replace with your actual data or fetch from a source) ---
const portfolioItemsV2: PortfolioItemV2[] = [
  {
    id: "proj9",
    title: "Cretidge",
    imageUrl: crestidge,
    projectUrl: "https://crestridgedevelopment.co/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio",
  },
  {
    id: "proj8",
    title: "S.O.M Commodities",
    imageUrl: som,
    projectUrl: "https://somcommodities.com/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio",

  },
  {
    id: "proj7",
    title: "Thekrownfixer",
    imageUrl: thekrownfixer,
    projectUrl: "https://thekrownfixer.com/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio",

  },
  {
    id: "proj6",
    title: "Quartered",
    imageUrl: quartered,
    projectUrl: "https://quartered.co/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio",

  },
  {
    id: "proj5",
    title: "AYNA Data Solutions",
    imageUrl: aynaDataSolutionImage,
    projectUrl: "https://www.aynadatasolutions.com/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio",

  },
  {
    id: "proj1",
    title: "Mabket",
    imageUrl: mabketImage,
    projectUrl: "https://www.mabket.com/",
    category: "Web Platform",
    theme: "dark",
    niche:"E-commerce",


  },
  {
    id: "proj2",
    title: "Found",
    imageUrl: foundImage,
    projectUrl: "https://www.foundng.com/",
    category: "Mobile App",
    theme: "dark",
    niche:"Portfolio",

  },
  {
    id: "proj3",
    title: "VipVendor",
    imageUrl: vipvendorImage,
    projectUrl: "https://vipvendor.ng/",
    category: "Web Application",
    theme: "dark",
    niche:"E-commerce",

  },
  {
    id: "proj4",
    title: "Dope Africa",
    imageUrl: dopeAfricaImage,
    projectUrl: "https://dope.foundafrica.tech/",
    category: "Web Application",
    theme: "dark",
    niche:"Portfolio"
  },
];

function PortfolioSectionV2() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Get unique categories from portfolio items
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(portfolioItemsV2.map(item => item.niche))
    );
    return ["All", ...uniqueCategories];
  }, []);

  // Filter items based on active filter
  const filteredItems = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItemsV2;
    }
    return portfolioItemsV2.filter(item => item.niche === activeFilter);
  }, [activeFilter]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.firstChild
        ? (scrollContainerRef.current.firstChild as HTMLElement).offsetWidth
        : 320; // Estimate card width
      const scrollAmount = cardWidth * 1.5; // Scroll by approx 1.5 cards
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    // Reset scroll position when filter changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-[#F5F5F1] overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper variants={fadeInUp(0.6)} className="mb-10 md:mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark-text tracking-tight">
                BEST PROJECT
              </h2>
              <p className="text-md sm:text-lg text-brand-subtle-text mt-1 sm:mt-2">
                Explore more of our best projects.
              </p>
            </div>
          </div>
        </AnimatedWrapper>

        {/* Category Filter Tabs */}
        <AnimatedWrapper variants={fadeInUp(0.8)} className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterChange(category!)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-medium text-sm sm:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-lime-green focus:ring-offset-2 ${
                  activeFilter === category
                    ? "bg-brand-lime-green text-brand-dark-text shadow-md transform scale-105"
                    : "bg-white text-brand-subtle-text hover:bg-gray-50 hover:text-brand-dark-text shadow-sm hover:shadow-md"
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">
                  ({category === "All" ? portfolioItemsV2.length : portfolioItemsV2.filter(item => item.niche === category).length})
                </span>
              </button>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Results Counter */}
        <AnimatedWrapper variants={fadeInUp(0.9)} className="mb-6">
          <div className="text-center">
            <p className="text-brand-subtle-text text-sm sm:text-base">
              Showing {filteredItems.length} {filteredItems.length === 1 ? 'project' : 'projects'}
              {activeFilter !== "All" && (
                <span className="ml-1">
                  in <span className="font-semibold text-brand-dark-text">{activeFilter}</span>
                </span>
              )}
            </p>
          </div>
        </AnimatedWrapper>

        {/* Horizontal Scroll Container / Carousel */}
        <div className="relative group">
          {/* Left Scroll Button */}
          {filteredItems.length > 0 && (
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-lime-green"
            >
              <FiChevronLeft size={24} className="text-brand-dark-text" />
            </button>
          )}

          <AnimatedWrapper
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            key={activeFilter} // Re-trigger animation when filter changes
          >
            {filteredItems.length > 0 ? (
              <div
                ref={scrollContainerRef}
                className="flex pb-8 pt-2 space-x-5 sm:space-x-6 md:space-x-8 scrollbar-hide snap-x snap-mandatory"
                style={{
                  overflowX: "auto",
                  scrollbarWidth: "none", // Firefox
                  msOverflowStyle: "none", // IE 10+
                }}
              >
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="snap-center first:pl-1 last:pr-1 sm:first:pl-0 sm:last:pr-0"
                  >
                    <ProjectCardV2 item={item} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <p className="text-brand-subtle-text text-lg mb-2">
                    No projects found in this category
                  </p>
                  <button
                    onClick={() => handleFilterChange("All")}
                    className="text-brand-lime-green hover:underline font-medium"
                  >
                    View all projects
                  </button>
                </div>
              </div>
            )}
          </AnimatedWrapper>

          {/* Right Scroll Button */}
          {filteredItems.length > 0 && (
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 bg-white/80 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <FiChevronRight size={24} className="text-brand-dark-text" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSectionV2;