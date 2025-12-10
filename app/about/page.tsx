"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Building2,
  Users,
  Globe,
  Award,
  BarChart3,
  Target,
  Lightbulb,
  BookOpen,
  GraduationCap,
  Network,
  CheckCircle2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#142019] min-h-screen">
      {/* Navigation */}
      <nav className="w-full bg-[#142019] my-10">
        <div className="max-w-7xl mx-auto px-6 py-4 my-6 flex justify-between items-center border-b border-white">
          <Link href="/" className="flex items-center gap-3 group">
            <div>
              <span className="font-bold text-white hover:text-white text-[18px] block">
                IMUI
              </span>
            </div>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link
              href="/about"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#dimensions"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              Dimensions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/overview"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              Dashboard
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#faq"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-white text-[18px] font-medium transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[400px] p-20 bg-[#142019] my-10 overflow-hidden rounded-[60px] m-20">
        <div className="absolute inset-0 rounded-[60px]">
          <Image
            src="/bg.png"
            alt="IMUI"
            fill
            className="object-cover opacity-90 rounded-[20px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[black]/100 via-[black]/30 to-[black]/90"></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center mx-auto px-6 z-10">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              About the Institute of
              <br />
              <span className="text-white">Mindful Urban Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-3xl mx-auto">
              A specialised urban research and policy institution dedicated to
              advancing the Mindfulness City model
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-[hsl(var(--body-text))] leading-relaxed mb-8">
                The{" "}
                <strong className="text-[#142019]">
                  Institute of Mindful Urban Innovation (IMUI)
                </strong>{" "}
                is a specialised urban research and policy institution dedicated
                to advancing the{" "}
                <strong className="text-[#286D28]">Mindfulness City</strong>{" "}
                model.
              </p>
              <p className="text-lg text-[hsl(var(--body-text))] leading-relaxed mb-8">
                We work at the intersection of{" "}
                <strong>
                  urban governance, wellbeing, culture, ecology, and innovation
                </strong>
                , helping cities become{" "}
                <strong>cleaner, greener, safer, and more liveable</strong>
                —while staying deeply rooted in mindfulness and ethical values.
              </p>
            </div>

            {/* Core Functions */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: "Urban Innovation & Governance Research",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: BarChart3,
                  title: "Mindfulness City Monitoring & Evaluation",
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Network,
                  title: "Global Collaboration, Knowledge Exchange & Outreach",
                  color: "from-orange-500 to-orange-600",
                },
              ].map((func, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-gray-200 hover:border-[#286D28]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <CardHeader>
                    <div
                      className={cn(
                        "w-16 h-16 rounded-xl p-4 bg-gradient-to-br mb-4",
                        func.color
                      )}
                    >
                      <func.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-[#142019]">
                      {func.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <p className="text-lg text-[hsl(var(--body-text))] leading-relaxed mt-12 text-center max-w-3xl mx-auto">
              Across these areas, we design frameworks, tools, training
              programmes, and dashboards that support{" "}
              <strong className="text-[#142019]">
                evidence-based, mindful decision-making
              </strong>{" "}
              in cities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 bg-[#142019] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#286D28]/20 rounded-xl mb-6">
                <Target className="h-12 w-12 text-[#286D28]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Purpose
              </h2>
            </div>

            <p className="text-xl text-white/90 leading-relaxed mb-8 text-center">
              Our mission is to{" "}
              <strong>
                cultivate mindfulness across individual, community, and
                governance systems in global cities
              </strong>{" "}
              through:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Research and innovation",
                "Monitoring and evaluation",
                "Knowledge exchange and capacity-building",
                "International collaboration and recognition",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#286D28] flex-shrink-0 mt-1" />
                  <p className="text-lg text-white/90">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-lg text-white/90 leading-relaxed">
                We see cities not just as physical infrastructures, but as{" "}
                <strong>living ecosystems</strong> that must support:
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">
                    Resident wellbeing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">
                    Strong, cohesive communities
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">
                    Ethical and transparent governance across economic clusters
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                  <span className="text-lg text-white/90">
                    Ecological balance, from local environments to planetary
                    health
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision of Mindful City Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#286D28]/10 rounded-xl mb-6">
                <Globe className="h-12 w-12 text-[#286D28]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#142019] mb-6">
                Our Vision of a Mindful City
              </h2>
            </div>

            <p className="text-xl text-[hsl(var(--body-text))] leading-relaxed mb-8">
              IMUI defines a{" "}
              <strong className="text-[#286D28]">Mindful City</strong> as an{" "}
              <strong>urban ecosystem</strong> that:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                "Supports residents' mental, physical, and spiritual wellbeing",
                "Strengthens community bonds and social responsibility",
                "Upholds ethical, transparent, and inclusive governance",
                "Fosters sustainability and ecological balance, respecting both local habitats and planetary limits",
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-gray-200 hover:border-[#286D28]/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#286D28]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-[#286D28]" />
                      </div>
                      <p className="text-base text-[hsl(var(--body-text))] leading-relaxed">
                        {item}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-[#286D28]/20 bg-gradient-to-br from-[#286D28]/5 to-white mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#142019] mb-4">
                  The Mindfulness City Framework
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-[hsl(var(--body-text))] leading-relaxed">
                  This vision is operationalised through a{" "}
                  <strong className="text-[#142019]">
                    Mindfulness City Framework
                  </strong>{" "}
                  that:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                    <span className="text-base text-[hsl(var(--body-text))]">
                      Is inspired by the{" "}
                      <strong>Buddhist Mandala structure</strong> and{" "}
                      <strong>
                        Bronfenbrenner's Ecological Systems Theory
                      </strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-1" />
                    <span className="text-base text-[hsl(var(--body-text))]">
                      Covers <strong>9 dimensions</strong> and{" "}
                      <strong>58 indicators</strong> across four levels
                    </span>
                  </li>
                </ul>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  {[
                    { level: "Micro", desc: "Individual" },
                    { level: "Meso", desc: "Society and community" },
                    { level: "Exo", desc: "Governance and institutions" },
                    { level: "Macro", desc: "Ecology and the planet" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white rounded-lg border-2 border-[#286D28]/20 text-center"
                    >
                      <div className="font-bold text-[#286D28] text-lg mb-2">
                        {item.level}
                      </div>
                      <div className="text-sm text-[hsl(var(--body-text))]">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
                  <p className="text-base text-[hsl(var(--body-text))] leading-relaxed mb-4">
                    The framework is grounded in:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "The aspirations of Gelephu Mindfulness City (GMC)",
                      "The Gross National Happiness (GNH) philosophy",
                      "Core mindfulness values from Vajrayana Buddhism",
                      "International standards such as SDG 11 and global city indices",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[hsl(var(--body-text))]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Division 1 Section */}
      <section className="py-20 bg-[hsl(var(--muted))]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#286D28]/10 rounded-xl mb-6">
                <BarChart3 className="h-12 w-12 text-[#286D28]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#142019] mb-4">
                Division 1: Mindfulness City Monitoring & Evaluation Division
              </h2>
              <p className="text-lg text-[hsl(var(--body-text))] max-w-2xl mx-auto">
                Leads the measurement, reporting, and recognition of mindful
                city performance
              </p>
            </div>

            <Card className="border-2 border-[#286D28]/20 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#142019]">
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-[hsl(var(--body-text))] leading-relaxed mb-4">
                  The{" "}
                  <strong className="text-[#142019]">
                    Mindfulness City Monitoring & Evaluation Division
                  </strong>{" "}
                  leads the{" "}
                  <strong>measurement, reporting, and recognition</strong> of
                  mindful city performance through the{" "}
                  <strong>GMC Mindfulness City Index</strong> and the{" "}
                  <strong>Global Mindful Cities Index</strong>.
                </p>
                <p className="text-base text-[hsl(var(--body-text))] leading-relaxed">
                  This division manages data collection and indicator databases,
                  operates dashboards and visual tools for decision-makers and
                  the public, produces key reports for{" "}
                  <strong>evidence-based urban planning</strong>, and designs
                  and administers{" "}
                  <strong>certification and awards systems</strong> to
                  incentivise continuous improvement.
                </p>
              </CardContent>
            </Card>

            {/* Units */}
            <div className="space-y-8">
              {[
                {
                  title: "GMC Index Unit – Gelephu as the Living Lab",
                  desc: "Uses Gelephu Mindfulness City as a living laboratory for mindful urban development",
                  keyRoles: [
                    "Implement the full GMC Mindfulness City Index, using 9 dimensions and 58 indicators",
                    "Design and carry out surveys and data collection across individuals, communities, and governance systems",
                    "Produce the annual 'State of Mindfulness in GMC' report",
                    "Work closely with GMCA and stakeholders to interpret results and guide investments",
                  ],
                  icon: Building2,
                },
                {
                  title:
                    "Global Index & Methods Unit – From GMC to a Global Model",
                  desc: "Responsible for turning the GMC experience into a national and global model",
                  keyRoles: [
                    "Select and maintain globally feasible indicators",
                    "Ensure the Global Mindful Cities Index remains practical, methodologically sound, and credible",
                    "Clearly define each indicator and its approved data sources",
                    "Coordinate expert input and periodic methodology reviews",
                  ],
                  icon: Globe,
                },
                {
                  title: "Certification & Awards Unit",
                  desc: "Designs and manages the recognition system linked to the Global Mindful Cities Index",
                  keyRoles: [
                    "Define certification levels: Platinum, Gold, Silver, Bronze",
                    "Manage assessment, verification, and scoring processes",
                    "Administer dimension-based performance ratings (A+, A, B, C)",
                    "Design and award thematic Achievement Badges",
                    "Coordinate independent review panels",
                  ],
                  icon: Award,
                },
                {
                  title: "Data & Dashboard Unit",
                  desc: "The technical backbone of the monitoring system",
                  keyRoles: [
                    "Maintain the indicator database for GMC and all participating cities",
                    "Design, develop, and continuously update the Mindful City Dashboard",
                    "Ensure all index calculations are reproducible, traceable, and well documented",
                    "Support both internal (policymakers) and public dashboards",
                  ],
                  icon: BarChart3,
                },
              ].map((unit, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-gray-200 hover:border-[#286D28]/30 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#286D28]/10 rounded-lg">
                        <unit.icon className="h-8 w-8 text-[#286D28]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-[#142019] mb-2">
                          {unit.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {unit.desc}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#142019] mb-3">
                        Key Roles:
                      </h4>
                      {unit.keyRoles.map((role, roleIdx) => (
                        <div key={roleIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[hsl(var(--body-text))] leading-relaxed">
                            {role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Division 2 Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#286D28]/10 rounded-xl mb-6">
                <Lightbulb className="h-12 w-12 text-[#286D28]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#142019] mb-4">
                Division 2: Urban Innovation & Governance Research Division
              </h2>
              <p className="text-lg text-[hsl(var(--body-text))] max-w-2xl mx-auto">
                The research and innovation engine of IMUI
              </p>
            </div>

            <Card className="border-2 border-[#286D28]/20 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#142019]">
                  Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-[hsl(var(--body-text))] leading-relaxed">
                  The{" "}
                  <strong className="text-[#142019]">
                    Urban Innovation & Governance Research Division
                  </strong>{" "}
                  is the <strong>research and innovation engine</strong> of
                  IMUI. Using{" "}
                  <strong>Gelephu Mindfulness City as a living lab</strong>, and
                  expanding gradually to other cities in Bhutan and beyond, this
                  division applies the Mindfulness Framework to real-world urban
                  experiments, drives innovation in people, neighbourhoods, and
                  economic clusters, and encourages sustainable, ethical, and
                  resilient urban development.
                </p>
              </CardContent>
            </Card>

            {/* Units */}
            <div className="space-y-8">
              {[
                {
                  title: "Mindful Urban Governance & Frameworks Unit",
                  desc: "Brings the Mindfulness Framework to life in policy and governance",
                  keyRoles: [
                    "Applies innovative governance and policy models across four levels",
                    "Enables cities to practice reflective, mindfulness-based decision-making",
                    "Tests new initiatives and supports collaborative policy design",
                    "Translates the nine mindfulness dimensions into practical planning tools",
                  ],
                  icon: Building2,
                },
                {
                  title: "Sustainable & Mindful Urban Innovations Unit",
                  desc: "Focuses on practical, on-the-ground urban innovations",
                  keyRoles: [
                    "Promotes environmentally resilient, low-impact solutions in mobility, energy, water, housing, and waste",
                    "Conducts research across social, cultural, and urban spaces",
                    "Combines mindful governance, ecological sustainability, and community vitality",
                    "Creates scalable, replicable models for cities",
                  ],
                  icon: Lightbulb,
                },
                {
                  title:
                    "Mindfulness & Knowledge Exchange Hub – The Mindfulness Academy",
                  desc: "IMUI's global hub for learning and knowledge sharing",
                  keyRoles: [
                    "Promotes mindfulness and wellbeing across all four levels",
                    "Uses blended learning: online modules, live sessions, retreats, and field visits",
                    "Hosts annual Mindfulness Summit with expert talks, panels, and workshops",
                    "Collaborates with leading global organisations",
                  ],
                  icon: GraduationCap,
                },
              ].map((unit, idx) => (
                <Card
                  key={idx}
                  className="border-2 border-gray-200 hover:border-[#286D28]/30 hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#286D28]/10 rounded-lg">
                        <unit.icon className="h-8 w-8 text-[#286D28]" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-[#142019] mb-2">
                          {unit.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {unit.desc}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#142019] mb-3">
                        Key Roles:
                      </h4>
                      {unit.keyRoles.map((role, roleIdx) => (
                        <div key={roleIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-[hsl(var(--body-text))] leading-relaxed">
                            {role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mindfulness Academy Details */}
            <Card className="border-2 border-[#286D28]/20 mt-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#142019] flex items-center gap-3">
                  <GraduationCap className="h-8 w-8 text-[#286D28]" />
                  The Mindfulness Academy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-[#142019] mb-3">
                    Learning Model
                  </h4>
                  <p className="text-base text-[hsl(var(--body-text))] leading-relaxed mb-4">
                    The Academy uses <strong>blended learning</strong>,
                    including:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Online modules and self-paced courses",
                      "Live sessions and in-person training",
                      "Retreats and experiential field visits",
                      "Webinars, workshops, and research collaborations",
                      "Annual Mindfulness Summit with expert talks, panels, interactive workshops, and cultural activities",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <BookOpen className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[hsl(var(--body-text))]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#142019] mb-3">
                    Course Themes by Level
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        level: "Micro level",
                        desc: "Personal practice and daily life",
                        courses: [
                          "Mindfulness and wellbeing",
                          "Sustainable living",
                          "Mindful communication",
                          "Mindfulness for youth and educators",
                        ],
                      },
                      {
                        level: "Meso level",
                        desc: "Communities and organisations",
                        courses: [
                          "Mindful leadership",
                          "Community resilience",
                          "Participatory urban governance",
                          "Facilitation and dialogue skills",
                        ],
                      },
                      {
                        level: "Exo level",
                        desc: "Institutions and systems",
                        courses: [
                          "Systems thinking",
                          "Institutional resilience",
                          "Institutional ethics",
                          "Mindfulness programmes for public institutions",
                        ],
                      },
                      {
                        level: "Macro level",
                        desc: "Policy and global issues",
                        courses: [
                          "Mindfulness in public policy",
                          "Climate and ecological resilience",
                          "Global peacebuilding and intercultural dialogue",
                        ],
                      },
                    ].map((theme, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <h5 className="font-semibold text-[#142019] mb-1">
                          {theme.level}
                        </h5>
                        <p className="text-sm text-[hsl(var(--body-text))] mb-3">
                          {theme.desc}
                        </p>
                        <ul className="space-y-1">
                          {theme.courses.map((course, courseIdx) => (
                            <li
                              key={courseIdx}
                              className="text-sm text-[hsl(var(--body-text))] flex items-start gap-2"
                            >
                              <span className="text-[#286D28]">•</span>
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#142019] mb-3">
                    Target Audience
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Students and the general public",
                      "Professionals and corporate teams",
                      "Community organisers and NGOs",
                      "Educators, researchers, and trainers",
                      "Policymakers, planners, and global leaders",
                    ].map((audience, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Users className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-[hsl(var(--body-text))]">
                          {audience}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-[#142019] mb-3">
                    Institutional Linkages
                  </h4>
                  <p className="text-base text-[hsl(var(--body-text))] leading-relaxed mb-4">
                    The Mindfulness Academy aims to collaborate with leading
                    global organisations such as:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Oxford Mindfulness Foundation (UK) – research-based mindfulness and meditation training",
                      "Mind & Life Institute (US) – bridging contemplative wisdom and modern science",
                      "Search Inside Yourself Leadership Institute (US) – mindfulness-based emotional intelligence and leadership training",
                    ].map((org, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-[#286D28]/5 rounded-lg border border-[#286D28]/20"
                      >
                        <p className="text-sm text-[hsl(var(--body-text))]">
                          {org}
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className="text-base text-[hsl(var(--body-text))] leading-relaxed mt-4">
                    These linkages help ensure that IMUI's work is{" "}
                    <strong>
                      science-informed, globally connected, and locally grounded
                    </strong>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation & Partners Section */}
      <section className="py-20 bg-[#142019] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-[#286D28]/20 rounded-xl mb-6">
                <Network className="h-12 w-12 text-[#286D28]" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Implementation, Partners & the Road Ahead
              </h2>
            </div>

            <Card className="border-2 border-white/10 bg-white/5 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Implementation Approach
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white/90 leading-relaxed mb-4">
                  IMUI advocates that the implementation and monitoring of the
                  Mindfulness City framework be managed by{" "}
                  <strong>independent research institutes or companies</strong>{" "}
                  working closely with city authorities. This helps ensure:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  {[
                    "Objectivity",
                    "Evidence-based decision-making",
                    "Transparency and public trust",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white/5 rounded-lg border border-white/10 text-center"
                    >
                      <CheckCircle2 className="h-6 w-6 text-[#286D28] mx-auto mb-2" />
                      <p className="text-base text-white/90">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-white/90 leading-relaxed mt-6">
                  We recommend <strong>annual public reporting</strong> on city
                  performance and progress, supported by dashboards and
                  accessible communication.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-white/10 bg-white/5 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  Potential Partners
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "International SDG initiatives",
                    "The Mindfulness Initiative and related organisations",
                    "Networks focused on liveable, resilient, happy, and green cities",
                    "The Doughnut Economics Lab for ecological and planetary indicators",
                  ].map((partner, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
                    >
                      <Network className="h-5 w-5 text-[#286D28] flex-shrink-0 mt-0.5" />
                      <p className="text-base text-white/90">{partner}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#286D28]/30 bg-gradient-to-br from-[#286D28]/10 to-[#142019]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">
                  The Road Ahead
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white/90 leading-relaxed">
                  Over time, the goal is to develop the Mindfulness City
                  framework into a robust, globally recognised{" "}
                  <strong>Mindful City Index</strong>—a certification and
                  learning platform through which cities around the world can{" "}
                  <strong>benchmark, improve, and celebrate</strong> their
                  journey toward being clean, green, safe, and truly mindful
                  places to live.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#142019] text-gray-300 py-16 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-bold text-white text-lg">IMUI</span>
              </div>
              <p className="text-base text-gray-400">
                Institute of Mindful Urban Innovation - Advancing the
                Mindfulness City model worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Framework</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="/overview"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#dimensions"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Dimensions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#faq"
                    className="hover:text-white transition-colors duration-200"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Resources</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <h3 className="font-bold text-white mb-4 text-lg">Connect</h3>
              <div className="flex gap-4">
                {[BarChart3, Map, TrendingUp].map((Icon, idx) => (
                  <div
                    key={idx}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#286D28] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div> */}
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
              <ul className="space-y-2 text-base">
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <span className="font-bold text-white text-lg">IMUI</span>
            </div>
            <p className="text-base text-gray-500">
              © 2024 Institute of Mindful Urban Innovation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
