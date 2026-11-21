# LifeScience Intellipedia – Pharmaceutical Assistant

A simple pharmaceutical information assistant built with React. The application provides a chat-based interface along with dedicated sections for supplier information and product summaries.

## Live Demo

[View Live Application](https://lifescienceintellipedia.netlify.app/)

## GitHub Repository

[View Source Code](https://github.com/Vishal-16072000/lifescience-intellipedia)

## Features

### 1. Chat Assistant
- Interactive chat interface for user queries.
- Displays responses inside the conversation.
- Loading indicator while generating responses.
- Provides relevant navigation actions when additional details are available.

### 2. Supplier Data
- Displays supplier information in a structured table.
- Search suppliers by company, country, or type.
- Filter suppliers by country.
- Pagination for easier data browsing.

### 3. Product Summary
- Product overview with categorized information.
- Four sections:
  - API Data
  - FDF Data
  - FDF Combination
  - Commercial Information
- Reusable table component for displaying structured data.

## Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Vite
- Lucide React

## Getting Started

To run the project locally:

**1. Clone the repository**

```bash
git clone https://github.com/Vishal-16072000/lifescience-intellipedia.git
```

**2. Navigate to the project directory**

```bash
cd lifescience-intellipedia/pharma-chatbot
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

The application will be available at the local URL shown in your terminal.

**5. Create a production build**

```bash
npm run build
```

## Project Structure

```text
pharma-chatbot/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── layout/
│   │   └── tables/
│   ├── context/
│   ├── data/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Note on Data

The current implementation uses sample/mock data to demonstrate the application's interface and functionality. The supplier and product information is illustrative and is not connected to a live pharmaceutical database.

## Objective

The goal of this project is to provide a clean and easy-to-use interface for exploring pharmaceutical supplier information, viewing product summaries, and interacting with a chat-based assistant.