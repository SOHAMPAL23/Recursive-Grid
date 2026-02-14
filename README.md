# Recursive Grid 

A highly interactive, deterministic 3x3 grid game built with **Next.js 14 (App Router)** and **Tailwind CSS**. This project demonstrates complex state management, ripple effects, and strictly typed interactions in a modern frontend architecture.

## 🚀 Live Demo
[Deployment Link ](https://recursive-grid-sandy.vercel.app/) *(Replace with your actual URL)*

## 🎮 How to Play
The game consists of a **3x3 grid** of boxes, initially all set to `0`.

### **1. Click Rules**
- Clicking a box **increments** its value by `+1`.
- **Locked boxes** (Red, Value ≥ 15) cannot be clicked.

### **2. Ripple Effects**
Modifying a box can trigger changes in its neighbors:
- **Right Neighbor**: If the new value is **divisible by 3**, the box to the immediate **RIGHT** is decremented by `-1`.
- **Below Neighbor**: If the new value is **divisible by 5**, the box immediately **BELOW** is incremented by `+2`.

*Note: Ripple effects do not cascade further and do not affect locked boxes.*

### **3. Locking Mechanism**
- Once a box reaches a value of **15 or higher**, it becomes **LOCKED**.
- **Locked State**: Turns 🔴 Red, text becomes White.
- Locked boxes **cannot be modified** (neither by clicking nor by ripple effects).

### **4. Colors**
- **Even Values**: Light Gray (`#e0e0e0`) with Black text.
- **Odd Values**: Deep Blue (`#1a237e`) with White text.
- **Locked**: Red (`#dc2626`) with White text.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Font**: [Geist](https://vercel.com/font)

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SOHAMPAL23/Recursive-Grid.git
cd Recursive-Grid
npm install
```

## 🏃‍♂️ Run Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```bash
├── app/
│   ├── globals.css      # Global styles & Tailwind imports
│   ├── layout.js        # Root layout with font optimization
│   └── page.jsx         # Core Game Logic & UI
├── public/              # Static assets
└── tailwind.config.js   # Tailwind configuration
```

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

*Built with ❤️ by Soham*
