const mockLocations = {
  data: [
    {
      id: 'vha_512',
      type: 'va_facilities',
      attributes: {
        name: 'Baltimore VA Medical Center',
        facilityType: 'va_health_facility',
        classification: 'VA Medical Center (VAMC)',
        parent: {
          id: 'vha_512',
          link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512',
        },
        website:
          'https://www.va.gov/maryland-health-care/locations/baltimore-va-medical-center/',
        lat: 39.289743,
        long: -76.6244745,
        timeZone: 'America/New_York',
        address: {
          physical: {
            zip: '21201-1524',
            city: 'Baltimore',
            state: 'MD',
            address1: '10 North Greene Street',
          },
        },
        phone: {
          fax: '410-605-7900',
          main: '410-605-7000',
          pharmacy: '800-463-6295 x57395',
          afterHours: '800-463-6295',
          patientAdvocate: '410-605-7244',
          mentalHealthClinic: '410-605-7000 x 57360',
          enrollmentCoordinator: '410-605-7319',
        },
        hours: {
          monday: '24/7',
          tuesday: '24/7',
          wednesday: '24/7',
          thursday: '24/7',
          friday: '24/7',
          saturday: '24/7',
          sunday: '24/7',
        },
        operationalHoursSpecialInstructions: [
          'Normal business hours are Monday through Friday, 8:00 a.m. to 4:30 p.m.',
        ],
        services: {
          health: [
            {
              name: 'Addiction and substance use care',
              serviceId: 'addiction',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/addiction',
            },
            {
              name: 'Anesthesia',
              serviceId: 'anesthesia',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/anesthesia',
            },
            {
              name: 'Audiology and speech',
              serviceId: 'audiology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/audiology',
            },
            {
              name: 'Cancer care',
              serviceId: 'cancer',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/cancer',
            },
            {
              name: 'Cardiology',
              serviceId: 'cardiology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/cardiology',
            },
            {
              name: 'CaregiverSupport',
              serviceId: 'caregiverSupport',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/caregiverSupport',
            },
            {
              name: 'Dental/oral surgery',
              serviceId: 'dental',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/dental',
            },
            {
              name: 'Dermatology',
              serviceId: 'dermatology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/dermatology',
            },
            {
              name: 'Diabetic care',
              serviceId: 'diabetic',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/diabetic',
            },
            {
              name: 'Emergency care',
              serviceId: 'emergencyCare',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/emergencyCare',
            },
            {
              name: 'Endocrinology',
              serviceId: 'endocrinology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/endocrinology',
            },
            {
              name: 'Gastroenterology',
              serviceId: 'gastroenterology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/gastroenterology',
            },
            {
              name: 'Geriatrics',
              serviceId: 'geriatrics',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/geriatrics',
            },
            {
              name: 'Gynecology',
              serviceId: 'gynecology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/gynecology',
            },
            {
              name: 'Homeless Veteran care',
              serviceId: 'homeless',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/homeless',
            },
            {
              name: 'Infectious disease',
              serviceId: 'infectiousDisease',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/infectiousDisease',
            },
            {
              name: 'Laboratory and pathology',
              serviceId: 'laboratory',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/laboratory',
            },
            {
              name: 'LGBTQ+ Veteran care',
              serviceId: 'lgbtq',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/lgbtq',
            },
            {
              name: 'MentalHealth',
              serviceId: 'mentalHealth',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/mentalHealth',
            },
            {
              name: 'Military sexual trauma care',
              serviceId: 'militarySexualTrauma',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/militarySexualTrauma',
            },
            {
              name: 'Minority Veteran care',
              serviceId: 'minorityCare',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/minorityCare',
            },
            {
              name: 'My HealtheVet coordinator',
              serviceId: 'myHealtheVetCoordinator',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/myHealtheVetCoordinator',
            },
            {
              name: 'Nephrology',
              serviceId: 'nephrology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/nephrology',
            },
            {
              name: 'Neurology',
              serviceId: 'neurology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/neurology',
            },
            {
              name: 'Nutrition, food, and dietary care',
              serviceId: 'nutrition',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/nutrition',
            },
            {
              name: 'Ophthalmology',
              serviceId: 'ophthalmology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/ophthalmology',
            },
            {
              name: 'Optometry',
              serviceId: 'optometry',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/optometry',
            },
            {
              name: 'Orthopedics',
              serviceId: 'orthopedics',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/orthopedics',
            },
            {
              name: 'Patient advocates',
              serviceId: 'patientAdvocates',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/patientAdvocates',
            },
            {
              name: 'Pharmacy',
              serviceId: 'pharmacy',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/pharmacy',
            },
            {
              name: 'Physical medicine and rehabilitation',
              serviceId: 'physicalMedicine',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/physicalMedicine',
            },
            {
              name: 'Physical therapy, occupational therapy and kinesiotherapy',
              serviceId: 'physicalTherapy',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/physicalTherapy',
            },
            {
              name: 'Podiatry',
              serviceId: 'podiatry',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/podiatry',
            },
            {
              name: 'Primary care',
              serviceId: 'primaryCare',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/primaryCare',
            },
            {
              name: 'Prosthetics and rehabilitation',
              serviceId: 'prosthetics',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/prosthetics',
            },
            {
              name: 'PTSD care',
              serviceId: 'ptsd',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/ptsd',
            },
            {
              name: 'Pulmonary medicine',
              serviceId: 'pulmonaryMedicine',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/pulmonaryMedicine',
            },
            {
              name: 'Radiation oncology',
              serviceId: 'radiationOncology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/radiationOncology',
            },
            {
              name: 'Radiology',
              serviceId: 'radiology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/radiology',
            },
            {
              name: 'Registry exams',
              serviceId: 'registryExams',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/registryExams',
            },
            {
              name: 'Rheumatology',
              serviceId: 'rheumatology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/rheumatology',
            },
            {
              name: 'Sleep medicine',
              serviceId: 'sleepMedicine',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/sleepMedicine',
            },
            {
              name: 'Smoking and tobacco cessation',
              serviceId: 'smoking',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/smoking',
            },
            {
              name: 'Social work',
              serviceId: 'socialWork',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/socialWork',
            },
            {
              name: 'Suicide prevention',
              serviceId: 'suicidePrevention',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/suicidePrevention',
            },
            {
              name: 'Surgery',
              serviceId: 'surgery',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/surgery',
            },
            {
              name: 'Telehealth',
              serviceId: 'telehealth',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/telehealth',
            },
            {
              name: 'Returning service member care',
              serviceId: 'transitionCounseling',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/transitionCounseling',
            },
            {
              name: 'Travel reimbursement',
              serviceId: 'travelReimbursement',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/travelReimbursement',
            },
            {
              name: 'Urology',
              serviceId: 'urology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/urology',
            },
            {
              name: 'Blind and low vision rehabilitation',
              serviceId: 'vision',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/vision',
            },
            {
              name: 'Women Veteran care',
              serviceId: 'womensHealth',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services/womensHealth',
            },
          ],
          link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512/services',
          lastUpdated: '2023-10-15',
        },
        satisfaction: {
          health: {
            primaryCareUrgent: 0.75,
            primaryCareRoutine: 0.8299999833106995,
            specialtyCareUrgent: 0.6700000166893005,
            specialtyCareRoutine: 0.7599999904632568,
          },
          effectiveDate: '2022-06-28',
        },
        mobile: false,
        operatingStatus: {
          code: 'NORMAL',
          supplementalStatus: [
            {
              id: 'COVID_LOW',
              label: 'COVID-19 health protection: Levels low',
            },
          ],
        },
        visn: '5',
      },
    },

    {
      id: 'vha_512GD',
      type: 'va_facilities',
      attributes: {
        name: 'Loch Raven VA Medical Center',
        facilityType: 'va_health_facility',
        classification: 'VA Medical Center (VAMC)',
        parent: {
          id: 'vha_512',
          link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512',
        },
        website:
          'https://www.va.gov/maryland-health-care/locations/loch-raven-va-medical-center/',
        lat: 39.33617627,
        long: -76.59749567,
        timeZone: 'America/New_York',
        address: {
          physical: {
            zip: '21218-2100',
            city: 'Baltimore',
            state: 'MD',
            address1: '3901 The Alameda',
          },
        },
        phone: {
          fax: '410-605-7685',
          main: '410-605-7650',
          pharmacy: '800-463-6295 x57395',
          afterHours: '800-463-6295 x57650',
          patientAdvocate: '410-605-7542',
          mentalHealthClinic: '410-605-7000 x 53978',
          enrollmentCoordinator: '410-605-7319',
        },
        hours: {
          monday: '800AM-430PM',
          tuesday: '800AM-430PM',
          wednesday: '800AM-430PM',
          thursday: '800AM-430PM',
          friday: '800AM-430PM',
          saturday: 'Closed',
          sunday: 'Closed',
        },
        services: {
          health: [
            {
              name: 'Audiology and speech',
              serviceId: 'audiology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/audiology',
            },
            {
              name: 'Dermatology',
              serviceId: 'dermatology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/dermatology',
            },
            {
              name: 'Geriatrics',
              serviceId: 'geriatrics',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/geriatrics',
            },
            {
              name: 'Palliative and hospice care',
              serviceId: 'hospice',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/hospice',
            },
            {
              name: 'LGBTQ+ Veteran care',
              serviceId: 'lgbtq',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/lgbtq',
            },
            {
              name: 'MentalHealth',
              serviceId: 'mentalHealth',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/mentalHealth',
            },
            {
              name: 'Military sexual trauma care',
              serviceId: 'militarySexualTrauma',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/militarySexualTrauma',
            },
            {
              name: 'Minority Veteran care',
              serviceId: 'minorityCare',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/minorityCare',
            },
            {
              name: 'My HealtheVet coordinator',
              serviceId: 'myHealtheVetCoordinator',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/myHealtheVetCoordinator',
            },
            {
              name: 'Nutrition, food, and dietary care',
              serviceId: 'nutrition',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/nutrition',
            },
            {
              name: 'Optometry',
              serviceId: 'optometry',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/optometry',
            },
            {
              name: 'Patient advocates',
              serviceId: 'patientAdvocates',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/patientAdvocates',
            },
            {
              name: 'Physical medicine and rehabilitation',
              serviceId: 'physicalMedicine',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/physicalMedicine',
            },
            {
              name: 'Physical therapy, occupational therapy and kinesiotherapy',
              serviceId: 'physicalTherapy',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/physicalTherapy',
            },
            {
              name: 'Podiatry',
              serviceId: 'podiatry',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/podiatry',
            },
            {
              name: 'Primary care',
              serviceId: 'primaryCare',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/primaryCare',
            },
            {
              name: 'Radiology',
              serviceId: 'radiology',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/radiology',
            },
            {
              name: 'Recreation and creative arts therapy',
              serviceId: 'recreationTherapy',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/recreationTherapy',
            },
            {
              name: 'Registry exams',
              serviceId: 'registryExams',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/registryExams',
            },
            {
              name: 'Rehabilitation and extended care',
              serviceId: 'rehabilitation',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/rehabilitation',
            },
            {
              name: 'Smoking and tobacco cessation',
              serviceId: 'smoking',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/smoking',
            },
            {
              name: 'Social work',
              serviceId: 'socialWork',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/socialWork',
            },
            {
              name: 'Suicide prevention',
              serviceId: 'suicidePrevention',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/suicidePrevention',
            },
            {
              name: 'Returning service member care',
              serviceId: 'transitionCounseling',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/transitionCounseling',
            },
            {
              name: 'Travel reimbursement',
              serviceId: 'travelReimbursement',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/travelReimbursement',
            },
            {
              name: 'Blind and low vision rehabilitation',
              serviceId: 'vision',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/vision',
            },
            {
              name: 'Women Veteran care',
              serviceId: 'womensHealth',
              link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services/womensHealth',
            },
          ],
          link: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities/vha_512GD/services',
          lastUpdated: '2023-10-15',
        },
        satisfaction: {
          health: {
            primaryCareUrgent: 0.7599999904632568,
            primaryCareRoutine: 0.8299999833106995,
          },
          effectiveDate: '2022-06-28',
        },
        mobile: false,
        operatingStatus: {
          code: 'NORMAL',
          supplementalStatus: [
            {
              id: 'COVID_MEDIUM',
              label: 'COVID-19 health protection: Levels medium',
            },
          ],
        },
        visn: '5',
      },
    },
  ],
  links: {
    self: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities?zip=21201&page=1&per_page=10',
    first:
      'https://sandbox-api.va.gov/services/va_facilities/v1/facilities?zip=21201&page=1&per_page=10',
    last: 'https://sandbox-api.va.gov/services/va_facilities/v1/facilities?zip=21201&page=1&per_page=10',
  },
  meta: {
    pagination: {
      currentPage: 1,
      perPage: 10,
      totalPages: 1,
      totalEntries: 2,
    },
  },
};

export default mockLocations;
