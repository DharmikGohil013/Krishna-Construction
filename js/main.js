/* ===============================================
   Krishna Construction - Main JavaScript
   Enhanced functionality with animations
   =============================================== */

// Translation Data (Enhanced with new keys)
const translations = {
  en: {
    title: "Krishna Construction | Best Building Contractor in Surat",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_workers: "Team",
    nav_projects: "Projects",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    nav_quote: "Get Quote",
    lang_en: "English",
    lang_gu: "ગુજરાતી",
    lang_hi: "हिंदी",

    // Hero Section
    home_title: "Build Your Dream with Krishna Construction",
    home_subtitle: "25+ Years of Excellence in Construction Services",
    home_cta_quote: "Get Free Quote",
    home_cta_projects: "View Projects",
    home_cta_call: "Call Now",

    // Stats Section
    stat_years: "Years Experience",
    stat_projects: "Projects Completed",
    stat_satisfaction: "Client Satisfaction",
    stat_team: "Team Members",

    // About Section
    about_label: "About Us",
    about_title: "Building Dreams, Creating Legacies",
    about_text: "Established in 1995, Krishna Construction has been the trusted name in construction for Surat and surrounding areas. We specialize in delivering innovative, high-quality projects for residential and commercial clients, with an unwavering commitment to precision, safety, and client satisfaction.",
    about_badge: "Trusted Since 1995",
    about_feature1_title: "Quality Assurance",
    about_feature1_desc: "ISO certified processes and premium materials",
    about_feature2_title: "Timely Delivery",
    about_feature2_desc: "98% on-time project completion rate",
    about_feature3_title: "Expert Team",
    about_feature3_desc: "Skilled professionals with decades of experience",
    about_cta: "Start Your Project",

    // Services Section
    services_label: "What We Do",
    services_title: "Comprehensive Construction Services",
    services_subtitle: "From foundation to finishing, we handle every aspect of your construction project",
    service_rcc_title: "RCC Construction",
    service_rcc_text: "Expert reinforced concrete construction for durable, earthquake-resistant structures",
    service_waterproofing_title: "Waterproofing Solutions",
    service_waterproofing_text: "Complete waterproofing for roofs, bathrooms, and foundations with 10-year warranty",
    service_tiling_title: "Premium Tiling",
    service_tiling_text: "Expert installation of vitrified, ceramic, granite, and marble tiles",
    service_renovation_title: "Complete Renovation",
    service_renovation_text: "Transform your existing space with our comprehensive renovation services",
    service_learn_more: "Learn More",
    service_core_title: "Core Construction Work",
    service_plumbing_title: "Plumbing Services",
    service_electrical_title: "Electrical Work",
    service_interior_title: "Interior Finishing",
    services_cta_text: "Looking for a specific service?",
    services_cta_button: "Get Custom Quote",

    // Individual Services
    service_rcc: "RCC Work",
    service_rcc_desc: "Reinforced concrete for durable structures",
    service_tiles: "Tiles",
    service_tiles_desc: "Expert tile installation",
    service_site_clearing: "Site Clearing & Marking",
    service_site_clearing_desc: "Precise site preparation",
    service_pcc: "PCC (Plain Cement Concrete)",
    service_pcc_desc: "Strong base layers",
    service_footing: "Footing Work",
    service_footing_desc: "Robust footings",
    service_rcc_foundation: "RCC Foundation & Plinth Beam",
    service_rcc_foundation_desc: "Reinforced foundations",
    service_rcc_columns: "RCC Columns",
    service_rcc_columns_desc: "Strong columns",
    service_masonry: "Brick/Block Masonry",
    service_masonry_desc: "Precision masonry",
    service_rcc_slabs: "RCC Slabs (Roof Casting)",
    service_rcc_slabs_desc: "Durable roof slabs",
    service_staircase: "Staircase Construction",
    service_staircase_desc: "Custom staircases",
    service_underground_plumbing: "Underground Plumbing",
    service_underground_plumbing_desc: "Water and sewage lines",
    service_internal_plumbing: "Internal Plumbing",
    service_internal_plumbing_desc: "Bathroom and kitchen plumbing",
    service_water_tank: "Water Tank Setup",
    service_water_tank_desc: "Tank installations",
    service_conduits: "Conduits & Wiring",
    service_conduits_desc: "Safe electrical wiring",
    service_switchboards: "Switchboards & DB",
    service_switchboards_desc: "Electrical board installation",
    service_earthing: "Earthing & Lightning Protection",
    service_earthing_desc: "Safety systems",
    service_false_ceiling: "False Ceiling",
    service_false_ceiling_desc: "Modern false ceilings",
    service_modular_kitchen: "Modular Kitchen",
    service_modular_kitchen_desc: "Custom kitchen designs",
    service_wardrobes: "Wardrobes",
    service_wardrobes_desc: "Wardrobe solutions",

    // Team Section
    workers_label: "Our Team",
    workers_title: "Meet Our Skilled Professionals",
    workers_subtitle: "Experienced team members dedicated to excellence",
    worker_1_name: "Ghanshyambhai Gohil",
    worker_1_role: "Construction Specialist",
    worker_1_details: "Expert in structural framing and concrete work, ensuring strong building foundations.",
    worker_2_name: "Vitthalbhai Gohil",
    worker_2_role: "Site Supervisor",
    worker_2_details: "Specialized in site supervision and material management with 12+ years of experience.",
    worker_3_name: "Jentibhai Chandigra",
    worker_3_role: "Finishing Expert",
    worker_3_details: "Known for precision in finishing work and interior construction excellence.",
    worker_4_name: "Ajay Chandigra",
    worker_4_role: "Construction Worker",
    worker_4_details: "Reliable and skilled in general labor and equipment handling on-site.",

    // Testimonials Section
    testimonials_label: "Client Reviews",
    testimonials_title: "What Our Clients Say",
    testimonials_subtitle: "Real feedback from satisfied clients",
    testimonials_view_all: "View All Reviews",

    // CTA Banner
    cta_title: "Ready to Start Your Project?",
    cta_text: "Get a free consultation and quote for your construction project today",
    cta_quote: "Get Free Quote",
    cta_call: "+91 99794 56744",

    // Contact Section
    contact_label: "Get In Touch",
    contact_title: "Contact Us",
    contact_subtitle: "Have a question? We'd love to hear from you",
    form_name_label: "Your Name",
    form_name: "John Doe",
    form_email_label: "Your Email",
    form_email: "john@example.com",
    form_phone_label: "Your Phone",
    form_phone: "+91 98765 43210",
    form_message_label: "Your Message",
    form_message: "Tell us about your project...",
    form_submit: "Send Message",
    contact_info_title: "Contact Information",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    contact_location_label: "Location",
    contact_location: "Surat, Gujarat, India",
    contact_hours_label: "Working Hours",
    contact_hours: "Mon - Sat: 9:00 AM - 6:00 PM",

    // Footer
    footer_about: "Building excellence since 1995. Your trusted partner for all construction needs in Surat and beyond.",
    footer_quick_links: "Quick Links",
    footer_services: "Services",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",

    // Loader
    loader_text: "Building Your Future..."
  },

  gu: {
    title: "કૃષ્ણા કન્સ્ટ્રક્શન | સુરતમાં પ્રીમિયર બિલ્ડિંગ સેવાઓ",
    nav_home: "હોમ",
    nav_about: "અમારા વિશે",
    nav_services: "સેવાઓ",
    nav_workers: "ટીમ",
    nav_projects: "પ્રોજેક્ટ્સ",
    nav_testimonials: "પ્રશંસાપત્રો",
    nav_contact: "સંપર્ક",
    nav_quote: "ક્વોટ મેળવો",
    lang_en: "English",
    lang_gu: "ગુજરાતી",
    lang_hi: "हिंदी",

    home_title: "કૃષ્ણા કન્સ્ટ્રક્શન સાથે તમારું સપનું બનાવો",
    home_subtitle: "બાંધકામ સેવાઓમાં 25+ વર્ષની ઉત્કૃષ્ટતા",
    home_cta_quote: "મફત ક્વોટ મેળવો",
    home_cta_projects: "પ્રોજેક્ટ્સ જુઓ",
    home_cta_call: "હમણાં કૉલ કરો",

    stat_years: "વર્ષનો અનુભવ",
    stat_projects: "પૂર્ણ થયેલ પ્રોજેક્ટ્સ",
    stat_satisfaction: "ગ્રાહક સંતોષ",
    stat_team: "ટીમ સભ્યો",

    about_label: "અમારા વિશે",
    about_title: "સપના બનાવવા, વારસો સર્જવો",
    about_text: "1995માં સ્થપાયેલ, કૃષ્ણા કન્સ્ટ્રક્શન સુરત અને આસપાસના વિસ્તારો માટે બાંધકામમાં વિશ્વસનીય નામ છે.",
    about_badge: "1995 થી વિશ્વસનીય",
    about_feature1_title: "ગુણવત્તા ખાતરી",
    about_feature1_desc: "ISO પ્રમાણિત પ્રક્રિયાઓ અને પ્રીમિયમ સામગ્રી",
    about_feature2_title: "સમયસર ડિલિવરી",
    about_feature2_desc: "98% સમયસર પ્રોજેક્ટ પૂર્ણતા દર",
    about_feature3_title: "નિષ્ણાત ટીમ",
    about_feature3_desc: "દાયકાઓના અનુભવ સાથે કુશળ વ્યાવસાયિકો",
    about_cta: "તમારો પ્રોજેક્ટ શરૂ કરો",

    services_label: "અમે શું કરીએ છીએ",
    services_title: "વ્યાપક બાંધકામ સેવાઓ",
    services_subtitle: "ફાઉન્ડેશનથી ફિનિશિંગ સુધી, અમે તમારા બાંધકામ પ્રોજેક્ટના દરેક પાસાને સંભાળીએ છીએ",
    service_rcc_title: "RCC બાંધકામ",
    service_rcc_text: "ટકાઉ, ભૂકંપ-પ્રતિરોધક માળખાં માટે નિષ્ણાત રિઇનફોર્સ્ડ કોંક્રીટ બાંધકામ",
    service_waterproofing_title: "વોટરપ્રૂફિંગ સોલ્યુશન્સ",
    service_waterproofing_text: "10 વર્ષની વોરંટી સાથે છત, બાથરૂમ અને ફાઉન્ડેશન માટે સંપૂર્ણ વોટરપ્રૂફિંગ",
    service_tiling_title: "પ્રીમિયમ ટાઇલિંગ",
    service_tiling_text: "વિટ્રિફાઇડ, સિરામિક, ગ્રેનાઇટ અને માર્બલ ટાઇલ્સનું નિષ્ણાત ઇન્સ્ટોલેશન",
    service_renovation_title: "સંપૂર્ણ નવીનીકરણ",
    service_renovation_text: "અમારી વ્યાપક નવીનીકરણ સેવાઓ સાથે તમારી હાલની જગ્યાને રૂપાંતરિત કરો",
    service_learn_more: "વધુ જાણો",

    workers_label: "અમારી ટીમ",
    workers_title: "અમારા કુશળ વ્યાવસાયિકોને મળો",
    workers_subtitle: "ઉત્કૃષ્ટતા માટે સમર્પિત અનુભવી ટીમ સભ્યો",

    testimonials_label: "ગ્રાહક સમીક્ષાઓ",
    testimonials_title: "અમારા ગ્રાહકો શું કહે છે",
    testimonials_subtitle: "સંતુષ્ટ ગ્રાહકોનો વાસ્તવિક પ્રતિસાદ",
    testimonials_view_all: "બધી સમીક્ષાઓ જુઓ",

    cta_title: "તમારો પ્રોજેક્ટ શરૂ કરવા તૈયાર છો?",
    cta_text: "આજે તમારા બાંધકામ પ્રોજેક્ટ માટે મફત પરામર્શ અને ક્વોટ મેળવો",
    cta_quote: "મફત ક્વોટ મેળવો",
    cta_call: "+91 99794 56744",

    contact_label: "સંપર્કમાં રહો",
    contact_title: "અમારો સંપર્ક કરો",
    contact_subtitle: "કોઈ પ્રશ્ન છે? અમે તમારી પાસેથી સાંભળવા માટે ઉત્સુક છીએ",
    form_name_label: "તમારું નામ",
    form_name: "જ્હોન ડો",
    form_email_label: "તમારું ઇમેઇલ",
    form_email: "john@example.com",
    form_phone_label: "તમારો ફોન",
    form_phone: "+91 98765 43210",
    form_message_label: "તમારો સંદેશ",
    form_message: "તમારા પ્રોજેક્ટ વિશે અમને જણાવો...",
    form_submit: "સંદેશ મોકલો",

    contact_location: "સુરત, ગુજરાત, ભારત",
    contact_hours: "સોમ - શનિ: સવારે 9:00 - સાંજે 6:00",

    footer_about: "1995 થી ઉત્કૃષ્ટતા બનાવી રહ્યા છીએ. સુરત અને તેનાથી આગળ તમામ બાંધકામ જરૂરિયાતો માટે તમારા વિશ્વસનીય ભાગીદાર.",
    footer_quick_links: "ઝડપી લિંક્સ",
    footer_services: "સેવાઓ",
    footer_contact: "સંપર્ક",
    footer_rights: "સર્વાધિકાર સુરક્ષિત.",
    footer_privacy: "ગોપનીયતા નીતિ",
    footer_terms: "સેવાની શરતો",

    loader_text: "તમારું ભવિષ્ય બનાવી રહ્યા છીએ..."
  },

  hi: {
    title: "कृष्णा कंस्ट्रक्शन | सूरत में प्रीमियर बिल्डिंग सेवाएँ",
    nav_home: "होम",
    nav_about: "हमारे बारे में",
    nav_services: "सेवाएँ",
    nav_workers: "टीम",
    nav_projects: "प्रोजेक्ट्स",
    nav_testimonials: "प्रशंसापत्र",
    nav_contact: "संपर्क",
    nav_quote: "कोट प्राप्त करें",
    lang_en: "English",
    lang_gu: "ગુજરાતી",
    lang_hi: "हिंदी",

    home_title: "कृष्णा कंस्ट्रक्शन के साथ अपना सपना बनाएँ",
    home_subtitle: "निर्माण सेवाओं में 25+ वर्षों की उत्कृष्टता",
    home_cta_quote: "मुफ्त कोट प्राप्त करें",
    home_cta_projects: "प्रोजेक्ट्स देखें",
    home_cta_call: "अभी कॉल करें",

    stat_years: "वर्ष अनुभव",
    stat_projects: "पूर्ण परियोजनाएं",
    stat_satisfaction: "ग्राहक संतुष्टि",
    stat_team: "टीम सदस्य",

    about_label: "हमारे बारे में",
    about_title: "सपने बनाना, विरासत बनाना",
    about_text: "1995 में स्थापित, कृष्णा कंस्ट्रक्शन सूरत और आसपास के क्षेत्रों के लिए निर्माण में विश्वसनीय नाम रहा है।",
    about_badge: "1995 से विश्वसनीय",
    about_feature1_title: "गुणवत्ता आश्वासन",
    about_feature1_desc: "ISO प्रमाणित प्रक्रियाएं और प्रीमियम सामग्री",
    about_feature2_title: "समय पर डिलीवरी",
    about_feature2_desc: "98% समय पर परियोजना पूर्णता दर",
    about_feature3_title: "विशेषज्ञ टीम",
    about_feature3_desc: "दशकों के अनुभव के साथ कुशल पेशेवर",
    about_cta: "अपनी परियोजना शुरू करें",

    services_label: "हम क्या करते हैं",
    services_title: "व्यापक निर्माण सेवाएँ",
    services_subtitle: "नींव से फिनिशिंग तक, हम आपकी निर्माण परियोजना के हर पहलू को संभालते हैं",
    service_rcc_title: "RCC निर्माण",
    service_rcc_text: "टिकाऊ, भूकंप-प्रतिरोधी संरचनाओं के लिए विशेषज्ञ प्रबलित कंक्रीट निर्माण",
    service_waterproofing_title: "वॉटरप्रूफिंग समाधान",
    service_waterproofing_text: "10 साल की वारंटी के साथ छत, बाथरूम और नींव के लिए पूर्ण वॉटरप्रूफिंग",
    service_tiling_title: "प्रीमियम टाइलिंग",
    service_tiling_text: "विट्रिफाइड, सिरेमिक, ग्रेनाइट और मार्बल टाइल्स की विशेषज्ञ स्थापना",
    service_renovation_title: "पूर्ण नवीनीकरण",
    service_renovation_text: "हमारी व्यापक नवीनीकरण सेवाओं के साथ अपने मौजूदा स्थान को बदलें",
    service_learn_more: "और जानें",

    workers_label: "हमारी टीम",
    workers_title: "हमारे कुशल पेशेवरों से मिलें",
    workers_subtitle: "उत्कृष्टता के लिए समर्पित अनुभवी टीम सदस्य",

    testimonials_label: "ग्राहक समीक्षा",
    testimonials_title: "हमारे ग्राहक क्या कहते हैं",
    testimonials_subtitle: "संतुष्ट ग्राहकों से वास्तविक प्रतिक्रिया",
    testimonials_view_all: "सभी समीक्षाएं देखें",

    cta_title: "अपनी परियोजना शुरू करने के लिए तैयार हैं?",
    cta_text: "आज ही अपनी निर्माण परियोजना के लिए मुफ्त परामर्श और कोट प्राप्त करें",
    cta_quote: "मुफ्त कोट प्राप्त करें",
    cta_call: "+91 99794 56744",

    contact_label: "संपर्क में रहें",
    contact_title: "हमसे संपर्क करें",
    contact_subtitle: "कोई प्रश्न है? हम आपसे सुनना पसंद करेंगे",
    form_name_label: "आपका नाम",
    form_name: "जॉन डो",
    form_email_label: "आपका ईमेल",
    form_email: "john@example.com",
    form_phone_label: "आपका फोन",
    form_phone: "+91 98765 43210",
    form_message_label: "आपका संदेश",
    form_message: "हमें अपनी परियोजना के बारे में बताएं...",
    form_submit: "संदेश भेजें",

    contact_location: "सूरत, गुजरात, भारत",
    contact_hours: "सोम - शनि: सुबह 9:00 - शाम 6:00",

    footer_about: "1995 से उत्कृष्टता का निर्माण। सूरत और उससे आगे सभी निर्माण आवश्यकताओं के लिए आपका विश्वसनीय साझेदार।",
    footer_quick_links: "त्वरित लिंक",
    footer_services: "सेवाएँ",
    footer_contact: "संपर्क",
    footer_rights: "सर्वाधिकार सुरक्षित।",
    footer_privacy: "गोपनीयता नीति",
    footer_terms: "सेवा की शर्तें",

    loader_text: "आपका भविष्य बना रहे हैं..."
  }
};

