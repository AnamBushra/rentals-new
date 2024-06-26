// const stateCityData = {
//     "Andaman and Nicobar Islands": {"Port Blair"},
//     "Andhra Pradesh": {
//       "Adoni", "Amaravati", "Anantapur", "Chandragiri", "Chittoor",
//       "Dowlaiswaram", "Eluru", "Guntur", "Kadapa", "Kakinada",
//       "Kurnool", "Machilipatnam", "Nagarjunakoṇḍa", "Rajahmundry",
//       "Srikakulam", "Tirupati", "Vijayawada", "Visakhapatnam",
//       "Vizianagaram", "Yemmiganur"
//     },
//     "Arunachal Pradesh": {"Itanagar"},
//     "Assam": {
//       "Dhuburi", "Dibrugarh", "Dispur", "Guwahati", "Jorhat",
//       "Nagaon", "Sivasagar", "Silchar", "Tezpur", "Tinsukia"
//     },
//     "Bihar": {
//       "Ara", "Barauni", "Begusarai", "Bettiah", "Bhagalpur",
//       "Bihar Sharif", "Bodh Gaya", "Buxar", "Chapra", "Darbhanga",
//       "Dehri", "Dinapur Nizamat", "Gaya", "Hajipur", "Jamalpur",
//       "Katihar", "Madhubani", "Motihari", "Munger", "Muzaffarpur",
//       "Patna", "Purnia", "Pusa", "Saharsa", "Samastipur",
//       "Sasaram", "Sitamarhi", "Siwan"
//     },
//     "Chandigarh": {"Chandigarh"},
//     "Chhattisgarh": {
//       "Ambikapur", "Bhilai", "Bilaspur", "Dhamtari", "Durg",
//       "Jagdalpur", "Raipur", "Rajnandgaon"
//     },
//     "Daman and Diu": {"Daman", "Diu", "Silvassa"},
//     "Delhi": {"Delhi", "New Delhi"},
//     "Goa": {"Madgaon", "Panaji"},
//     "Gujarat": {
//       "Ahmadabad", "Amreli", "Bharuch", "Bhavnagar", "Bhuj",
//       "Dwarka", "Gandhinagar", "Godhra", "Jamnagar", "Junagadh",
//       "Kandla", "Khambhat", "Kheda", "Mahesana", "Morbi",
//       "Nadiad", "Navsari", "Okha", "Palanpur", "Patan",
//       "Porbandar", "Rajkot", "Surat", "Surendranagar", "Valsad",
//       "Veraval"
//     },
//     "Haryana": {
//       "Ambala", "Bhiwani", "Chandigarh", "Faridabad", "Firozpur Jhirka",
//       "Gurugram", "Hansi", "Hisar", "Jind", "Kaithal", "Karnal",
//       "Kurukshetra", "Panipat", "Pehowa", "Rewari", "Rohtak",
//       "Sirsa", "Sonipat"
//     },
//     "Himachal Pradesh": {
//       "Bilaspur", "Chamba", "Dalhousie", "Dharmshala", "Hamirpur",
//       "Kangra", "Kullu", "Mandi", "Nahan", "Shimla", "Una"
//     },
//     "Jammu and Kashmir": {
//       "Anantnag", "Baramula", "Doda", "Gulmarg", "Jammu",
//       "Kathua", "Punch", "Rajouri", "Srinagar", "Udhampur"
//     },
//     "Jharkhand": {
//       "Bokaro", "Chaibasa", "Deoghar", "Dhanbad", "Dumka",
//       "Giridih", "Hazaribag", "Jamshedpur", "Jharia", "Rajmahal",
//       "Ranchi", "Saraikela"
//     },
//     "Karnataka": {
//       "Badami", "Ballari", "Bengaluru", "Belagavi", "Bhadravati",
//       "Bidar", "Chikkamagaluru", "Chitradurga", "Davangere", "Halebid",
//       "Hassan", "Hubballi-Dharwad", "Kalaburagi", "Kolar", "Madikeri",
//       "Mandya", "Mangaluru", "Mysuru", "Raichur", "Shivamogga",
//       "Shravanabelagola", "Shrirangapattana", "Tumakuru", "Vijayapura"
//     },
//     "Kerala": {
//       "Alappuzha", "Vatakara", "Idukki", "Kannur", "Kochi",
//       "Kollam", "Kottayam", "Kozhikode", "Mattancheri", "Palakkad",
//       "Thalassery", "Thiruvananthapuram", "Thrissur"
//     },
//     // ... other states and cities
//   // ... (previous states and cities)

