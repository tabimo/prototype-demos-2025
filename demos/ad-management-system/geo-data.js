// Country-Region-City Geographic Dictionary (English)
const GEO_DATA = {
  "United States (US)": {
    "California (CA)": ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland"],
    "New York (NY)": ["New York City", "Albany", "Buffalo", "Rochester", "Syracuse"],
    "Texas (TX)": ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
    "Florida (FL)": ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"]
  },
  "China (CN)": {
    "Beijing (BJ)": ["Dongcheng District", "Xicheng District", "Chaoyang District", "Haidian District", "Fengtai District"],
    "Shanghai (SH)": ["Huangpu District", "Xuhui District", "Changning District", "Jing'an District", "Putuo District"],
    "Guangdong (GD)": ["Guangzhou", "Shenzhen", "Zhuhai", "Foshan", "Dongguan"],
    "Zhejiang (ZJ)": ["Hangzhou", "Ningbo", "Wenzhou", "Jiaxing", "Huzhou"],
    "Jiangsu (JS)": ["Nanjing", "Suzhou", "Wuxi", "Changzhou", "Nantong"]
  },
  "United Kingdom (UK)": {
    "England (ENG)": ["London", "Manchester", "Birmingham", "Liverpool", "Bristol"],
    "Scotland (SCT)": ["Edinburgh", "Glasgow", "Aberdeen", "Dundee", "Stirling"],
    "Wales (WLS)": ["Cardiff", "Swansea", "Newport", "Wrexham", "Bangor"],
    "Northern Ireland (NIR)": ["Belfast", "Derry", "Lisburn", "Newry", "Armagh"]
  },
  "Japan (JP)": {
    "Kanto Region (KT)": ["Tokyo", "Yokohama", "Saitama", "Chiba", "Kawasaki"],
    "Kansai Region (KS)": ["Osaka", "Kyoto", "Kobe", "Nara", "Wakayama"],
    "Chubu Region (CB)": ["Nagoya", "Shizuoka", "Niigata", "Kanazawa", "Nagano"],
    "Kyushu Region (KY)": ["Fukuoka", "Kitakyushu", "Kumamoto", "Kagoshima", "Nagasaki"]
  },
  "Germany (DE)": {
    "Bavaria (BY)": ["Munich", "Nuremberg", "Augsburg", "Würzburg", "Regensburg"],
    "North Rhine-Westphalia (NW)": ["Cologne", "Düsseldorf", "Dortmund", "Essen", "Duisburg"],
    "Baden-Württemberg (BW)": ["Stuttgart", "Mannheim", "Karlsruhe", "Freiburg", "Heidelberg"],
    "Berlin (BE)": ["Berlin"]
  },
  "France (FR)": {
    "Île-de-France (IDF)": ["Paris", "Versailles", "Créteil", "Nanterre", "Pontoise"],
    "Provence-Alpes-Côte d'Azur (PAC)": ["Marseille", "Nice", "Toulon", "Aix-en-Provence", "Avignon"],
    "Auvergne-Rhône-Alpes (ARA)": ["Lyon", "Grenoble", "Saint-Étienne", "Annecy", "Chambéry"],
    "Nouvelle-Aquitaine (NAQ)": ["Bordeaux", "Limoges", "Poitiers", "La Rochelle", "Périgueux"]
  },
  "Canada (CA)": {
    "Ontario (ON)": ["Toronto", "Ottawa", "Hamilton", "London", "Windsor"],
    "Quebec (QC)": ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil"],
    "British Columbia (BC)": ["Vancouver", "Victoria", "Burnaby", "Richmond", "Surrey"],
    "Alberta (AB)": ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert"]
  },
  "Australia (AU)": {
    "New South Wales (NSW)": ["Sydney", "Newcastle", "Wollongong", "Central Coast", "Albury"],
    "Victoria (VIC)": ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Shepparton"],
    "Queensland (QLD)": ["Brisbane", "Gold Coast", "Townsville", "Cairns", "Toowoomba"],
    "Western Australia (WA)": ["Perth", "Fremantle", "Bunbury", "Geraldton", "Kalgoorlie"]
  },
  "South Korea (KR)": {
    "Seoul (SEL)": ["Gangnam District", "Gangbuk District", "Seocho District", "Songpa District", "Yeongdeungpo District"],
    "Busan (BSN)": ["Haeundae District", "Busanjin District", "Dongnae District", "Nam District", "Jung District"],
    "Daegu (DGU)": ["Jung District", "Dong District", "Seo District", "Nam District", "Buk District"],
    "Incheon (ICN)": ["Jung District", "Dong District", "Michuhol District", "Yeonsu District", "Namdong District"]
  },
  "Singapore (SG)": {
    "Central Region (CR)": ["Downtown Core", "Chinatown", "Little India", "Kampong Glam", "Orchard Road"],
    "East Region (ER)": ["Changi", "Tampines", "Pasir Ris", "Bedok", "East Coast"],
    "West Region (WR)": ["Jurong", "Bukit Batok", "Choa Chu Kang", "Pioneer", "Tuas"],
    "North Region (NR)": ["Woodlands", "Sembawang", "Yishun", "Kranji", "Lim Chu Kang"],
    "North-East Region (NER)": ["Ang Mo Kio", "Hougang", "Sengkang", "Punggol", "Serangoon"]
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GEO_DATA;
} else if (typeof window !== 'undefined') {
  window.GEO_DATA = GEO_DATA;
}