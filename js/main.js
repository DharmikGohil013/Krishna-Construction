// Translation Data
const translations = {
    en: {
      title: "Krishna Construction | Premier Building Services",
      top_notice: "Serving Surat Areas Only",
      nav_home: "Home",
      nav_about: "About",
      nav_workers: "Workers",
      nav_experience: "Experience",
      nav_contact: "Contact",
      lang_en: "English",
      lang_gu: "Gujarati",
      lang_hi: "Hindi",
      home_title: "Build Your Future with BuildRiser Construction",
      home_subtitle: "Premier Construction Services",
      home_cta: "Get a Quote",
      about_title: "About Us",
      about_text: "Established in 1995, BuildRiser Construction is the trusted name in construction for Surat areas. We specialize in delivering innovative, high-quality projects for residential and commercial clients, with a commitment to precision, safety, and client satisfaction.",
      
  workers_title: "Our Skilled Team",
  worker_1_name: "Ghanshyambhai Gohil",
  worker_1_role: "Construction Worker",
  worker_1_details: "Expert in structural framing and concrete work, ensuring strong building foundations.",
  
  worker_2_name: "Vitthalbhai Gohil",
  worker_2_role: "Construction Worker",
  worker_2_details: "Specialized in site supervision and material management with 12+ years of experience.",
  
  worker_3_name: "Jentibhai Chandigra",
  worker_3_role: "Construction Worker",
  worker_3_details: "Known for precision in finishing work and interior construction excellence.",
  
  worker_4_name: "Ajay Chandigra",
  worker_4_role: "Construction Worker",
  worker_4_details: "Reliable and skilled in general labor and equipment handling on-site.",

      experience_title: "Our Services",
      service_core_title: "Core Construction Work",
      service_rcc: "RCC Work",
      service_rcc_desc: "Reinforced concrete for durable structures.",
      service_tiles: "Tiles",
      service_tiles_desc: "Expert tile installation for floors and walls.",
      service_site_clearing: "Site Clearing & Marking",
      service_site_clearing_desc: "Precise site preparation for construction.",
      service_pcc: "PCC (Plain Cement Concrete)",
      service_pcc_desc: "Strong base layers for stability.",
      service_footing: "Footing Work",
      service_footing_desc: "Robust footings for structural integrity.",
      service_rcc_foundation: "RCC Foundation & Plinth Beam",
      service_rcc_foundation_desc: "Reinforced foundations for support.",
      service_rcc_columns: "RCC Columns",
      service_rcc_columns_desc: "Strong columns for vertical strength.",
      service_masonry: "Brick/Block Masonry",
      service_masonry_desc: "Precision masonry for walls and structures.",
      service_rcc_slabs: "RCC Slabs (Roof Casting)",
      service_rcc_slabs_desc: "Durable roof slabs for buildings.",
      service_staircase: "Staircase Construction",
      service_staircase_desc: "Custom staircases for safety and design.",
      service_wall_construction: "Brick/Block Wall Construction",
      service_wall_construction_desc: "Internal and external walls with precision.",
      service_lintel: "Lintel & Chajja Casting",
      service_lintel_desc: "Concrete lintels and sunshades for support.",
      service_curing: "Curing",
      service_curing_desc: "Proper curing for concrete strength.",
      service_foundation_waterproofing: "Foundation Waterproofing",
      service_foundation_waterproofing_desc: "Protecting foundations from water damage.",
      service_roof_waterproofing: "Roof Slab Waterproofing",
      service_roof_waterproofing_desc: "Leak-proof roof slabs.",
      service_bathroom_waterproofing: "Bathroom & Kitchen Waterproofing",
      service_bathroom_waterproofing_desc: "Waterproofing for wet areas.",
      service_tank_waterproofing: "Water Tank Waterproofing",
      service_tank_waterproofing_desc: "Leak-proof water storage solutions.",
      service_professional_title: "Professional Work",
      service_floor_tiles: "Floor Tile Laying",
      service_floor_tiles_desc: "Vitrified, ceramic, granite, or marble tiles.",
      service_staircase_tiles: "Staircase Tiles/Granite",
      service_staircase_tiles_desc: "Stylish staircase finishes.",
      service_skirting: "Skirting Work",
      service_skirting_desc: "Neat skirting for floor-wall transitions.",
      service_extra_title: "Extra Work",
      service_underground_plumbing: "Underground Plumbing",
      service_underground_plumbing_desc: "Water and sewage line installations.",
      service_internal_plumbing: "Internal Plumbing",
      service_internal_plumbing_desc: "Plumbing for bathrooms and kitchens.",
      service_water_tank: "Water Tank Setup",
      service_water_tank_desc: "Overhead or underground tank installations.",
      service_sump_borewell: "Water Sump/Borewell Connection",
      service_sump_borewell_desc: "Efficient water supply connections.",
      service_electrical_title: "Electrical Work",
      service_conduits: "Conduits & Wiring",
      service_conduits_desc: "Safe and efficient electrical wiring.",
      service_switchboards: "Switchboards & DB",
      service_switchboards_desc: "Installation of switchboards and distribution boards.",
      service_earthing: "Earthing & Lightning Protection",
      service_earthing_desc: "Safety systems for electrical protection.",
      service_electrical_points: "Light, Fan, AC Point Installation",
      service_electrical_points_desc: "Complete electrical point setups.",
      service_interior_title: "Interior Finishing (Optional)",
      service_false_ceiling: "False Ceiling",
      service_false_ceiling_desc: "Modern false ceilings for aesthetics.",
      service_modular_kitchen: "Modular Kitchen",
      service_modular_kitchen_desc: "Custom modular kitchen designs.",
      service_wardrobes: "Wardrobes",
      service_wardrobes_desc: "Functional and stylish wardrobe solutions.",
      service_wall_cladding: "Wall Cladding",
      service_wall_cladding_desc: "Decorative wall cladding for interiors.",
      service_interior_tiling: "Interior Tiling/Wallpapers",
      service_interior_tiling_desc: "Stylish tiling and wallpaper installations.",
      service_sanitary_title: "Sanitary Fittings",
      service_washbasins: "Washbasins, Water Closets",
      service_washbasins_desc: "High-quality sanitary installations.",
      service_kitchen_sink: "Kitchen Sink",
      service_kitchen_sink_desc: "Durable kitchen sink setups.",
      service_shower_taps: "Bathroom Shower & Taps",
      service_shower_taps_desc: "Modern shower and tap fittings.",
      service_geyser: "Geyser, Mixer Taps",
      service_geyser_desc: "Efficient geyser and mixer installations.",
      service_final_title: "Final Touchups & Handover",
      service_cleaning: "Cleaning",
      service_cleaning_desc: "Thorough site cleaning post-construction.",
      service_inspection: "Final Inspection",
      service_inspection_desc: "Comprehensive quality checks.",
      service_rectifications: "Rectifications",
      service_rectifications_desc: "Addressing any snag list items.",
      service_handover: "Handover to Owner",
      service_handover_desc: "Seamless project handover.",
      contact_title: "Contact Us",
      form_name: "Your Name",
      form_email: "Your Email",
      form_phone: "Your Phone",
      form_message: "Your Message",
      form_submit: "Submit",
      contact_phone: "123-456-7890",
      contact_email: "info@buildriser.com",
      contact_address: "123 Construction Lane, Surat"
    },
    gu: {
      title: "બિલ્ડરાઇઝર કન્સ્ટ્રક્શન | પ્રીમિયર બિલ્ડિંગ સેવાઓ",
      top_notice: "ફક્ત સુરત વિસ્તારો માટે સેવા",
      nav_home: "હોમ",
      nav_about: "અમારા વિશે",
      nav_workers: "કામદારો",
      nav_experience: "અનુભવ",
      nav_contact: "સંપર્ક",
      lang_en: "અંગ્રેજી",
      lang_gu: "ગુજરાતી",
      lang_hi: "હિન્દી",
      home_title: "બિલ્ડરાઇઝર કન્સ્ટ્રક્શન સાથે તમારું ભવિષ્ય બનાવો",
      home_subtitle: "પ્રીમિયર બાંધકામ સેવાઓ",
      home_cta: "ક્વોટ મેળવો",
      about_title: "અમારા વિશે",
      about_text: "1995માં સ્થપાયેલ, બિલ્ડરાઇઝર કન્સ્ટ્રક્શન સુરતના વિસ્તારો માટે બાંધકામમાં વિશ્વસનીય નામ છે. અમે નવીન, ઉચ્ચ-ગુણવત્તાયુક્ત પ્રોજેક્ટ્સ પહોંચાડવામાં નિષ્ણાત છીએ, જેમાં ચોકસાઈ, સલામતી અને ગ્રાહક સંતોષ પ્રત્યે પ્રતિબદ્ધતા છે.",
      workers_title: "અમારી કુશળ ટીમ",
      
      experience_title: "અમારી સેવાઓ",
      service_core_title: "મૂળ બાંધકામ કાર્ય",
      service_rcc: "આરસીસી કાર્ય",
      service_rcc_desc: "ટકાઉ બાંધકામ માટે રિઇનફોર્સ્ડ કોંક્રીટ.",
      service_tiles: "ટાઇલ્સ",
      service_tiles_desc: "ફ્લોર અને દિવાલો માટે નિષ્ણાત ટાઇલ ઇન્સ્ટોલેશન.",
      service_site_clearing: "સાઇટ ક્લિયરિંગ અને માર્કિંગ",
      service_site_clearing_desc: "બાંધકામ માટે ચોક્કસ સાઇટ તૈયારી.",
      service_pcc: "પીસીસી (પ્લેન સિમેન્ટ કોંક્રીટ)",
      service_pcc_desc: "સ્થિરતા માટે મજબૂત આધાર સ્તર.",
      service_footing: "ફૂટિંગ કાર્ય",
      service_footing_desc: "બાંધકામની અખંડિતતા માટે મજબૂત ફૂટિંગ.",
      service_rcc_foundation: "આરસીસી ફાઉન્ડેશન અને પ્લિન્થ બીમ",
      service_rcc_foundation_desc: "આધાર માટે રિઇનફોર્સ્ડ ફાઉન્ડેશન.",
      service_rcc_columns: "આરસીસી કોલમ",
      service_rcc_columns_desc: "ઊભી શક્તિ માટે મજબૂત કોલમ.",
      service_masonry: "ઇંટ/બ્લોક મેસનરી",
      service_masonry_desc: "દિવાલો અને બાંધકામ માટે ચોકસાઈવાળી મેસનરી.",
      service_rcc_slabs: "આરસીસી સ્લેબ (રૂફ કાસ્ટિંગ)",
      service_rcc_slabs_desc: "ઇમારતો માટે ટકાઉ રૂફ સ્લેબ.",
      service_staircase: "સીડી બાંધકામ",
      service_staircase_desc: "સલામતી અને ડિઝાઇન માટે કસ્ટમ સીડી.",
      service_wall_construction: "ઇંટ/બ્લોક દિવાલ બાંધકામ",
      service_wall_construction_desc: "ચોકસાઈ સાથે આંતરિક અને બાહ્ય દિવાલો.",
      service_lintel: "લિન્ટેલ અને ચજ્જા કાસ્ટિંગ",
      service_lintel_desc: "આધાર માટે કોંક્રીટ લિન્ટેલ અને સનશેડ.",
      service_curing: "ક્યોરિંગ",
      service_curing_desc: "કોંક્રીટની શક્તિ માટે યોગ્ય ક્યોરિંગ.",
      service_foundation_waterproofing: "ફાઉન્ડેશન વોટરપ્રૂફિંગ",
      service_foundation_waterproofing_desc: "પાણીના નુકસાનથી ફાઉન્ડેશનનું રક્ષણ.",
      service_roof_waterproofing: "રૂફ સ્લેબ વોટરપ્રૂફિંગ",
      service_roof_waterproofing_desc: "લીક-પ્રૂફ રૂફ સ્લેબ.",
      service_bathroom_waterproofing: "બાથરૂમ અને કિચન વોટરપ્રૂફિંગ",
      service_bathroom_waterproofing_desc: "ભીના વિસ્તારો માટે વોટરપ્રૂફિંગ.",
      service_tank_waterproofing: "વોટર ટેન્ક વોટરપ્રૂફિંગ",
      service_tank_waterproofing_desc: "લીક-પ્રૂફ પાણી સંગ્રહ સોલ્યુશન્સ.",
      service_professional_title: "વ્યાવસાયિક કાર્ય",
      service_floor_tiles: "ફ્લોર ટાઇલ લેવલિંગ",
      service_floor_tiles_desc: "વિટ્રિફાઇડ, સિરામિક, ગ્રેનાઇટ અથવા માર્બલ ટાઇલ્સ.",
      service_staircase_tiles: "સીડી ટાઇલ્સ/ગ્રેનાઇટ",
      service_staircase_tiles_desc: "આકર્ષક સીડી ફિનિશિંગ.",
      service_skirting: "સ્કર્ટિંગ કાર્ય",
      service_skirting_desc: "ફ્લોર-વોલ ટ્રાન્ઝિશન માટે નીટ સ્કર્ટિંગ.",
      service_extra_title: "વધારાનું કાર્ય",
      service_underground_plumbing: "અંડરગ્રાઉન્ડ પ્લમ્બિંગ",
      service_underground_plumbing_desc: "પાણી અને ગટર લાઇન ઇન્સ્ટોલેશન.",
      service_internal_plumbing: "આંતરિક પ્લમ્બિંગ",
      service_internal_plumbing_desc: "બાથરૂમ અને કિચન માટે પ્લમ્બિંગ.",
      service_water_tank: "વોટર ટેન્ક સેટઅપ",
      service_water_tank_desc: "ઓવરહેડ અથવા અંડરગ્રાઉન્ડ ટેન્ક ઇન્સ્ટોલેશન.",
      service_sump_borewell: "વોટર સમ્પ/બોરવેલ કનેક્શન",
      service_sump_borewell_desc: "કાર્યક્ષમ પાણી પુરવઠા જોડાણ.",
      service_electrical_title: "ઇલેક્ટ્રિકલ કાર્ય",
      service_conduits: "કંડ્યુઇટ્સ અને વાયરિંગ",
      service_conduits_desc: "સલામત અને કાર્યક્ષમ ઇલેક્ટ્રિકલ વાયરિંગ.",
      service_switchboards: "સ્વિચબોર્ડ્સ અને ડીબી",
      service_switchboards_desc: "સ્વિચબોર્ડ્સ અને ડિસ્ટ્રિબ્યુશન બોર્ડ્સનું ઇન્સ્ટોલેશન.",
      service_earthing: "અર્થિંગ અને લાઇટનિંગ પ્રોટેક્શન",
      service_earthing_desc: "ઇલેક્ટ્રિકલ રક્ષણ માટે સલામતી સિસ્ટમ્સ.",
      service_electrical_points: "લાઇટ, ફેન, એસી પોઇન્ટ ઇન્સ્ટોલેશન",
      service_electrical_points_desc: "સંપૂર્ણ ઇલેક્ટ્રિકલ પોઇન્ટ સેટઅપ.",
      service_interior_title: "આંતરિક ફિનિશિંગ (વૈકલ્પિક)",
      service_false_ceiling: "ફોલ્સ સીલિંગ",
      service_false_ceiling_desc: "સૌંદર્ય માટે આધુનિક ફોલ્સ સીલિંગ.",
      service_modular_kitchen: "મોડ્યુલર કિચન",
      service_modular_kitchen_desc: "કસ્ટમ મોડ્યુલર કિચન ડિઝાઇન.",
      service_wardrobes: "વોર્ડરોબ્સ",
      service_wardrobes_desc: "કાર્યક્ષમ અને આકર્ષક વોર્ડરોબ સોલ્યુશન્સ.",
      service_wall_cladding: "વોલ ક્લેડિંગ",
      service_wall_cladding_desc: "આંતરિક માટે ડેકોરેટિવ વોલ ક્લેડિંગ.",
      service_interior_tiling: "આંતરિક ટાઇલિંગ/વોલપેપર્સ",
      service_interior_tiling_desc: "આકર્ષક ટાઇલિંગ અને વોલપેપર ઇન્સ્ટોલેશન.",
      service_sanitary_title: "સેનિટરી ફિટિંગ્સ",
      service_washbasins: "વૉશબેસિન્સ, વૉટર ક્લોસેટ્સ",
      service_washbasins_desc: "ઉચ્ચ-ગુણવત્તાયુક્ત સેનિટરી ઇન્સ્ટોલેશન.",
      service_kitchen_sink: "કિચન સિંક",
      service_kitchen_sink_desc: "ટકાઉ કિચન સિંક સેટઅપ.",
      service_shower_taps: "બાથરૂમ શાવર અને ટેપ્સ",
      service_shower_taps_desc: "આધુનિક શાવર અને ટેપ ફિટિંગ્સ.",
      service_geyser: "ગીઝર, મિક્સર ટેપ્સ",
      service_geyser_desc: "કાર્યક્ષમ ગીઝર અને મિક્સર ઇન્સ્ટોલેશન.",
      service_final_title: "ફાઇનલ ટચઅપ્સ અને હેન્ડઓવર",
      service_cleaning: "સફાઈ",
      service_cleaning_desc: "બાંધકામ પછી સંપૂર્ણ સાઇટ સફાઈ.",
      service_inspection: "ફાઇનલ ઇન્સ્પેક્શન",
      service_inspection_desc: "વ્યાપક ગુણવત્તા તપાસ.",
      service_rectifications: "સુધારણા",
      service_rectifications_desc: "કોઈપણ સ્નેગ લિસ્ટ આઇટમ્સનું નિરાકરણ.",
      service_handover: "માલિકને હેન્ડઓવર",
      service_handover_desc: "સીમલેસ પ્રોજેક્ટ હેન્ડઓવર.",
      contact_title: "અમારો સંપર્ક કરો",
      form_name: "તમારું નામ",
      form_email: "તમારું ઇમેઇલ",
      form_phone: "તમારો ફોન",
      form_message: "તમારો સંદેશ",
      form_submit: "સબમિટ",
      contact_phone: "123-456-7890",
      contact_email: "info@buildriser.com",
      contact_address: "123 કન્સ્ટ્રક્શન લેન, સુરત"
    },
    hi: {
      title: "बिल्डराइज़र कंस्ट्रक्शन | प्रीमियर बिल्डिंग सेवाएँ",
      top_notice: "केवल सूरत क्षेत्रों के लिए सेवा",
      nav_home: "होम",
      nav_about: "हमारे बारे में",
      nav_workers: "कामगार",
      nav_experience: "अनुभव",
      nav_contact: "संपर्क",
      lang_en: "अंग्रेजी",
      lang_gu: "गुजराती",
      lang_hi: "हिंदी",
      home_title: "बिल्डराइज़र कंस्ट्रक्शन के साथ अपना भविष्य बनाएँ",
      home_subtitle: "प्रीमियर निर्माण सेवाएँ",
      home_cta: "कोट प्राप्त करें",
      about_title: "हमारे बारे में",
      about_text: "1995 में स्थापित, बिल्डराइज़र कंस्ट्रक्शन सूरत क्षेत्रों के लिए निर्माण में भरोसेमंद नाम है। हम आवासीय और वाणिज्यिक ग्राहकों के लिए नवीन, उच्च-गुणवत्ता वाले प्रोजेक्ट्स देने में विशेषज्ञ हैं, जो सटीकता, सुरक्षा और ग्राहक संतुष्टि के प्रति प्रतिबद्ध हैं।",
      workers_title: "हमारी कुशल टीम",
      
      experience_title: "हमारी सेवाएँ",
      service_core_title: "मूल निर्माण कार्य",
      service_rcc: "आरसीसी कार्य",
      service_rcc_desc: "टिकाऊ संरचनाओं के लिए प्रबलित कंक्रीट।",
      service_tiles: "टाइल्स",
      service_tiles_desc: "फर्श और दीवारों के लिए विशेषज्ञ टाइल इंस्टॉलेशन।",
      service_site_clearing: "साइट समाशोधन और मार्किंग",
      service_site_clearing_desc: "निर्माण के लिए सटीक साइट तैयारी।",
      service_pcc: "पीसीसी (प्लेन सीमेंट कंक्रीट)",
      service_pcc_desc: "स्थिरता के लिए मजबूत आधार परतें।",
      service_footing: "फूटिंग कार्य",
      service_footing_desc: "संरचनात्मक अखंडता के लिए मजबूत फूटिंग।",
      service_rcc_foundation: "आरसीसी फाउंडेशन और प्लिंथ बीम",
      service_rcc_foundation_desc: "समर्थन के लिए प्रबलित फाउंडेशन।",
      service_rcc_columns: "आरसीसी कॉलम",
      service_rcc_columns_desc: "ऊर्ध्वाधर ताकत के लिए मजबूत कॉलम।",
      service_masonry: "ईंट/ब्लॉक मेसनरी",
      service_masonry_desc: "दीवारों और संरचनाओं के लिए सटीक मेसनरी।",
      service_rcc_slabs: "आरसीसी स्लैब (रूफ कास्टिंग)",
      service_rcc_slabs_desc: "इमारतों के लिए टिकाऊ रूफ स्लैब।",
      service_staircase: "सीढ़ी निर्माण",
      service_staircase_desc: "सुरक्षा और डिज़ाइन के लिए कस्टम सीढ़ियाँ।",
      service_wall_construction: "ईंट/ब्लॉक दीवार निर्माण",
      service_wall_construction_desc: "सटीकता के साथ आंतरिक और बाहरी दीवारें।",
      service_lintel: "लिंटेल और छज्जा कास्टिंग",
      service_lintel_desc: "समर्थन के लिए कंक्रीट लिंटेल और सनशेड।",
      service_curing: "क्योरिंग",
      service_curing_desc: "कंक्रीट की ताकत के लिए उचित क्योरिंग।",
      service_foundation_waterproofing: "फाउंडेशन वॉटरप्रूफिंग",
      service_foundation_waterproofing_desc: "पानी के नुकसान से फाउंडेशन की सुरक्षा।",
      service_roof_waterproofing: "रूफ स्लैब वॉटरप्रूफिंग",
      service_roof_waterproofing_desc: "रिसाव-रोधी रूफ स्लैब।",
      service_bathroom_waterproofing: "बाथरूम और किचन वॉटरप्रूफिंग",
      service_bathroom_waterproofing_desc: "गीले क्षेत्रों के लिए वॉटरप्रूफिंग।",
      service_tank_waterproofing: "वॉटर टैंक वॉटरप्रूफिंग",
      service_tank_waterproofing_desc: "रिसाव-रोधी पानी भंडारण समाधान।",
      service_professional_title: "पेशेवर कार्य",
      service_floor_tiles: "फर्श टाइल बिछाना",
      service_floor_tiles_desc: "विट्रिफाइड, सिरेमिक, ग्रेनाइट या मार्बल टाइल्स।",
      service_staircase_tiles: "सीढ़ी टाइल्स/ग्रेनाइट",
      service_staircase_tiles_desc: "आकर्षक सीढ़ी फिनिशिंग।",
      service_skirting: "स्कर्टिंग कार्य",
      service_skirting_desc: "फर्श-दीवार संक्रमण के लिए साफ स्कर्टिंग।",
      service_extra_title: "अतिरिक्त कार्य",
      service_underground_plumbing: "अंडरग्राउंड प्लंबिंग",
      service_underground_plumbing_desc: "पानी और सीवेज लाइन इंस्टॉलेशन।",
      service_internal_plumbing: "आंतरिक प्लंबिंग",
      service_internal_plumbing_desc: "बाथरूम और किचन के लिए प्लंबिंग।",
      service_water_tank: "वॉटर टैंक सेटअप",
      service_water_tank_desc: "ओवरहेड या अंडरग्राउंड टैंक इंस्टॉलेशन।",
      service_sump_borewell: "वॉटर सम्प/बोरवेल कनेक्शन",
      service_sump_borewell_desc: "कुशल पानी आपूर्ति कनेक्शन।",
      service_electrical_title: "इलेक्ट्रिकल कार्य",
      service_conduits: "कंड्यूट्स और वायरिंग",
      service_conduits_desc: "सुरक्षित और कुशल इलेक्ट्रिकल वायरिंग।",
      service_switchboards: "स्विचबोर्ड और डीबी",
      service_switchboards_desc: "स्विचबोर्ड और वितरण बोर्ड की स्थापना।",
      service_earthing: "अर्थिंग और लाइटनिंग प्रोटेक्शन",
      service_earthing_desc: "इलेक्ट्रिकल सुरक्षा के लिए सेफ्टी सिस्टम।",
      service_electrical_points: "लाइट, फैन, एसी पॉइंट इंस्टॉलेशन",
      service_electrical_points_desc: "पूर्ण इलेक्ट्रिकल पॉइंट सेटअप।",
      service_interior_title: "आंतरिक फिनिशिंग (वैकल्पिक)",
      service_false_ceiling: "फॉल्स सीलिंग",
      service_false_ceiling_desc: "सौंदर्य के लिए आधुनिक फॉल्स सीलिंग।",
      service_modular_kitchen: "मॉड्यूलर किचन",
      service_modular_kitchen_desc: "कस्टम मॉड्यूलर किचन डिज़ाइन।",
      service_wardrobes: "वॉर्डरोब",
      service_wardrobes_desc: "कार्यात्मक और स्टाइलिश वॉर्डरोब समाधान।",
      service_wall_cladding: "वॉल क्लैडिंग",
      service_wall_cladding_desc: "आंतरिक सजावट के लिए वॉल क्लैडिंग।",
      service_interior_tiling: "आंतरिक टाइलिंग/वॉलपेपर",
      service_interior_tiling_desc: "स्टाइलिश टाइलिंग और वॉलपेपर इंस्टॉलेशन।",
      service_sanitary_title: "सैनिटरी फिटिंग्स",
      service_washbasins: "वॉशबेसिन, वॉटर क्लोसेट",
      service_washbasins_desc: "उच्च-गुणवत्ता वाली सैनिटरी स्थापना।",
      service_kitchen_sink: "किचन सिंक",
      service_kitchen_sink_desc: "टिकाऊ किचन सिंक सेटअप।",
      service_shower_taps: "बाथरूम शावर और टैप",
      service_shower_taps_desc: "आधुनिक शावर और टैप फिटिंग्स।",
      service_geyser: "गीज़र, मिक्सर टैप",
      service_geyser_desc: "कुशल गीज़र और मिक्सर स्थापना।",
      service_final_title: "अंतिम टचअप और हैंडओवर",
      service_cleaning: "सफाई",
      service_cleaning_desc: "निर्माण के बाद पूर्ण साइट सफाई।",
      service_inspection: "अंतिम निरीक्षण",
      service_inspection_desc: "विस्तृत गुणवत्ता जाँच।",
      service_rectifications: "सुधार",
      service_rectifications_desc: "किसी भी स्नैग लिस्ट आइटम का समाधान।",
      service_handover: "मालिक को हैंडओवर",
      service_handover_desc: "निर्बाध प्रोजेक्ट हैंडओवर।",
      contact_title: "हमसे संपर्क करें",
      form_name: "आपका नाम",
      form_email: "आपका ईमेल",
      form_phone: "आपका फोन",
      form_message: "आपका संदेश",
      form_submit: "जमा करें",
      contact_phone: "123-456-7890",
      contact_email: "info@buildriser.com",
      contact_address: "123 कंस्ट्रक्शन लेन, सूरत"
    }
  };
  
  // Language Switching
  function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });
  
    document.querySelectorAll('[data-i18n-placeholder]').forEach(elem => {
      const key = elem.getAttribute('data-i18n-placeholder');
      if (translations[lang][key]) {
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
  
  // Initialize Language
  document.getElementById('language').addEventListener('change', (e) => {
    changeLanguage(e.target.value);
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    document.getElementById('language').value = savedLang;
    changeLanguage(savedLang);
  });
  
  // Hamburger Menu Toggle
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    const hamburger = document.querySelector('.hamburger i');
    hamburger.classList.toggle('fa-bars');
    hamburger.classList.toggle('fa-times');
  }
  
  // Close hamburger menu when clicking a nav link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });
  
  // Worker Card Toggle
  document.querySelectorAll('.worker-card').forEach(card => {
    card.addEventListener('click', () => {
      const details = card.querySelector('.worker-details');
      details.classList.toggle('active');
    });
  });
  
  // Contact Form Validation
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Simple validation
    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      alert('Name should only contain letters and spaces.');
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
  
    // Simulate form submission
    alert('Form submitted successfully!');
    document.getElementById('contactForm').reset();
  });
  
  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Close top notice
  document.querySelector('#top-notice .close-btn').addEventListener('click', () => {
    document.getElementById('top-notice').style.display = 'none';
  });

  const closeBtn = document.querySelector('#top-notice .close-btn');
if (closeBtn) {
  console.log('Close button found and event listener attached');
  closeBtn.addEventListener('click', () => {
    document.getElementById('top-notice').style.display = 'none';
  });
} else {
  console.error('Close button not found');
}