// "Madhya Pradesh": {
//     "Balaghat", "Barwani", "Betul", "Bharhut", "Bhind",
//     "Bhojpur", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara",
//     "Damoh", "Datia", "Dewas", "Dhar", "Dr. Ambedkar Nagar (Mhow)",
//     "Guna", "Gwalior", "Hoshangabad", "Indore", "Itarsi",
//     "Jabalpur", "Jhabua", "Khajuraho", "Khandwa", "Khargone",
//     "Maheshwar", "Mandla", "Mandsaur", "Morena", "Murwara",
//     "Narsimhapur", "Narsinghgarh", "Narwar", "Neemuch", "Nowgong",
//     "Orchha", "Panna", "Raisen", "Rajgarh", "Ratlam",
//     "Rewa", "Sagar", "Sarangpur", "Satna", "Sehore",
//     "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri",
//     "Ujjain", "Vidisha"
//   },
//   "Maharashtra": {
//     "Ahmadnagar", "Akola", "Amravati", "Aurangabad", "Bhandara",
//     "Bhusawal", "Bid", "Buldhana", "Chandrapur", "Daulatabad",
//     "Dhule", "Jalgaon", "Kalyan", "Karli", "Kolhapur",
//     "Mahabaleshwar", "Malegaon", "Matheran", "Mumbai", "Nagpur",
//     "Nanded", "Nashik", "Osmanabad", "Pandharpur", "Parbhani",
//     "Pune", "Ratnagiri", "Sangli", "Satara", "Sevagram",
//     "Solapur", "Thane", "Ulhasnagar", "Vasai-Virar", "Wardha",
//     "Yavatmal"
//   },
//   "Manipur": {"Imphal"},
//   "Meghalaya": {"Cherrapunji", "Shillong"},
//   "Mizoram": {"Aizawl", "Lunglei"},
//   "Nagaland": {"Kohima", "Mon", "Phek", "Wokha", "Zunheboto"},
//   "Odisha": {
//     "Balangir", "Baleshwar", "Baripada", "Bhubaneshwar", "Brahmapur",
//     "Cuttack", "Dhenkanal", "Kendujhar", "Konark", "Koraput",
//     "Paradip", "Phulabani", "Puri", "Sambalpur", "Udayagiri"
//   },
//   "Puducherry": {"Karaikal", "Mahe", "Puducherry", "Yanam"},
//   "Punjab": {
//     "Amritsar", "Batala", "Chandigarh", "Faridkot", "Firozpur",
//     "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana",
//     "Nabha", "Patiala", "Rupnagar", "Sangrur"
//   },
//   "Rajasthan": {
//     "Abu", "Ajmer", "Alwar", "Amer", "Barmer",
//     "Beawar", "Bharatpur", "Bhilwara", "Bikaner", "Bundi",
//     "Chittaurgarh", "Churu", "Dhaulpur", "Dungarpur", "Ganganagar",
//     "Hanumangarh", "Jaipur", "Jaisalmer", "Jalor", "Jhalawar",
//     "Jhunjhunu", "Jodhpur", "Kishangarh", "Kota", "Merta",
//     "Nagaur", "Nathdwara", "Pali", "Phalodi", "Pushkar",
//     "Sawai Madhopur", "Shahpura", "Sikar", "Sirohi", "Tonk",
//     "Udaipur"
//   },
//   "Sikkim": {"Gangtok", "Gyalshing", "Lachung", "Mangan"},
//   "Tamil Nadu": {
//     "Arcot", "Chengalpattu", "Chennai", "Chidambaram", "Coimbatore",
//     "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram",
//     "Kanniyakumari", "Kodaikanal", "Kumbakonam", "Madurai", "Mamallapuram",
//     "Nagappattinam", "Nagercoil", "Palayamkottai", "Pudukkottai", "Rajapalayam",
//     "Ramanathapuram", "Salem", "Thanjavur", "Tiruchchirappalli", "Tirunelveli",
//     "Tiruppur", "Thoothukudi", "Udhagamandalam", "Vellore"
//   },
//   "Telangana": {"Hyderabad", "Karimnagar", "Khammam", "Mahbubnagar", "Nizamabad", "Sangareddi", "Warangal"},
//   "Tripura": {"Agartala"},
//   "Uttar Pradesh": {
//     "Agra", "Aligarh", "Amroha", "Ayodhya", "Azamgarh",
//     "Bahraich", "Ballia", "Banda", "Bara Banki", "Bareilly",
//     "Basti", "Bijnor", "Bithur", "Budaun", "Bulandshahr",
//     "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad-cum-Fatehgarh",
//     "Fatehpur", "Fatehpur Sikri", "Ghaziabad", "Ghazipur", "Gonda",
//     "Gorakhpur", "Hamirpur", "Hardoi", "Hathras", "Jalaun",
//     "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Lakhimpur",
//     "Lalitpur", "Lucknow", "Mainpuri", "Mathura", "Meerut",
//     "Mirzapur-Vindhyachal", "Moradabad", "Muzaffarnagar", "Partapgarh", "Pilibhit",
//     "Prayagraj", "Rae Bareli", "Rampur", "Saharanpur", "Sambhal",
//     "Shahjahanpur", "Sitapur", "Sultanpur", "Tehri", "Varanasi"
//   },
//   "Uttarakhand": {
//     "Almora", "Dehra Dun", "Haridwar", "Mussoorie", "Nainital",
//     "Pithoragarh"
//   },
//   "West Bengal": {
//     "Alipore", "Alipur Duar", "Asansol", "Baharampur", "Bally",
//     "Balurghat", "Bankura", "Baranagar", "Barasat", "Barrackpore",
//     "Basirhat", "Bhatpara", "Bishnupur", "Budge Budge", "Burdwan",
//     "Chandernagore", "Darjeeling", "Diamond Harbour", "Dum Dum", "Durgapur",
//     "Halisahar", "Haora", "Hugli", "Ingraj Bazar", "Jalpaiguri",
//     "Kalimpong", "Kamarhati", "Kanchrapara", "Kharagpur", "Cooch Behar",
//     "Kolkata", "Krishnanagar", "Malda", "Midnapore", "Murshidabad",
//     "Nabadwip", "Palashi", "Panihati", "Purulia", "Raiganj",
//     "Santipur", "Shantiniketan", "Shrirampur", "Siliguri", "Siuri",
//     "Tamluk", "Titagarh"
//   }
//   // Add more states and cities as needed
//   };

