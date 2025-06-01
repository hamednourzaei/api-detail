const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/stats.json");
const stats = JSON.parse(fs.readFileSync(filePath, "utf-8"));

stats.forEach((stat) => {
  stat.value += Math.floor(Math.random() * 1000);
  stat.chartData.forEach((data) => {
    data.visits += Math.floor(Math.random() * 100);
  });
});

fs.writeFileSync(filePath, JSON.stringify(stats, null, 2));
console.log("✅ Stats updated.");
