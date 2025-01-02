const fs = require('fs');

const base64Data = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGxSURBVFiD7ZY9axRRFIafM7ObxEIQbAQFG0tbwcrOTgQrK8HKH6CFYGMhCFZWFhYiVoKdhYWFhYWIhYiFhYUIQkAUDSisn7vvsbibZGZ3Z3Y2WRYL98DAzD3nPe95z9y5A3v8x6gkxXa7PQC0gGPAEPgKvHLODf/KhPu+fwZ4Adz8w+MZ8Ng5t5asgLUTwHvgYITpN+C8c+5HogLW2hLwETgcY74CnHXO/UxEwFr7GrieYAoL59zVnQpYa+8Cj3cQ4plz7u52BKy1V4CXCQcHGAGHnHO/4wSstVVgDJQTFvgEnHLONYILxSBba8+y8+AB6sBLa+1IGQSC4zhwP6XgAFeB58aYkhYIXsVpYwQ8KRQKDSEEgiulLPAEuJWBwA3P857KbQFr7WHgPVDLSOCbc+6EEALAWnsI+ABUM0rwzTl3TEgpJWCUYfAAVWPMYyGEwBhzH7ibg8BdIcQGnHMPgGc5JHhmjHm4+WCMuQU8zVjgiTHm9tYHY8wt4HGGAo+MMXe2G4wx14BHGQg8NMbcizIYY84BD1IUuG+MeRBnNMacAe6lIHDPGPMkzriH/4Y/pW+9JPQNnqsAAAAASUVORK5CYII=';

// Create buffer from base64
const imageBuffer = Buffer.from(base64Data, 'base64');

// Ensure public directory exists
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

// Write files
fs.writeFileSync('public/icon.png', imageBuffer);
fs.writeFileSync('public/favicon.ico', imageBuffer);
fs.writeFileSync('public/apple-icon.png', imageBuffer);

console.log('Favicon files created successfully!'); 