//   export default stateCityData;

const stateCityData = {
  "Andaman and Nicobar Islands": {
    "Port Blair": { latitude: 11.623377, longitude: 92.726486 },
  },
  "Andhra Pradesh": {
    Amaravati: { latitude: 20.937424, longitude: 77.779549 },
    Chirala: { latitude: 15.812074, longitude: 80.355377 },
    Chittoor: { latitude: 13.217096, longitude: 79.100677 },
    Dharmavaram: { latitude: 14.413745, longitude: 77.712616 },
    Guntakal: { latitude: 15.167409, longitude: 77.373627 },
    Gudur: { latitude: 14.146319, longitude: 79.850388 },
    Kavali: { latitude: 14.913181, longitude: 79.992981 },
    Markapur: { latitude: 15.764501, longitude: 79.259491 },
    Visakhapatnam: { latitude: 17.686815, longitude: 83.218483 },
    Vizianagaram: { latitude: 18.106659, longitude: 83.395554 },
  },
  "Arunachal Pradesh": {
    Itanagar: { latitude: 27.0844, longitude: 93.6053 },
  },
  Assam: {
    Dhuburi: { latitude: 26.0207, longitude: 89.9743 },
    Dibrugarh: { latitude: 27.4705, longitude: 94.9125 },
    Dispur: { latitude: 26.1433, longitude: 91.7898 },
    Guwahati: { latitude: 26.1158, longitude: 91.7086 },
    Tezpur: { latitude: 26.6528, longitude: 92.7926 },
    Tinsukia: { latitude: 27.4886, longitude: 95.3558 },
  },
  Bihar: {
    Ara: { latitude: 25.5541, longitude: 84.6665 },
    Begusarai: { latitude: 25.4182, longitude: 86.1272 },
    Bhagalpur: { latitude: 25.2372, longitude: 86.9746 },
    "Bodh Gaya": { latitude: 24.6961, longitude: 84.987 },
    Darbhanga: { latitude: 26.1542, longitude: 85.8918 },
    Gaya: { latitude: 24.7914, longitude: 85.0002 },
    Hajipur: { latitude: 25.6924, longitude: 85.2083 },
    Muzaffarpur: { latitude: 26.1197, longitude: 85.391 },
    Patna: { latitude: 25.5941, longitude: 85.1376 },
  },
  Chandigarh: { Chandigarh: { latitude: 30.7333, longitude: 76.7794 } },
  Chhattisgarh: {
    Ambikapur: { latitude: 23.1294, longitude: 83.1861 },
    Bhilai: { latitude: 21.1938, longitude: 81.3509 },
    Bilaspur: { latitude: 22.0797, longitude: 82.1409 },
    Dhamtari: { latitude: 20.7101, longitude: 81.5489 },
    Durg: { latitude: 21.1904, longitude: 81.2849 },
    Jagdalpur: { latitude: 19.0861, longitude: 82.0188 },
    Raipur: { latitude: 21.2514, longitude: 81.6296 },
  },

  "Daman and Diu": {
    Daman: { latitude: 20.3974, longitude: 72.8328 },
    Diu: { latitude: 20.7181, longitude: 70.9858 },
    Silvassa: { latitude: 20.2753, longitude: 73.0073 },
  },
  Delhi: {
    Delhi: { latitude: 28.7041, longitude: 77.1025 },
    "New Delhi": { latitude: 28.6139, longitude: 77.209 },
  },
  Goa: {
    Madgaon: { latitude: 15.2832, longitude: 73.9862 },
    Panaji: { latitude: 15.4909, longitude: 73.8278 },
  },
  Gujarat: {
    Ahmadabad: { latitude: 23.0225, longitude: 72.5714 },
    Bhavnagar: { latitude: 21.7645, longitude: 72.1519 },
    Bhuj: { latitude: 23.242, longitude: 69.6669 },
    Dwarka: { latitude: 21.1904, longitude: 81.2849 },
    Gandhinagar: { latitude: 23.2156, longitude: 72.6369 },
    Kheda: { latitude: 22.7507, longitude: 72.6847 },
    Palanpur: { latitude: 24.1724, longitude: 72.4346 },
    Porbandar: { latitude: 21.6417, longitude: 69.6293 },
    Rajkot: { latitude: 22.3039, longitude: 70.8022 },
    Surat: { latitude: 21.1702, longitude: 72.8311 },
    Valsad: { latitude: 20.5992, longitude: 72.9342 },
  },
  Haryana: {
    Ambala: { latitude: 30.3752, longitude: 76.7821 },
    Bhiwani: { latitude: 28.7975, longitude: 76.1322 },
    Faridabad: { latitude: 28.4089, longitude: 77.3178 },
    "Firozpur Jhirka": { latitude: 27.7873, longitude: 76.9465 },
    Gurugram: { latitude: 28.4595, longitude: 77.0266 },
    Hisar: { latitude: 29.1492, longitude: 75.7217 },
    Karnal: { latitude: 29.6857, longitude: 76.9905 },
    Kurukshetra: { latitude: 29.9695, longitude: 76.8783 },
    Panipat: { latitude: 29.3909, longitude: 76.9635 },
    Rohtak: { latitude: 28.8955, longitude: 76.6066 },
    Sirsa: { latitude: 29.5321, longitude: 75.0318 },
    Sonipat: { latitude: 28.9931, longitude: 77.0151 },
  },
  "Himachal Pradesh": {
    Bilaspur: { latitude: 31.3407, longitude: 76.6875 },
    Chamba: { latitude: 32.5569, longitude: 76.1325 },
    Dalhousie: { latitude: 32.5351, longitude: 75.9075 },
    Dharmshala: { latitude: 32.219, longitude: 76.3234 },
    Hamirpur: { latitude: 31.684, longitude: 76.5127 },
    Kullu: { latitude: 31.9566, longitude: 77.1095 },
    Shimla: { latitude: 31.1048, longitude: 77.1734 },
  },
  "Jammu and Kashmir": {
    Anantnag: { latitude: 33.7315, longitude: 75.1447 },
    Baramulla: { latitude: 34.209, longitude: 74.3426 },
    Doda: { latitude: 33.1418, longitude: 75.5491 },
    Gulmarg: { latitude: 34.0495, longitude: 74.385 },
    Jammu: { latitude: 32.7266, longitude: 74.857 },
    Kathua: { latitude: 32.3668, longitude: 75.5132 },
    Punch: { latitude: 33.7691, longitude: 74.0971 },
    Rajouri: { latitude: 33.3774, longitude: 74.3154 },
    Srinagar: { latitude: 34.0836, longitude: 74.7973 },
    Udhampur: { latitude: 32.925, longitude: 75.1416 },
  },
  Jharkhand: {
    Bokaro: { latitude: 23.6693, longitude: 86.1511 },
    Chaibasa: { latitude: 22.5556, longitude: 85.8141 },
    Deoghar: { latitude: 24.483, longitude: 86.693 },
    Dhanbad: { latitude: 23.8143, longitude: 86.441 },
    Dumka: { latitude: 24.2679, longitude: 87.2483 },
    Giridih: { latitude: 24.1806, longitude: 86.3034 },
    Hazaribag: { latitude: 23.9964, longitude: 85.3691 },
    Jamshedpur: { latitude: 22.8046, longitude: 86.2029 },
    Jharia: { latitude: 23.7571, longitude: 86.4218 },
    Rajmahal: { latitude: 25.0446, longitude: 87.9787 },
    Ranchi: { latitude: 23.3441, longitude: 85.3096 },
    Saraikela: { latitude: 22.7052, longitude: 85.9222 },
  },
  Karnataka: {
    Badami: { latitude: 15.915, longitude: 75.6769 },
    Bengaluru: { latitude: 12.9716, longitude: 77.5946 },
    Bhadravati: { latitude: 13.8482, longitude: 75.7051 },
    Chitradurga: { latitude: 14.2274, longitude: 76.4006 },
    Davangere: { latitude: 14.4644, longitude: 75.9218 },
    Hassan: { latitude: 13.0075, longitude: 76.0967 },
    Kalaburagi: { latitude: 17.3296, longitude: 76.8343 },
    Kolar: { latitude: 13.1367, longitude: 78.1291 },
    Mangaluru: { latitude: 12.9716, longitude: 74.7963 },
    Mysuru: { latitude: 12.2958, longitude: 76.6394 },
    Raichur: { latitude: 16.2076, longitude: 77.3463 },
    Shivamogga: { latitude: 13.9299, longitude: 75.5681 },
    Shravanabelagola: { latitude: 11.931, longitude: 76.5427 },
    Tumakuru: { latitude: 13.3409, longitude: 77.1016 },
    Vijayapura: { latitude: 16.8292, longitude: 75.7154 },
  },
  Kerala: {
    Alappuzha: { latitude: 9.4981, longitude: 76.3388 },
    Vatakara: { latitude: 11.6087, longitude: 75.5909 },
    Idukki: { latitude: 9.8498, longitude: 76.972 },
    Kannur: { latitude: 11.8745, longitude: 75.3704 },
    Kochi: { latitude: 9.9312, longitude: 76.2673 },
    Kollam: { latitude: 8.8932, longitude: 76.6141 },
    Kottayam: { latitude: 9.5916, longitude: 76.5222 },
    Kozhikode: { latitude: 11.2588, longitude: 75.7804 },
    Palakkad: { latitude: 10.7867, longitude: 76.6548 },
    Thalassery: { latitude: 11.7476, longitude: 75.4893 },
    Thiruvananthapuram: { latitude: 8.5241, longitude: 76.9366 },
    Thrissur: { latitude: 10.5276, longitude: 76.2144 },
  },
  "Madhya Pradesh": {
    Balaghat: { latitude: 21.8107, longitude: 80.183 },
    Barwani: { latitude: 22.035, longitude: 74.8969 },
    Betul: { latitude: 21.92, longitude: 77.625 },
    Bharhut: { latitude: 24.0367, longitude: 78.1519 },
    Bhind: { latitude: 26.5681, longitude: 78.7785 },
    Bhojpur: { latitude: 23.1935, longitude: 77.3823 },
    Bhopal: { latitude: 23.2599, longitude: 77.4126 },
    Burhanpur: { latitude: 21.3092, longitude: 76.2302 },
    Chhatarpur: { latitude: 24.9146, longitude: 79.5812 },
    Chhindwara: { latitude: 22.0574, longitude: 78.9382 },
    Damoh: { latitude: 23.8408, longitude: 79.4418 },
    Datia: { latitude: 25.6646, longitude: 78.4596 },
    Dewas: { latitude: 22.9659, longitude: 76.0559 },
    Dhar: { latitude: 22.6015, longitude: 75.2981 },
    "Dr. Ambedkar Nagar (Mhow)": { latitude: 22.5615, longitude: 75.7516 },
    Guna: { latitude: 24.6446, longitude: 77.3167 },
    Gwalior: { latitude: 26.2183, longitude: 78.1828 },
    Hoshangabad: { latitude: 22.7471, longitude: 77.7382 },
    Indore: { latitude: 22.7196, longitude: 75.8577 },
    Itarsi: { latitude: 22.6155, longitude: 77.7625 },
    Jabalpur: { latitude: 23.1815, longitude: 79.9864 },
    Jhabua: { latitude: 22.7692, longitude: 74.5901 },
    Khajuraho: { latitude: 24.851, longitude: 79.9223 },
    Khandwa: { latitude: 21.8243, longitude: 76.3524 },
    Khargone: { latitude: 21.8228, longitude: 75.6195 },
    Maheshwar: { latitude: 22.1765, longitude: 75.5851 },
    Mandla: { latitude: 22.5977, longitude: 80.3714 },
    Mandsaur: { latitude: 24.0711, longitude: 75.0692 },
    Morena: { latitude: 26.4982, longitude: 77.994 },
    Murwara: { latitude: 23.8308, longitude: 80.4073 },
    Narsimhapur: { latitude: 22.9435, longitude: 77.1064 },
    Narsinghgarh: { latitude: 23.7111, longitude: 77.0897 },
    Narwar: { latitude: 25.6461, longitude: 77.9105 },
    Neemuch: { latitude: 24.4751, longitude: 74.8738 },
    Nowgong: { latitude: 24.4436, longitude: 77.1937 },
    Orchha: { latitude: 25.3517, longitude: 78.6414 },
    Panna: { latitude: 24.7184, longitude: 80.1514 },
    Raisen: { latitude: 23.3353, longitude: 77.7917 },
    Rajgarh: { latitude: 24.9773, longitude: 76.626 },
    Ratlam: { latitude: 23.33, longitude: 75.04 },
    Rewa: { latitude: 24.5313, longitude: 81.2922 },
    Sagar: { latitude: 23.8388, longitude: 78.7378 },
    Sarangpur: { latitude: 23.4477, longitude: 76.5782 },
    Satna: { latitude: 24.5822, longitude: 80.8318 },
    Sehore: { latitude: 23.1981, longitude: 77.0855 },
    Seoni: { latitude: 22.0869, longitude: 79.5435 },
    Shahdol: { latitude: 23.2971, longitude: 81.3593 },
    Shajapur: { latitude: 23.4299, longitude: 76.2691 },
    Sheopur: { latitude: 25.6718, longitude: 76.6935 },
    Shivpuri: { latitude: 25.4314, longitude: 77.6604 },
    Ujjain: { latitude: 23.1765, longitude: 75.7885 },
    Vidisha: { latitude: 23.526, longitude: 77.81 },
  },
  Maharashtra: {
    Ahmadnagar: { latitude: 19.0952, longitude: 74.7496 },
    Akola: { latitude: 20.7096, longitude: 77.0219 },
    Amravati: { latitude: 20.9374, longitude: 77.7796 },
    Aurangabad: { latitude: 19.8762, longitude: 75.3433 },
    Bhandara: { latitude: 21.1669, longitude: 79.6706 },
    Chandrapur: { latitude: 19.9703, longitude: 79.3032 },
    Daulatabad: { latitude: 20.9333, longitude: 75.3333 },
    Jalgaon: { latitude: 21.0029, longitude: 75.5667 },
    Kalyan: { latitude: 19.2215, longitude: 73.1645 },
    Karli: { latitude: 16.8604, longitude: 74.5415 },
    Kolhapur: { latitude: 16.705, longitude: 74.2433 },
    Mahabaleshwar: { latitude: 17.9239, longitude: 73.6586 },
    Malegaon: { latitude: 20.5537, longitude: 74.5288 },
    Mumbai: { latitude: 19.076, longitude: 72.8777 },
    Nagpur: { latitude: 21.1458, longitude: 79.0882 },
    Nashik: { latitude: 20.0059, longitude: 73.7798 },
    Pune: { latitude: 18.5204, longitude: 73.8567 },
    Ratnagiri: { latitude: 16.9944, longitude: 73.3002 },
    Sangli: { latitude: 16.8524, longitude: 74.5815 },
    Satara: { latitude: 17.6804, longitude: 74.0183 },
    Sevagram: { latitude: 20.7936, longitude: 78.8242 },
    Solapur: { latitude: 17.6599, longitude: 75.9064 },
    Thane: { latitude: 19.2183, longitude: 72.9781 },
    Ulhasnagar: { latitude: 19.2183, longitude: 73.1645 },
    "Vasai-Virar": { latitude: 19.3919, longitude: 72.8397 },
    Wardha: { latitude: 20.7397, longitude: 78.5981 },
  },
  Manipur: { Imphal: { latitude: 24.817, longitude: 93.9368 } },
  Meghalaya: {
    Cherrapunji: { latitude: 25.2986, longitude: 91.5822 },
    Shillong: { latitude: 25.5788, longitude: 91.8721 },
  },
  Mizoram: {
    Aizawl: { latitude: 23.7271, longitude: 92.7176 },
    Lunglei: { latitude: 22.8818, longitude: 92.733 },
  },
  Nagaland: {
    Kohima: { latitude: 25.6747, longitude: 94.11 },
    Mon: { latitude: 26.7145, longitude: 95.0459 },
    Phek: { latitude: 25.6871, longitude: 94.5 },
    Wokha: { latitude: 26.1035, longitude: 94.2623 },
    Zunheboto: { latitude: 26.0049, longitude: 94.5207 },
  },
  Odisha: {
    Balangir: { latitude: 20.7141, longitude: 83.9367 },
    Baleshwar: { latitude: 21.4951, longitude: 86.935 },
    Baripada: { latitude: 21.9374, longitude: 86.7241 },
    Bhubaneshwar: { latitude: 20.2961, longitude: 85.8245 },
    Brahmapur: { latitude: 19.3134, longitude: 84.7926 },
    Cuttack: { latitude: 20.4625, longitude: 85.8828 },
    Dhenkanal: { latitude: 20.6615, longitude: 85.5963 },
    Kendujhar: { latitude: 21.6326, longitude: 85.5861 },
    Konark: { latitude: 19.8876, longitude: 86.1227 },
    Koraput: { latitude: 18.8154, longitude: 82.7237 },
    Paradip: { latitude: 20.3168, longitude: 86.616 },
    Phulabani: { latitude: 20.4681, longitude: 84.235 },
    Puri: { latitude: 19.8134, longitude: 85.8256 },
    Sambalpur: { latitude: 21.4704, longitude: 83.9701 },
    Udayagiri: { latitude: 19.4402, longitude: 84.3471 },
  },
  Puducherry: {
    Karaikal: { latitude: 10.9185, longitude: 79.8372 },
    Mahe: { latitude: 11.7085, longitude: 75.5337 },
    Puducherry: { latitude: 11.9139, longitude: 79.8145 },
    Yanam: { latitude: 16.7342, longitude: 82.2218 },
  },
  Punjab: {
    Amritsar: { latitude: 31.633, longitude: 74.8723 },
    Batala: { latitude: 31.818, longitude: 75.2029 },
    Chandigarh: { latitude: 30.7333, longitude: 76.7794 },
    Faridkot: { latitude: 30.6777, longitude: 74.7474 },
    Firozpur: { latitude: 30.9257, longitude: 74.6132 },
    Gurdaspur: { latitude: 32.0406, longitude: 75.4051 },
    Hoshiarpur: { latitude: 31.5261, longitude: 75.9114 },
    Jalandhar: { latitude: 31.326, longitude: 75.5762 },
    Kapurthala: { latitude: 31.381, longitude: 75.4 },
    Ludhiana: { latitude: 30.901, longitude: 75.8573 },
    Nabha: { latitude: 30.3748, longitude: 76.1474 },
    Patiala: { latitude: 30.3398, longitude: 76.3869 },
    Rupnagar: { latitude: 30.974, longitude: 76.5277 },
    Sangrur: { latitude: 30.2434, longitude: 75.834 },
  },
  Rajasthan: {
    Ajmer: { latitude: 26.4499, longitude: 74.6399 },
    Alwar: { latitude: 27.553, longitude: 76.6346 },
    Amer: { latitude: 26.9855, longitude: 75.8513 },
    Barmer: { latitude: 25.75, longitude: 71.4167 },
    Beawar: { latitude: 26.101, longitude: 74.3139 },
    Bharatpur: { latitude: 27.1767, longitude: 77.98 },
    Bhilwara: { latitude: 25.3473, longitude: 74.6408 },
    Bikaner: { latitude: 28.0229, longitude: 73.3119 },
    Bundi: { latitude: 25.4381, longitude: 75.6412 },
    Chittaurgarh: { latitude: 24.8825, longitude: 74.6238 },
    Dhaulpur: { latitude: 26.7035, longitude: 77.8375 },
    Dungarpur: { latitude: 23.8361, longitude: 73.7143 },
    Ganganagar: { latitude: 29.9038, longitude: 73.8772 },
    Hanumangarh: { latitude: 29.5849, longitude: 74.3294 },
    Jaipur: { latitude: 26.9124, longitude: 75.7873 },
    Jaisalmer: { latitude: 26.9124, longitude: 70.9128 },
    Jalor: { latitude: 25.3473, longitude: 72.6175 },
    Jhalawar: { latitude: 24.5854, longitude: 76.1594 },
    Jhunjhunu: { latitude: 28.1289, longitude: 75.3991 },
    Jodhpur: { latitude: 26.2389, longitude: 73.0243 },
    Kishangarh: { latitude: 26.5741, longitude: 74.8656 },
    Kota: { latitude: 25.2138, longitude: 75.8648 },
    Merta: { latitude: 26.6515, longitude: 74.0334 },
    Nagaur: { latitude: 27.199, longitude: 73.7407 },
    Nathdwara: { latitude: 24.933, longitude: 73.8238 },
    Pushkar: { latitude: 26.4905, longitude: 74.551 },
    "Sawai Madhopur": { latitude: 26.032, longitude: 76.346 },
    Sirohi: { latitude: 24.8853, longitude: 72.8582 },
    Udaipur: { latitude: 24.5854, longitude: 73.7125 },
  },
  Sikkim: {
    Gangtok: { latitude: 27.3314, longitude: 88.6138 },
    Gyalshing: { latitude: 27.0568, longitude: 88.606 },
    Lachung: { latitude: 27.6975, longitude: 88.7467 },
    Mangan: { latitude: 27.2525, longitude: 88.6065 },
  },
  "Tamil Nadu": {
    Arcot: { latitude: 12.9072, longitude: 79.321 },
    Chennai: { latitude: 13.0827, longitude: 80.2707 },
    Chidambaram: { latitude: 11.399, longitude: 79.6955 },
    Coimbatore: { latitude: 11.0168, longitude: 76.9558 },
    Erode: { latitude: 11.3428, longitude: 77.7286 },
    Kanchipuram: { latitude: 12.8397, longitude: 79.7007 },
    Kanniyakumari: { latitude: 8.0883, longitude: 77.5385 },
    Kodaikanal: { latitude: 10.2381, longitude: 77.4892 },
    Kumbakonam: { latitude: 10.9606, longitude: 79.3771 },
    Madurai: { latitude: 9.9252, longitude: 78.1198 },
    Palayamkottai: { latitude: 8.711, longitude: 77.7567 },
    Pudukkottai: { latitude: 10.3788, longitude: 78.82 },
    Rajapalayam: { latitude: 9.4527, longitude: 77.5535 },
    Ramanathapuram: { latitude: 9.3835, longitude: 78.8295 },
    Salem: { latitude: 11.6643, longitude: 78.146 },
    Thanjavur: { latitude: 10.786, longitude: 79.1378 },
    Tiruchchirappalli: { latitude: 10.7905, longitude: 78.7047 },
    Udhagamandalam: { latitude: 11.4064, longitude: 76.6932 },
    Vellore: { latitude: 12.9165, longitude: 79.1325 },
  },
  Telangana: {
    Hyderabad: { latitude: 17.385, longitude: 78.4867 },
    Karimnagar: { latitude: 18.4392, longitude: 79.1288 },
    Khammam: { latitude: 17.2474, longitude: 80.1514 },
    Mahbubnagar: { latitude: 16.7437, longitude: 77.984 },
    Nizamabad: { latitude: 18.6725, longitude: 78.094 },
    Sangareddi: { latitude: 17.6275, longitude: 78.0865 },
    Warangal: { latitude: 17.9689, longitude: 79.5941 },
  },
  Tripura: { Agartala: { latitude: 23.8315, longitude: 91.2867 } },
  "Uttar Pradesh": {
    Agra: { latitude: 27.1767, longitude: 78.0081 },
    Aligarh: { latitude: 27.8974, longitude: 78.088 },
    Ayodhya: { latitude: 26.792, longitude: 82.1915 },
    Azamgarh: { latitude: 26.0636, longitude: 83.178 },
    Bareilly: { latitude: 28.367, longitude: 79.4304 },
    Budaun: { latitude: 28.0339, longitude: 79.1202 },
    Bulandshahr: { latitude: 28.4117, longitude: 77.8484 },
    Deoria: { latitude: 26.5015, longitude: 83.779 },
    Etah: { latitude: 27.558, longitude: 78.671 },
    Etawah: { latitude: 26.7762, longitude: 79.0193 },
    Faizabad: { latitude: 26.7784, longitude: 82.1459 },
    Fatehpur: { latitude: 25.9298, longitude: 80.8133 },
    "Fatehpur Sikri": { latitude: 27.0937, longitude: 77.6677 },
    Ghaziabad: { latitude: 28.6692, longitude: 77.4538 },
    Hamirpur: { latitude: 25.9516, longitude: 80.8157 },
    Hardoi: { latitude: 27.3956, longitude: 80.1412 },
    Hathras: { latitude: 27.5916, longitude: 78.0529 },
    Jalaun: { latitude: 26.153, longitude: 79.444 },
    Jhansi: { latitude: 25.4484, longitude: 78.5696 },
    Kannauj: { latitude: 27.0521, longitude: 79.9183 },
    Kanpur: { latitude: 26.4499, longitude: 80.3319 },
    Lalitpur: { latitude: 24.6877, longitude: 78.4125 },
    Lucknow: { latitude: 26.8467, longitude: 80.9462 },
    Mathura: { latitude: 27.1767, longitude: 77.9669 },
    Meerut: { latitude: 28.6139, longitude: 77.209 },
    "Mirzapur-Vindhyachal": { latitude: 25.1555, longitude: 82.5802 },
    Moradabad: { latitude: 28.8389, longitude: 78.7768 },
    Muzaffarnagar: { latitude: 29.4725, longitude: 77.7087 },
    Prayagraj: { latitude: 25.4358, longitude: 81.8463 },
    "Rae Bareli": { latitude: 26.2315, longitude: 81.2359 },
    Rampur: { latitude: 28.8154, longitude: 79.027 },
    Varanasi: { latitude: 25.3176, longitude: 82.9739 },
  },
  Uttarakhand: {
    Almora: { latitude: 29.6145, longitude: 79.6537 },
    "Dehra Dun": { latitude: 30.3165, longitude: 78.0322 },
    Haridwar: { latitude: 29.9457, longitude: 78.1642 },
    Mussoorie: { latitude: 30.4599, longitude: 78.0669 },
    Nainital: { latitude: 29.3808, longitude: 79.463 },
    Pithoragarh: { latitude: 29.5804, longitude: 80.218 },
  },
  "West Bengal": {
    Alipore: { latitude: 22.525, longitude: 88.325 },
    Baharampur: { latitude: 24.1045, longitude: 88.2516 },
    Bally: { latitude: 22.6453, longitude: 88.3404 },
    Basirhat: { latitude: 22.657, longitude: 88.888 },
    Bhatpara: { latitude: 22.8684, longitude: 88.4084 },
    Bishnupur: { latitude: 23.0726, longitude: 87.3239 },
    Chandernagore: { latitude: 22.8626, longitude: 88.3686 },
    Darjeeling: { latitude: 27.036, longitude: 88.2627 },
    "Dum Dum": { latitude: 22.6294, longitude: 88.4106 },
    Durgapur: { latitude: 23.5204, longitude: 87.3119 },
    Halisahar: { latitude: 22.9383, longitude: 88.42 },
    Haora: { latitude: 22.5804, longitude: 88.3299 },
    Hugli: { latitude: 22.9052, longitude: 88.3414 },
    Kharagpur: { latitude: 22.346, longitude: 87.231 },
    "Cooch Behar": { latitude: 26.3235, longitude: 89.4565 },
    Kolkata: { latitude: 22.5726, longitude: 88.3639 },
    Midnapore: { latitude: 22.4255, longitude: 87.3255 },
    Murshidabad: { latitude: 24.175, longitude: 88.2764 },
    Raiganj: { latitude: 25.6124, longitude: 88.1245 },
    Shantiniketan: { latitude: 23.688, longitude: 87.6883 },
    Shrirampur: { latitude: 22.7382, longitude: 88.3412 },
    Siliguri: { latitude: 26.7271, longitude: 88.3953 },
    Siuri: { latitude: 23.9058, longitude: 87.5275 },
  },
};

export default stateCityData;
