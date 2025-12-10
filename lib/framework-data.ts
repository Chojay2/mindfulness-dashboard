import { FrameworkData } from '@/types/framework';

export const frameworkData: FrameworkData = {
  dimensions: [
    {
      id: 'micro',
      name: 'Micro Level',
      description: 'Individual Mindfulness',
      color: 'blue',
      icon: 'User',
      categories: [
        {
          id: 'mindfulness-spirituality',
          name: 'Mindfulness & Spirituality',
          indicators: [
            {
              id: 'present-awareness',
              name: 'Present awareness',
              definition: 'Conscious awareness of thoughts, actions, emotions in present moment.',
              quantifiable: 'no'
            },
            {
              id: 'complexity-awareness',
              name: 'Complexity awareness',
              definition: 'Understanding systemic conditions & complexity.',
              quantifiable: 'no'
            },
            {
              id: 'mindful-ethics',
              name: 'Mindful ethics',
              definition: 'Moral clarity, ethical responsibility.',
              quantifiable: 'no'
            },
            {
              id: 'spiritual-activities',
              name: 'Engagement in spiritual activities',
              definition: 'Participation in meditation, prayer, rituals.',
              quantifiable: 'yes'
            },
            {
              id: 'contemplative-spaces',
              name: 'Accessibility to contemplative spaces',
              definition: 'Access to temples, meditation centers, walkways.',
              quantifiable: 'yes'
            },
            {
              id: 'mental-health',
              name: 'Mental health',
              definition: 'Emotional well-being, low stress & anxiety.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'physical-health',
          name: 'Physical Health',
          indicators: [
            {
              id: 'healthy-days',
              name: 'Healthy days',
              definition: 'Number of physically healthy days per month.',
              quantifiable: 'yes'
            },
            {
              id: 'physical-activity',
              name: 'Physical activity & healthcare access',
              definition: 'Walking, exercise, yoga; access to centers.',
              quantifiable: 'yes'
            },
            {
              id: 'physical-facilities',
              name: 'Access to physical facilities',
              definition: 'Availability of gyms, parks, spaces.',
              quantifiable: 'yes'
            },
            {
              id: 'mindful-nutrition',
              name: 'Mindful nutrition',
              definition: 'Balanced eating habits.',
              quantifiable: 'no'
            }
          ]
        },
        {
          id: 'mindful-lifestyle',
          name: 'Mindful Lifestyle',
          indicators: [
            {
              id: 'income',
              name: 'Income',
              definition: 'Ability to meet basic needs.',
              quantifiable: 'yes'
            },
            {
              id: 'house-affordability',
              name: 'House affordability & quality',
              definition: 'Safety, comfort, structural integrity.',
              quantifiable: 'yes'
            },
            {
              id: 'education',
              name: 'Education',
              definition: 'Value-based and emotional awareness education.',
              quantifiable: 'no'
            },
            {
              id: 'basic-services',
              name: 'Basic quality services',
              definition: 'Availability of waste, water, electricity, education.',
              quantifiable: 'yes'
            },
            {
              id: 'sustainable-behaviour',
              name: 'Sustainable behaviour',
              definition: 'Public transport usage, waste segregation.',
              quantifiable: 'yes'
            }
          ]
        }
      ]
    },
    {
      id: 'meso',
      name: 'Meso Level',
      description: 'Social Mindfulness',
      color: 'green',
      icon: 'Users',
      categories: [
        {
          id: 'relational-mindfulness',
          name: 'Relational Mindfulness',
          indicators: [
            {
              id: 'relational-mindfulness-indicator',
              name: 'Relational mindfulness',
              definition: 'Compassion, right speech, gratitude, patience.',
              quantifiable: 'no'
            }
          ]
        },
        {
          id: 'community-vitality',
          name: 'Community Vitality',
          indicators: [
            {
              id: 'social-responsibilities',
              name: 'Social responsibilities',
              definition: 'Volunteer days and contributions.',
              quantifiable: 'yes'
            },
            {
              id: 'cohesive-community',
              name: 'Cohesive community',
              definition: 'Belonging, trust, social harmony.',
              quantifiable: 'no'
            },
            {
              id: 'safety-crime',
              name: 'Safety and crime',
              definition: 'Perceived safety, crime absence.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'cultural-vibrancy',
          name: 'Cultural Vibrancy',
          indicators: [
            {
              id: 'socio-cultural-participation',
              name: 'Socio-cultural participation',
              definition: 'Rituals, festivals, cultural programs.',
              quantifiable: 'yes'
            },
            {
              id: 'diversity-inclusion',
              name: 'Diversity support & inclusion',
              definition: 'Support for elderly, disabled, accessibility.',
              quantifiable: 'yes'
            }
          ]
        }
      ]
    },
    {
      id: 'exosystem',
      name: 'Exosystem',
      description: 'Governance Mindfulness',
      color: 'orange',
      icon: 'Building2',
      categories: [
        {
          id: 'mindful-governance',
          name: 'Mindful Governance',
          indicators: [
            {
              id: 'conducive-environment',
              name: 'Conducive environment',
              definition: 'Safety, respect, corruption/culture.',
              quantifiable: 'yes'
            },
            {
              id: 'data-sharing',
              name: 'Authentic & adequate sharing of data',
              definition: 'Transparency of city operations.',
              quantifiable: 'yes'
            },
            {
              id: 'urban-resilience',
              name: 'Urban resilience',
              definition: 'DRR strategies, adaptability.',
              quantifiable: 'yes'
            },
            {
              id: 'urban-planning',
              name: 'Mindful urban planning',
              definition: 'Inclusive, equitable planning processes.',
              quantifiable: 'no'
            },
            {
              id: 'international-relations',
              name: 'Intra/international relations',
              definition: 'Collaboration with Bhutan & other countries.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'education-knowledge',
          name: 'Education & Knowledge',
          indicators: [
            {
              id: 'institutions-digital',
              name: 'Institutions & digital learning',
              definition: 'Mindfulness institutes, digital access.',
              quantifiable: 'yes'
            },
            {
              id: 'mindful-schools',
              name: 'Mindful schools/teachers/students',
              definition: 'Wellbeing, self-care, performance.',
              quantifiable: 'yes'
            },
            {
              id: 'access-internationalization',
              name: 'Access to institutions & internationalization',
              definition: 'Global partnerships, int\'l students.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'health-wellness',
          name: 'Health & Wellness',
          indicators: [
            {
              id: 'integrated-health',
              name: 'Integrated health systems',
              definition: 'Modern + traditional health facilities.',
              quantifiable: 'yes'
            },
            {
              id: 'mindful-health-services',
              name: 'Mindful health services',
              definition: 'Mindfulness-based therapies.',
              quantifiable: 'yes'
            },
            {
              id: 'user-centric',
              name: 'User-centric',
              definition: 'Accessibility, affordability.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'agri-tech-forestry',
          name: 'Agri-Tech & Forestry',
          indicators: [
            {
              id: 'forest-coverage',
              name: 'Forest coverage',
              definition: '% of city area under forest.',
              quantifiable: 'yes'
            },
            {
              id: 'green-blue-spaces',
              name: 'Green and blue spaces',
              definition: '15-minute access to green/blue spaces.',
              quantifiable: 'yes'
            },
            {
              id: 'climate-smart-agriculture',
              name: 'Climate-smart agriculture',
              definition: 'High-value crops, sustainable adoption.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'green-energy-tech',
          name: 'Green Energy & Tech',
          indicators: [
            {
              id: 'green-energy-share',
              name: 'Green energy share',
              definition: '% renewable energy.',
              quantifiable: 'yes'
            },
            {
              id: 'sustainable-transportation',
              name: 'Sustainable transportation',
              definition: 'EV adoption, eco-friendly systems.',
              quantifiable: 'yes'
            },
            {
              id: 'green-building',
              name: 'Green building standards',
              definition: 'Adoption & decarbonisation measures.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'finance-digital',
          name: 'Finance & Digital Assets',
          indicators: [
            {
              id: 'governance-transparency',
              name: 'Governance transparency',
              definition: 'Ethics, disclosure levels.',
              quantifiable: 'yes'
            },
            {
              id: 'sustainable-innovation',
              name: 'Sustainable business innovation',
              definition: 'R&D spending; sustainable models.',
              quantifiable: 'yes'
            },
            {
              id: 'financial-inclusion',
              name: 'Financial inclusion & accessibility',
              definition: 'Equitable digital finance access.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'aviation-logistics',
          name: 'Aviation & Logistics',
          indicators: [
            {
              id: 'traffic-congestion',
              name: 'Traffic congestion & coordination',
              definition: 'Traffic density, congestion index.',
              quantifiable: 'yes'
            },
            {
              id: 'service-provision',
              name: 'Service provision',
              definition: '% of areas within 400m of stops.',
              quantifiable: 'yes'
            },
            {
              id: 'interconnectivity',
              name: 'Interconnectivity & mobility',
              definition: 'Routes, networks, accessibility.',
              quantifiable: 'yes'
            },
            {
              id: 'ecosystem-stewardship',
              name: 'Ecosystem stewardship',
              definition: 'Mechanisms protecting natural areas.',
              quantifiable: 'partially'
            }
          ]
        },
        {
          id: 'tourism',
          name: 'Tourism',
          indicators: [
            {
              id: 'mindful-tourism-policy',
              name: 'Mindful tourism policy',
              definition: 'Alignment with aspirations.',
              quantifiable: 'no'
            },
            {
              id: 'medical-tourism',
              name: 'Medical tourism & attractions',
              definition: 'Health-based tourism offerings.',
              quantifiable: 'yes'
            },
            {
              id: 'international-visitors',
              name: 'International visitors & behaviour',
              definition: 'Visitor numbers, eco-friendly stay %',
              quantifiable: 'yes'
            },
            {
              id: 'stakeholder-engagement',
              name: 'Stakeholder engagement',
              definition: 'Rooms available, participation levels.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'spiritual',
          name: 'Spiritual',
          indicators: [
            {
              id: 'mindfulness-facilitators',
              name: 'Mindfulness facilitators',
              definition: 'Facilitators per 1,000 residents.',
              quantifiable: 'yes'
            },
            {
              id: 'cultural-heritage',
              name: 'Cultural/spiritual heritage support',
              definition: 'Preservation and promotion actions.',
              quantifiable: 'partially'
            }
          ]
        }
      ]
    },
    {
      id: 'macrosystem',
      name: 'Macrosystem',
      description: 'Planetary & Ecological Mindfulness',
      color: 'purple',
      icon: 'Globe',
      categories: [
        {
          id: 'local-ecological',
          name: 'Local Ecological',
          indicators: [
            {
              id: 'net-zero',
              name: 'Net zero',
              definition: 'Carbon footprint vs absorption.',
              quantifiable: 'yes'
            },
            {
              id: 'biodiversity-support',
              name: 'Biodiversity support',
              definition: 'Corridor creation, species trends.',
              quantifiable: 'yes'
            },
            {
              id: 'air-quality',
              name: 'Air quality',
              definition: 'Pollutant removal, vegetation index.',
              quantifiable: 'yes'
            },
            {
              id: 'waste-management',
              name: 'Waste management',
              definition: 'Waste systems & efficiency.',
              quantifiable: 'yes'
            }
          ]
        },
        {
          id: 'global-ecological',
          name: 'Global Ecological',
          indicators: [
            {
              id: 'ghg-emissions',
              name: 'GHG emissions',
              definition: 'Annual CO₂ emissions.',
              quantifiable: 'yes'
            },
            {
              id: 'land-system-change',
              name: 'Land-system change',
              definition: 'Rate of land conversion.',
              quantifiable: 'yes'
            },
            {
              id: 'biogeochemical-pollutants',
              name: 'Biogeochemical pollutants',
              definition: 'Nitrogen/phosphorus load.',
              quantifiable: 'yes'
            },
            {
              id: 'biosphere-integrity',
              name: 'Biosphere integrity',
              definition: 'Species extinction rate.',
              quantifiable: 'yes'
            }
          ]
        }
      ]
    }
  ]
};

// Helper functions to get framework data
export function getDimension(id: string) {
  return frameworkData.dimensions.find(d => d.id === id);
}

export function getCategory(dimensionId: string, categoryId: string) {
  const dimension = getDimension(dimensionId);
  return dimension?.categories.find(c => c.id === categoryId);
}

export function getIndicator(dimensionId: string, categoryId: string, indicatorId: string) {
  const category = getCategory(dimensionId, categoryId);
  return category?.indicators.find(i => i.id === indicatorId);
}

export function getAllIndicators() {
  const indicators: Array<{
    dimension: string;
    category: string;
    indicator: typeof frameworkData.dimensions[0]['categories'][0]['indicators'][0];
  }> = [];
  
  frameworkData.dimensions.forEach(dimension => {
    dimension.categories.forEach(category => {
      category.indicators.forEach(indicator => {
        indicators.push({ dimension: dimension.id, category: category.id, indicator });
      });
    });
  });
  
  return indicators;
}

