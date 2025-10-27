# Gender Prediction App

A modern web application built with Next.js that predicts the gender of a person based on their name using the Genderize.io API.

![Gender Prediction App]("https://github.com/user-attachments/assets/eecd42cf-8225-4445-8916-f1a85d959bda")

## Features

- 🎯 Predict gender based on first name
- 📊 Display prediction accuracy and probability
- 🔢 Show usage count from the dataset
- 💫 Modern, responsive UI with glassmorphism design
- ⚡ Real-time API integration
- 🎨 Beautiful gradient backgrounds
- 🔄 Smooth navigation and loading states

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **API:** [Genderize.io](https://genderize.io/)

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project is organized into a clean, maintainable structure with the main application code in the app directory, including the home page and data fetching components.

## How It Works

1. Users enter a name in the input field on the home page
2. The app makes an API call to Genderize.io with the provided name
3. Results are displayed in a beautiful card showing:
   - Predicted gender
   - Confidence level
   - Probability score
   - Number of data points used

## Features in Detail

### Home Page
- Clean, minimalist design with gradient background
- Input field for name entry
- Responsive button with hover effects
- Error handling for empty submissions

### Results Page
- Glassmorphic card design
- Back navigation button
- Loading state while fetching data
- Dynamic confidence color indicators
- Smooth animations and transitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

