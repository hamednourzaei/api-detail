const fs = require("fs");
const path = require("path");

// مسیر فایل stats.json
const filePath = path.join(__dirname, "../data/stats.json");

// خواندن فایل و تبدیل آن به آبجکت جاوااسکریپت
const stats = JSON.parse(fs.readFileSync(filePath, "utf-8"));

// به‌روزرسانی هر stat
stats.forEach((stat) => {
  // افزایش مقدار اصلی
  stat.value += 10;

  // افزایش بازدید هر روز
  stat.chartData.forEach((data) => {
    data.visits += 12;
  });
});

// بازنویسی فایل با داده‌های جدید
fs.writeFileSync(filePath, JSON.stringify(stats, null, 2));
console.log("✅ Stats updated by +12.");