/* ===============================================
   Language Switching
   =============================================== */
function changeLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(elem => {
    const key = elem.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      elem.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
    const key = elem.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      elem.placeholder = translations[lang][key];
    }
  });

  document.title = translations[lang].title;

  // Update font based on language
  document.body.style.fontFamily = lang === 'gu' ? "'Noto Sans Gujarati', 'Roboto', sans-serif" :
                                  lang === 'hi' ? "'Noto Sans Devanagari', 'Roboto', sans-serif" :
                                  "'Roboto', 'Noto Sans Gujarati', 'Noto Sans Devanagari', sans-serif";

  // Save selected language
  localStorage.setItem('language', lang);
}

/* ===============================================
   Navigation Functions
   =============================================== */
// Hamburger Menu Toggle
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger i');

  navLinks.classList.toggle('active');
  hamburger.classList.toggle('fa-bars');
  hamburger.classList.toggle('fa-times');
}

// Sticky Navigation
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) {
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
});

/* ===============================================
   Statistics Counter Animation
   =============================================== */
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 16);
}

// Intersection Observer for Stats
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statNumbers = entry.target.querySelectorAll('.stat-number');
      statNumbers.forEach(num => {
        const target = parseInt(num.dataset.count);
        animateCounter(num, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe stats section
document.addEventListener('DOMContentLoaded', () => {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }
});

/* ===============================================
   Services Accordion
   =============================================== */
function initAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');

      // Close all accordion items
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        accordionItem.classList.add('active');
      }
    });
  });
}

