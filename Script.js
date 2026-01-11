const content = {
  en: {
    heroTitle: "Study MBBS in China",
    heroText: "Your trusted China Medical University consultant for Bangladeshi students.",
    welcomeText: "Friends, welcome to the path of becoming your dream doctor! Today, if you ask me, 'Why China for MBBS?' – my answer is, because China not only gives degrees, but fulfills the dream of becoming a world-class doctor...",
    aboutText: "China offers world-class medical education at affordable cost.",
    descriptionText: "Dream To Fly is your trusted platform for studying MBBS in China..."
  },
  bn: {
    heroTitle: "চীনে এমবিবিএস পড়ুন",
    heroText: "বাংলাদেশি শিক্ষার্থীদের জন্য চীনা মেডিকেল ইউনিভার্সিটির নির্ভরযোগ্য পরামর্শদাতা।",
    welcomeText: "বন্ধুরা, স্বপ্নের ডাক্তার হওয়ার পথে সবাইকে স্বাগতম! আজ যদি আপনারা আমাকে জিজ্ঞাসা করেন, 'কেন চায়না MBBS-এর জন্য?' – আমার উত্তর হবে, কারণ চায়না শুধু ডিগ্রি দেয় না, সে একটি বিশ্বমানের চিকিৎসক হওয়ার স্বপ্নকে সম্পূর্ণ করে...",
    aboutText: "চীন সাশ্রয়ী খরচে বিশ্বমানের মেডিকেল শিক্ষা প্রদান করে।",
    descriptionText: "ড্রিম টু ফ্লাই হলো চীনে এমবিবিএস পড়ার জন্য আপনার নির্ভরযোগ্য প্ল্যাটফর্ম..."
  }
};

function setLanguage(lang) {
  document.getElementById("heroTitle").innerText = content[lang].heroTitle;
  document.getElementById("heroText").innerText = content[lang].heroText;
  document.getElementById("welcomeText").innerText = content[lang].welcomeText;
  document.getElementById("aboutText").innerText = content[lang].aboutText;
  document.getElementById("descriptionText").innerText = content[lang].descriptionText;
}
