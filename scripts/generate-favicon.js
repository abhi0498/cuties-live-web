const { createCanvas } = require("canvas");
const fs = require("fs");

// Create a 32x32 canvas (standard favicon size)
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext("2d");

// Draw a simple heart shape
ctx.fillStyle = "#ff69b4"; // Pink color
ctx.beginPath();
ctx.moveTo(16, 8);
ctx.bezierCurveTo(8, 0, 0, 8, 0, 16);
ctx.bezierCurveTo(0, 24, 8, 32, 16, 32);
ctx.bezierCurveTo(24, 32, 32, 24, 32, 16);
ctx.bezierCurveTo(32, 8, 24, 0, 16, 8);
ctx.fill();

// Convert to buffer
const buffer = canvas.toBuffer("image/x-icon");

// Save to file
fs.writeFileSync("public/cuties-live-web/favicon.ico", buffer);