/* ===============================================
   Back to Top Button
   =============================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  const progressCircle = document.querySelector('.progress-ring-circle');
  const circumference = 2 * Math.PI * 22;

  if (progressCircle) {
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight);

    if (backToTopBtn) {
      if (scrollTop > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }

    if (progressCircle) {
      const offset = circumference - (scrollPercentage * circumference);
      progressCircle.style.strokeDashoffset = offset;
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/* ===============================================
   Smooth Scrolling for Anchor Links
   =============================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');

      // Don't prevent default for empty hash or just "#"
      if (href === '#' || href === '') {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = target.offsetTop - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navLinks = document.querySelector('.nav-links');
        if (navLinks && navLinks.classList.contains('active')) {
          toggleMenu();
        }
      }
    });
  });
}

/* ===============================================
   Form Validation
   =============================================== */
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\+\-\(\)]+$/;
  return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/* ===============================================
   Lazy Loading Images
   =============================================== */
function initLazyLoading() {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/* ===============================================
   Initialize All Functions
   =============================================== */
document.addEventListener('DOMContentLoaded', () => {
  // Language initialization
  const savedLang = localStorage.getItem('language') || 'en';
  const langSelector = document.getElementById('language');
  if (langSelector) {
    langSelector.value = savedLang;
    changeLanguage(savedLang);

    langSelector.addEventListener('change', (e) => {
      changeLanguage(e.target.value);
    });
  }

  // Initialize components
  initAccordion();
  initBackToTop();
  initSmoothScroll();
  initLazyLoading();

  // Close mobile menu when clicking nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (navLinks && navLinks.classList.contains('active')) {
      if (!nav.contains(e.target)) {
        toggleMenu();
      }
    }
  });
});

/* ===============================================
   Export functions for use in other files
   =============================================== */
window.KrishnaConstruction = {
  changeLanguage,
  toggleMenu,
  validateEmail,
  validatePhone
};