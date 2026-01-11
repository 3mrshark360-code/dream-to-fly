const data = {
  en: {
    heroTitle: "Study MBBS in China",
    heroText: "Your trusted China Medical University consultant",
    applyBtn: "Apply via WhatsApp",
    whyTitle: "Why China?",
    whyText: "China offers world-class medical education at affordable cost.",
    reqTitle: "Admission Requirements",
    reqList: ["SSC & HSC passed", "Minimum GPA", "Age 17-25"],
    processTitle: "Admission Process",
    processList: ["Check Eligibility", "Submit Documents", "Get Offer Letter", "Apply Visa", "Fly to China"],
    contactTitle: "Contact Us"
  },
  bn: {
    heroTitle: "চীনে MBBS পড়াশোনা",
    heroText: "আপনার বিশ্বস্ত চায়না মেডিকেল কনসালটেন্ট",
    applyBtn: "WhatsApp এ আবেদন করুন",
    whyTitle: "চীন কেন?",
    whyText: "চীন সাশ্রয়ী খরচে বিশ্বমানের মেডিকেল শিক্ষা দেয়।",
    reqTitle: "ভর্তির যোগ্যতা",
    reqList: ["SSC ও HSC পাশ", "ন্যূনতম GPA", "বয়স ১৭-২৫"],
    processTitle: "ভর্তির ধাপ",
    processList: ["যোগ্যতা যাচাই", "ডকুমেন্ট জমা", "অফার লেটার", "ভিসা", "চীনে যাত্রা"],
    contactTitle: "যোগাযোগ"
  }
};

function setLanguage(lang) {
  document.getElementById("heroTitle").innerText = data[lang].heroTitle;
  document.getElementById("heroText").innerText = data[lang].heroText;
  document.getElementById("applyBtn").innerText = data[lang].applyBtn;
  document.getElementById("whyTitle").innerText = data[lang].whyTitle;
  document.getElementById("whyText").innerText = data[lang].whyText;
  document.getElementById("reqTitle").innerText = data[lang].reqTitle;
  document.getElementById("processTitle").innerText = data[lang].processTitle;
  document.getElementById("contactTitle").innerText = data[lang].contactTitle;

  const reqList = document.getElementById("reqList");
  reqList.innerHTML = "";
  data[lang].reqList.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    reqList.appendChild(li);
  });

  const processList = document.getElementById("processList");
  processList.innerHTML = "";
  data[lang].processList.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    processList.appendChild(li);
  });
}

setLanguage("en");
