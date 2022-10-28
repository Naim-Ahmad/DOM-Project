// Global
let defaultQuote = [
  `“যে নিজের মর্যাদা বোঝে না অন্যেও তার মর্যাদা দেয় না।”
        — হযরত আলী (রাঃ)`,
  `“সৎ লোক সবার বিপদে পড়লে আবার উঠে কিন্তু অসৎ লোক বিপদে পড়লে একবারে নিপাত যায়।”
        — হযরত সুলাইমান (আঃ)`,
  `“অভ্যাসকে জয় করাই পরম বিজয়।”
        — হযরত আলী (রাঃ)`,
  `“অতৃপ্ত এই পৃথিবীতে আজ যত আয়োজন, অর্ধেক তাঁর মিথ্যে মায়া, বাকি অর্ধেক প্রয়োজন।”
        — আবুল হাসানাত কাসিম`,
  `“আমি যাকে তাঁর প্রাপ্য সম্মানের চেয়ে যতটুকু অতিরিক্ত সম্মান দিয়েছি, সে আমার ঠিক ততটুকু ক্ষতি করেছে।”
        — ইমাম শাফিয়ি রাহিঃ`,
  `“আল্লাহর ভয়ে তুমি যা কিছু ছেড়ে দিবে, আল্লাহ্ তোমাকে তার চেয়ে উত্তম কিছু অবশ্যই দান করবেন।”
        —হযরত মোহাম্মদ (সঃ)`,
  ` “অসৎ লোক কাউকে সৎ মনে করে না, সকলকেই সে নিজের মতো ভাবে। ”
        — হযরত আলী (রাঃ)`,
  `“বুদ্ধিমান ও সত্যবাদী ব্যক্তি ছাড়া আর কারো সঙ্গ কামনা করো না।”
        —- হযরত আলী (রাঃ)`,
  ` “ সালাত জান্নাতের চাবি। ”
        — আল হাদিস`,
  `“গুনাহের সাগর আমাকে নিমজ্জিত করে নিয়েছে। ধ্বংসের দ্বারপ্রান্তে ঠেলে দিয়েছে। তবুও আমি আল্লাহর রহমতের আশাবাদী।”
        — বইঃ আল্লাহর প্রতি সুধারনা`,
  ` “সত্য লোকের নিকট অপ্রিয় হলেও তা প্রচার করো।”
        — আল হাদিস`,
  ` “সব দুঃখের মূল এই দুনিয়ার প্রতি অত্যাধিক আকর্ষণ।”
        — হযরত আলী (রাঃ)`,
  ` “রাসূলুল্লাহ সাঃ বলেছেনঃ তোমরা (অযাচিত) পার্থিব সম্পদ প্রহন করো না। কেননা, এর দ্বারা তোমরা দুনিয়ার প্রতি আসক্ত হয়ে পড়বে।”
        — তিরমিজি, হাদিস নং ২৩২৮`,
  ` “রমজান জান্নাতে যাওয়ার উৎকৃষ্টতম উপায় এবং রাইয়ান নামক বিশেষ দরজা দিয়ে জান্নাতে প্রবেশের সুযোগ।”
        —- আল হাদিস`,
  ` “আল্লাহর ভয় মানুষকে সকল ভয় হতে মুক্তি দেয়।”
        — ইবনে সিনা`,
  ` “আজ আপনি যে ছেলে/মেয়েটার সাথে হারাম সম্পর্কে লিপ্ত আছেন বিচারদিবসে সে-ই আপনার বিরুদ্ধে সাক্ষ্য দিবে।”
        —ড. বিলাল ফিলিপ্স`,
  ` “আমাদের জীবনে করা বড় ভুল কখনও কখনও আমাদেরকে পরিবর্তন করে দেয় সবচেয়ে ভালো মানুষে।”
        —- [শাইখ মুফতি ইসমাইল মেঙ্ক]`,
  `“অসৎ লোক কাউকে সৎ মনে করে না, সকলকেই সে নিজের মত ভাবে।”
        — হযরত আলী (রাঃ)`,
  `“সে ব্যক্তি মুমিন নয়, যে নিজে তৃপ্তি সহকারে আহার করে অথচ তার প্রতিবেশী অনাহারে থাকে।”
        — হযরত মুহাম্মদ (সাঃ)`,
  `“মানুষের সাথে তাদের বুদ্ধি পরিমাণ কথা বলো।”
        —- হযরত আলী (রাঃ)`,
  ` “কার্পণ্য ত্যাগ করো নতুবা তোমার আপনজনরা তোমার জন্য লজ্জিত হবে এবং অপরে তোমাকে ঘৃণা করবে।”
        —- হযরত আলী (রাঃ)`,
  ` “উহাই শ্রেষ্ঠ দান যাহা হৃদয় হইতে উৎসারিত হয় এবং রসনা হইতে ক্ষরিত হইয়া ব্যথিতের ব্যথা দূর করে।”
        —- আল হাদিস`,
  ` “পূর্ণ অর্জন অপেক্ষায়, পাপ বর্জন করা শ্রেষঠতর।”
        —- হজরত আলী (রাঃ)`,
  `  “সে কী পেলো যে আল্লাহকে হারালো ? সে কী হারালো যে আল্লাহকে পেলো?”
        —- [ইবনু আতা’আল্লাহ আল ইসকান্দারি (রাহিমাহুল্লাহ)]`,
  `“ যা তুমি নিজে করো না বা করতে পারো না, তা অন্যকে উপদেশ দিও না।”
        —- হযরত আলী (রাঃ)`,
  `“ আল্লাহ তায়ালার ভয়ে তুমি যা কিছু ছেড়ে দিবে, আল্লাহ তোমাকে তার চেয়ে উত্তম কিছু অবশ্যই দান করবেন।”
        —- আল হাদিস`,
  `“ রমজান সামাজিক সহমর্মিতা ও ভ্রাতৃত্ব বোধ সৃষ্টি করে।”
        —- আল হাদিস`,
  `“আল্লাহর প্রতি আপনার ভালোবাসা যতই বৃদ্ধি পেতে থাকবে, দুনিয়ার প্রতি আপনার ভালোবাসা ততোই কমতে থাকবে।”
        —[ড. বিলাল ফিলিপ্স]`,
]

let index = 0

window.onload = () => {
  main()
}

function main() {
  const newQuoteBtn = document.getElementById('newQuoteBtn')
  const display = document.querySelector('.display-quote')

  newQuoteBtn.addEventListener('click', function () {
    if (defaultQuote.length - 1 === index) {
      index = 0
    } else {
      index++
      display.innerHTML = defaultQuote[index]
    }
  })
}
