const fs = require('fs');

const base64Data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGxSURBVFiF7ZY9axRRFIafM7ObxEIQbAQFG0tbwcrOTgQrK8HKH6CFYGMhCFZWFhYiVoKdhYWFhYWIhYiFhYUIQkAUDSis37vvsbibZGZ3Z3Y2WRYL98DAzD3nPe95z9y5A3v8x6gkxXa7PQC0gGPAEPgKvHLODf/KhPu+fwZ4Adz8w+MZ8Ng5t5asgLUTwHvgYITpN+C8c+5HogLW2hLwETgcY74CnHXO/UxEwFr7GrieYAoL59zVnQpYa+8Cj3cQ4plz7u52BKy1V4CXCQcHGAGHnHO/4wSstVVgDJQTFvgEnHLONYILxSBba8+y8+AB6sBLa+1IGQSC4zhwP6XgAFeB58aYkhYIXsVpYwQ8KRQKDSEEgiulLPAEuJWBwA3P857KbQFr7WHgPVDLSOCbc+6EEALA WnsI+ABUM0rwzTl3TEgpJWCUYfAAVWPMYyGEwBhzH7ibg8BdIcQGnHMPgGc5JHhmjHm4+WCMuQU8zVjgSTHm9tYHY8wt4HGGAo+MMXe2G4wx14BHGQg8NMbcizIYY84BD1IUuG+MeRBnNMacAe6lIHDPGPMkzriH/4Y/pW+9JPQNnqsAAAAASUVORK5CYII=';

const base64Image = base64Data.split(';base64,').pop();
const imageBuffer = Buffer.from(base64Image, 'base64');

fs.writeFileSync('public/icon.png', imageBuffer);
fs.writeFileSync('public/favicon.ico', imageBuffer);
fs.writeFileSync('public/apple-icon.png', imageBuffer);

console.log('Favicon files created successfully!'); 