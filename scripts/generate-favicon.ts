import fs from 'fs';
import { createCanvas } from 'canvas';

const size = 32;
const canvas = createCanvas(size, size);
const ctx = canvas.getContext('2d');

// Background
ctx.fillStyle = '#000000'; // Your primary color
ctx.beginPath();
ctx.roundRect(0, 0, size, size, 8);
ctx.fill();

// Code symbols (simplified version of Code2 icon)
ctx.strokeStyle = '#FFFFFF';
ctx.lineWidth = 2;

// First bracket
ctx.beginPath();
ctx.moveTo(10, 8);
ctx.lineTo(14, 16);
ctx.lineTo(10, 24);
ctx.stroke();

// Second bracket (rotated)
ctx.save();
ctx.translate(size/2, size/2);
ctx.rotate(Math.PI/4);
ctx.translate(-size/2, -size/2);
ctx.beginPath();
ctx.moveTo(10, 8);
ctx.lineTo(14, 16);
ctx.lineTo(10, 24);
ctx.stroke();
ctx.restore();

// Save files
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/icon.png', buffer);
fs.writeFileSync('./public/favicon.ico', buffer);
fs.writeFileSync('./public/apple-icon.png', buffer); 