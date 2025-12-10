"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  Users,
  BookOpen,
  Globe,
  Award,
  Search,
  BarChart3,
  Map,
  TrendingUp,
  Play,
  ArrowRight,
} from "lucide-react";
import { frameworkData } from "@/lib/framework-data";
import { dimensionColors } from "@/lib/config";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);
  const [imageRotation, setImageRotation] = useState(0);

  // Calculate statistics
  const totalIndicators = frameworkData.dimensions.reduce(
    (acc, dim) =>
      acc + dim.categories.reduce((sum, cat) => sum + cat.indicators.length, 0),
    0
  );
  const totalCategories = frameworkData.dimensions.reduce(
    (acc, dim) => acc + dim.categories.length,
    0
  );

  return (
    <div className="w-full  bg-[#142019]">
      {/* Navigation */}
      <nav className="  w-full bg-[#142019] my-10">
        <div className="max-w-7xl mx-auto px-6 py-4 my-6 flex justify-between items-center border-b border-white">
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <span className="font-bold text-white hover:text-white text-[18px]  block">
                Mindfulness City Index
              </span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="#about"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#142019] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#dimensions"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              Dimensions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#142019] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/overview"
              className="text-white hover:text-white text-[18px]  font-medium transition-colors duration-200 relative group"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#142019] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="#contact"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#142019] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative  min-h-[100px] p-20 bg-[#142019] my-10 overflow-hidden rounded-[60px]   m-20">
        <div className="absolute inset-0 rounded-[60px]">
          <Image
            src="/bg.png"
            alt="Mindfulness City Framework"
            fill
            className="object-cover opacity-90 rounded-[20px] "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[black]/100 via-[black]/30 to-[black]/90"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center mx-auto px-6 z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Mindfulness
              <br />
              <span className="text-white">Indicator Framework</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              Ranked #1 Framework for Tracking City-Wide Mindfulness and
              Well-being Indicators
            </p>
            <Link href="/overview">
              <Button
                size="lg"
                className="bg-white text-[#142019] hover:bg-gray-100 mt-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                Explore Dashboard
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#142019] text-white py-20 pb-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="text-center text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed">
            At Mindfulness City, we strive to cultivate mindful communities that
            will navigate change and steer toward the creation of well-being for
            the whole of society.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "85%", label: "Framework Coverage" },
              { value: "4", label: "Core Dimensions" },
              { value: `${totalCategories}+`, label: "Categories" },
              { value: `${totalIndicators}+`, label: "Indicators" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 animate-count-up">
                  {stat.value}
                </div>
                <p className="text-white/90 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Dimensions Section */}
      {/* <section id="dimensions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4">
                Framework Dimensions
              </h2>
              <p className="text-lg text-[hsl(var(--body-text))] max-w-2xl">
                Explore our comprehensive framework covering individual, social,
                governance, and ecological dimensions of mindfulness.
              </p>
            </div>
            <Link
              href="/overview"
              className="hidden md:flex items-center gap-2 text-[#142019] font-semibold hover:gap-3 transition-all duration-300 group"
            >
              View All
              <div className="w-2 h-2 rounded-full bg-[#142019] group-hover:scale-150 transition-transform duration-300"></div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworkData.dimensions.map((dimension, idx) => {
              const colors =
                dimensionColors[dimension.id as keyof typeof dimensionColors];
              const isHovered = hoveredCard === idx;

              return (
                <Link
                  key={dimension.id}
                  href={`/${dimension.id}`}
                  className="group"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={cn(
                      "h-full rounded-lg overflow-hidden border-2 transition-all duration-300",
                      colors.border,
                      isHovered
                        ? "shadow-2xl scale-105 border-[#142019]"
                        : "shadow-md hover:shadow-xl"
                    )}
                  >
                    <div
                      className={cn(
                        "h-48 p-6 flex flex-col justify-between relative overflow-hidden",
                        colors.bg
                      )}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 opacity-20 bg-white"></div>
                      <div className="relative z-10">
                        <h3
                          className={cn("text-2xl font-bold mb-2", colors.text)}
                        >
                          {dimension.name}
                        </h3>
                        <p className={cn("text-sm", colors.text, "opacity-90")}>
                          {dimension.description}
                        </p>
                      </div>
                    </div>
                    <div className="p-6 bg-white">
                      <div className="flex justify-between text-sm mb-4">
                        <span className="text-[hsl(var(--body-text))]">
                          Categories
                        </span>
                        <span className="font-semibold text-[hsl(var(--dark-text))]">
                          {dimension.categories.length}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm mb-4">
                        <span className="text-[hsl(var(--body-text))]">
                          Indicators
                        </span>
                        <span className="font-semibold text-[hsl(var(--dark-text))]">
                          {dimension.categories.reduce(
                            (acc, cat) => acc + cat.indicators.length,
                            0
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[#142019] font-medium text-sm mt-4 group-hover:gap-3 transition-all duration-300">
                        Explore
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[hsl(var(--dark-text))] mb-4 text-center">
            Core Values and Behaviours
            <br />
            <span className="text-[#142019]">of the Framework</span>
          </h2>
          <p className="text-[hsl(var(--body-text))] text-center mb-12 max-w-2xl mx-auto">
            These values form the foundation of our framework culture and guide
            all our decisions and actions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                desc: "Pursuing the highest standards of quality in data and analytics",
                color: "#142019",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Building strong partnerships and relationships across sectors",
                color: "hsl(var(--chart-green))",
              },
              {
                icon: Globe,
                title: "Integrity",
                desc: "Acting with honesty and strong moral principles in all measurements",
                color: "#142019",
              },
              {
                icon: BookOpen,
                title: "Innovation",
                desc: "Embracing new ideas and creative solutions for mindfulness tracking",
                color: "hsl(var(--muted-teal))",
              },
              {
                icon: Users,
                title: "Inclusion",
                desc: "Creating welcoming spaces for all perspectives and communities",
                color: "hsl(var(--chart-green))",
              },
              {
                icon: Award,
                title: "Stewardship",
                desc: "Protecting and nurturing well-being for future generations",
                color: "#142019",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border-2 border-[hsl(var(--border))] hover:border-[#142019] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 group cursor-pointer"
              >
                <div className="flex justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon
                      className="w-8 h-8"
                      style={{ color: value.color }}
                    />
                  </div>
                </div>
                <h3 className="font-bold text-[hsl(var(--dark-text))] mb-3 text-xl text-center">
                  {value.title}
                </h3>
                <p className="text-sm text-[hsl(var(--body-text))] text-center leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button
              asChild
              className="bg-[#142019] hover:bg-[#142019]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/overview">Explore More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Framework Dimensions Carousel Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-20 bg-[#142019] overflow-hidden">
        <div className="flex items-center justify-center gap-10 flex-col md:flex-row">
          {/* Mandala Image with Rotation */}
          <div className="relative flex-shrink-0">
            <Image
              src="/mandala.png"
              alt="Mindfulness City Framework"
              width={500}
              height={500}
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `rotate(${imageRotation}deg)` }}
            />
          </div>

          {/* Carousel Content */}
          <div className="relative flex-1 max-w-2xl">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentDimensionIndex * 100}%)`,
                }}
              >
                {frameworkData.dimensions.map((dimension, idx) => {
                  const descriptions: Record<string, string> = {
                    micro:
                      "Focuses on personal well-being, mental health, physical health, and mindful lifestyle choices at the individual level. This dimension measures how individuals cultivate awareness, practice mindfulness, maintain physical wellness, and make conscious choices that support their personal growth and well-being.",
                    meso: "Emphasizes relational mindfulness, community vitality, and cultural vibrancy that strengthen social connections. This dimension explores how communities build trust, foster belonging, celebrate diversity, and create supportive environments where people can thrive together.",
                    exosystem:
                      "Covers mindful governance systems, education, health services, and sustainable infrastructure development. This dimension examines how institutions, policies, and systems are designed to support well-being, transparency, resilience, and equitable access to resources and opportunities.",
                    macrosystem:
                      "Addresses local and global ecological health, biodiversity, climate action, and environmental stewardship. This dimension measures the city's impact on planetary systems, including carbon footprint, biodiversity support, air quality, and sustainable resource management for future generations.",
                  };

                  return (
                    <div
                      key={dimension.id}
                      className="min-w-full px-4 text-white"
                    >
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {dimension.description}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                        {descriptions[dimension.id] || dimension.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => {
                  const prevIndex =
                    currentDimensionIndex === 0
                      ? frameworkData.dimensions.length - 1
                      : currentDimensionIndex - 1;
                  setCurrentDimensionIndex(prevIndex);
                  setImageRotation((prev) => prev + 90);
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                aria-label="Previous dimension"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {frameworkData.dimensions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const rotationDiff = idx - currentDimensionIndex;
                      setCurrentDimensionIndex(idx);
                      setImageRotation((prev) => prev + rotationDiff * 90);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentDimensionIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Go to dimension ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => {
                  const nextIndex =
                    currentDimensionIndex ===
                    frameworkData.dimensions.length - 1
                      ? 0
                      : currentDimensionIndex + 1;
                  setCurrentDimensionIndex(nextIndex);
                  setImageRotation((prev) => prev + 90);
                }}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                aria-label="Next dimension"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white min-h-[700px] md:min-h-[900px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold  mb-4">
                Framework Dimensions
              </h2>
              <p className="text-lg text-[hsl(var(--body-text))] max-w-2xl">
                Explore our comprehensive framework covering all aspects of
                mindfulness and well-being measurement.
              </p>
            </div>
            <Link
              href="/overview"
              className="hidden md:flex items-center gap-2 text-[#142019] font-semibold hover:gap-3 transition-all duration-300 group"
            >
              View All
              <div className="w-2 h-2 rounded-full bg-[#142019] group-hover:scale-150 transition-transform duration-300"></div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {frameworkData.dimensions.slice(0, 3).map((dimension, idx) => {
              const colors =
                dimensionColors[dimension.id as keyof typeof dimensionColors];
              const isFirst = idx === 0;

              return (
                <Link
                  key={dimension.id}
                  href={`/${dimension.id}`}
                  className="group"
                >
                  <div
                    className={cn(
                      "h-full rounded-lg overflow-hidden border-2 transition-all duration-300",
                      isFirst
                        ? "bg-gradient-to-br from-[#142019] to-[hsl(var(--soft-orange))] text-white shadow-xl hover:shadow-2xl"
                        : "bg-white border-[hsl(var(--border))] hover:border-[#142019] shadow-md hover:shadow-xl",
                      "transform hover:-translate-y-2"
                    )}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        {isFirst && (
                          <div className="bg-white/20 text-white rounded px-3 py-1 text-xs font-semibold">
                            FEATURED
                          </div>
                        )}
                        <ChevronRight
                          className={cn(
                            "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300",
                            isFirst
                              ? "text-white"
                              : "text-[hsl(var(--body-text))]"
                          )}
                        />
                      </div>
                      <h3
                        className={cn(
                          "font-bold text-xl mb-3",
                          isFirst
                            ? "text-white"
                            : "text-[hsl(var(--dark-text))]"
                        )}
                      >
                        {dimension.name}
                      </h3>
                      <p
                        className={cn(
                          "text-sm mb-4",
                          isFirst
                            ? "text-white/90"
                            : "text-[hsl(var(--body-text))]"
                        )}
                      >
                        {dimension.description}
                      </p>
                      <div
                        className={cn(
                          "flex items-center gap-2 text-sm font-semibold",
                          isFirst ? "text-white" : "text-[#142019]"
                        )}
                      >
                        Learn More
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-[#142019] text-white relative overflow-hidden min-h-[700px] md:min-h-[900px] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)`,
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-wide max-w-3xl">
              Cultivating Excellence, Continuous Improvement, and
              Professionalism!
            </h2>
            <Link
              href="/overview"
              className="hidden md:flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all duration-300 group"
            >
              View All
              <div className="w-2 h-2 rounded-full bg-white group-hover:scale-150 transition-transform duration-300"></div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="aspect-square bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden group cursor-pointer hover:scale-105 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                  {item === 1 ? (
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Play className="h-10 w-10 text-white ml-1" />
                      </div>
                    </div>
                  ) : (
                    <Users className="h-16 w-16 text-white/50 group-hover:text-white/80 transition-colors duration-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-[hsl(var(--muted))] md:min-h-[900px] flex items-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold text-[hsl(var(--dark-text))]">
              News and Announcements
            </h2>
            <Link
              href="/overview"
              className="hidden md:flex items-center gap-2 text-[#142019] font-semibold hover:gap-3 transition-all duration-300 group"
            >
              View All
              <div className="w-2 h-2 rounded-full bg-[#142019] group-hover:scale-150 transition-transform duration-300"></div>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Framework Update 2025",
                date: "coming soon",
                desc: "Latest enhancements to indicator tracking and analytics",
                color: "bg-blue-500",
              },
              {
                title: "Well-being Metrics Release",
                date: "coming soon",
                desc: "New insights into community health and mindfulness",
                color: "bg-[hsl(var(--chart-green))]",
              },
              {
                title: "Annual Report Available",
                date: "coming soon",
                desc: "Comprehensive analysis of framework performance",
                color: "bg-[#142019]",
              },
            ].map((news, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg overflow-hidden border-2 border-[hsl(var(--border))] hover:border-[#142019] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
              >
                <div
                  className={`h-48 ${news.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                  <BarChart3 className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-[hsl(var(--body-text))] font-semibold mb-2">
                    {news.date}
                  </p>
                  <h3 className="font-bold text-[hsl(var(--dark-text))] mb-3 line-clamp-2 text-lg">
                    {news.title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--body-text))] mb-4 line-clamp-2">
                    {news.desc}
                  </p>
                  <button className="text-[#142019] text-sm font-semibold hover:underline flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#142019] text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold text-white text-lg">
                  Mindfulness City
                </span>
              </div>
              <p className="text-base text-gray-400">
                Comprehensive Indicator Framework for tracking mindfulness and
                well-being.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Framework</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="/overview"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="#dimensions"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Dimensions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Analytics
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="#about"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Connect</h3>
              <div className="flex gap-4">
                {[BarChart3, Map, TrendingUp].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#142019] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-[#142019] transition-colors duration-200"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <span className="font-bold text-white text-lg">
                Mindfulness City
              </span>
            </div>
            <p className="text-base text-gray-500">
              © 2024 Mindfulness City Framework. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
