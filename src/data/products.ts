export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  { id: 'p1', name: 'Andhra Reflection A4 65 GSM', price: 218, description: 'Andhra Reflection — A4, 65 GSM', image: 'https://andhrapaper.com/wp-content/uploads/2022/09/products-reflection-65-gsm-1.jpg' },
  { id: 'p2', name: 'Andhra Reflection A4 70 GSM', price: 232, description: 'Andhra Reflection — A4, 70 GSM', image: 'https://andhrapaper.com/wp-content/uploads/2022/09/products-reflection-70-gsm-1.jpg' },
  { id: 'p3', name: 'Andhra Reflection A4 75 GSM', price: 246, description: 'Andhra Reflection — A4, 75 GSM', image: 'https://andhrapaper.com/wp-content/uploads/2022/09/products-reflection-75-gsm-1.jpg' },
  { id: 'p4', name: 'Andhra Reflection A4 80 GSM', price: 261, description: 'Andhra Reflection — A4, 80 GSM', image: 'https://andhrapaper.com/wp-content/uploads/2022/09/products-reflection-80-gsm-1.jpg' },
  { id: 'p5', name: 'Andhra Reflection A4 100 GSM', price: 323, description: 'Andhra Reflection — A4, 100 GSM', image: 'https://andhrapaper.com/wp-content/uploads/2022/09/products-reflection-100-gsm-1.jpg' },

  { id: 'p6', name: 'Trident My Choice A4 70 GSM', price: 209, description: 'Trident My Choice — A4, 70 GSM', image: 'https://www.tridentindia.com/static/31615e17210dc25c5628505bec1410fb/7c824/trident_copier_my_choice_6488766cf8.webp' },
  { id: 'p7', name: 'Trident Spectra A4 75 GSM', price: 225, description: 'Trident Spectra — A4, 75 GSM', image: 'https://www.tridentindia.com/static/b5c0cd623b6417f0daf218c9434288bc/7c824/trident_copier_spectra_135a22d158.webp' },
  { id: 'p8', name: 'Trident Spectra FS 75 GSM', price: 265, description: 'Trident Spectra FS — FS, 75 GSM', image: 'https://m.media-amazon.com/images/I/61atb-XTsPL.jpg' },
  { id: 'p9', name: 'Trident Royal Touch A4 80 GSM', price: 244, description: 'Trident Royal Touch — A4, 80 GSM', image: 'https://www.tridentindia.com/static/f817384bd9be1a8125b6eb8eda2e9968/7c824/trident_copier_royal_touch_dbe2720047.webp' },

  { id: 'p10', name: 'ABC K One A4 65 GSM', price: 202, description: 'ABC K One — A4, 65 GSM', image: 'https://m.media-amazon.com/images/I/41ZLeFlvBmL._SY300_SX300_QL70_FMwebp_.jpg' },
  { id: 'p11', name: 'ABC K One A4 70 GSM', price: 213, description: 'ABC K One — A4, 70 GSM', image: 'https://m.media-amazon.com/images/I/41M6tNFBL7L._SY300_SX300_QL70_FMwebp_.jpg' },
  { id: 'p12', name: 'ABC K One A4 75 GSM', price: 228, description: 'ABC K One — A4, 75 GSM', image: 'https://m.media-amazon.com/images/I/7153S6RY0sL._SY450_.jpg' },
  { id: 'p13', name: 'ABC Kodex Ledger A4 80 GSM', price: 317, description: 'ABC Kodex Ledger — A4, 80 GSM', image: 'https://5.imimg.com/data5/SELLER/Default/2023/12/370601288/TF/FI/QA/73576629/untitled-1-500x500.jpeg' },

  { id: 'p14', name: 'Satia Superb A4 65 GSM', price: 205, description: 'Satia Superb — A4, 65 GSM', image: 'https://5.imimg.com/data5/ANDROID/Default/2025/5/507757907/KX/HP/KO/79017429/product-jpeg-500x500.jpg' },
  { id: 'p15', name: 'Satia Superb A4 70 GSM', price: 217, description: 'Satia Superb — A4, 70 GSM', image: 'https://5.imimg.com/data5/SELLER/Default/2024/10/459000911/JR/QI/RV/112050460/satia-superb-70-gsm-a4-size-copier-paper-500-sheets-per-ream-white-pack-of-10-ream-500x500.jpg' },
  { id: 'p16', name: 'Satia Superb A4 75 GSM', price: 229, description: 'Satia Superb — A4, 75 GSM', image: 'https://5.imimg.com/data5/ANDROID/Default/2020/11/FD/BO/QU/117914686/product-jpeg-500x500.jpg' },

  { id: 'p17', name: 'KR Kopier Plus A4 70 GSM', price: 197, description: 'KR Kopier Plus — A4, 70 GSM', image: 'https://krpapers.com/wp-content/uploads/2025/10/Kopier-Plus.jpg' },
  { id: 'p18', name: 'KR Kopier Plus A4 75 GSM', price: 209, description: 'KR Kopier MAX — A4, 75 GSM', image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/375997248/YC/JS/AY/186942052/75-gsm-kr-kopier-max-a4-size-paper-500x500.jpg' },

  { id: 'p19', name: 'Vishal Jaguar A4 70 GSM', price: 205, description: 'Vishal Jaguar — A4, 70 GSM', image: 'https://m.media-amazon.com/images/I/51nE6d6diIL._SY300_SX300_QL70_FMwebp_.jpg' },

  { id: 'p20', name: 'Bilt Rapid A4 75 GSM', price: 242, description: 'Bilt Rapid — A4, 75 GSM', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/5/EH/LC/NB/67131632/prod-20220512-1500347199222383698713253-jpg-500x500.jpg' },
  { id: 'p21', name: 'Bilt Alpha Power A4 75 GSM', price: 242, description: 'Bilt Alpha Power — A4, 75 GSM', image: 'https://5.imimg.com/data5/SELLER/Default/2025/5/512302867/KJ/WE/BU/106665610/bilt-alpha-power-paper-a4-75-gsm-500-sheets-500x500.png' },
  { id: 'p22', name: 'Bilt MFRPL A4 70 GSM', price: 216, description: 'Bilt MFRPL — A4, 70 GSM', image: 'https://m.media-amazon.com/images/I/51ItnzdQu-L._SY300_SX300_QL70_FMwebp_.jpg' },
  { id: 'p23', name: 'Bilt Infinity Bond A4 100 GSM', price: 353, description: 'Bilt Infinity Bond — A4, 100 GSM', image: 'https://m.media-amazon.com/images/I/41k4lXF7aXL._SY300_SX300_QL70_FMwebp_.jpg' },

  { id: 'p24', name: 'JK Esay Copier A4 70 GSM', price: 249, description: 'JK Esay Copier — A4, 70 GSM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnLZWCky1kggjeVGWAGesBDv7_U2dScQ81ZQ&s' },
  { id: 'p25', name: 'JK Copier (Red) A4 75 GSM', price: 282, description: 'JK Copier (Red) — A4, 75 GSM', image: 'https://www.jkpaper.com/_next/image?url=%2Fproduct-jk-copier-plus.png&w=640&q=75' },
  { id: 'p26', name: 'JK Sparkle A4 75 GSM', price: 258, description: 'JK Sparkle — A4, 75 GSM', image: 'https://www.jkpaper.com/product-jk-sparkle-75gsm-new.png' },
  { id: 'p27', name: 'JK Escrose A4 75 GSM', price: 248, description: 'JK Escrose — A4, 75 GSM', image: 'https://monafstores.com/wp-content/uploads/2025/08/JK_Eco_Rise_7-768x768.webp' },
  { id: 'p28', name: 'JK A Copier A4 75 GSM', price: 251, description: 'JK A Copier — A4, 75 GSM', image: 'https://m.media-amazon.com/images/I/41Utcj-cw1L._SX300_SY300_QL70_FMwebp_.jpg' }
];
