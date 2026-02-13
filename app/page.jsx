'use client';
import { useState } from 'react';

/**
 * Technical Specification Implementation:
 * - 3x3 Grid State: Uses a 2D array [[n,n,n], [n,n,n], [n,n,n]]
 * - Locking Mechanism: Value >= 15 triggers locked state
 * - Ripple Logic: Affects immediate neighbors (Right/Below) based on divisibility
 * - Design: Tailwind CSS with specific hex codes and shadow/border rules
 */

export default function Home() {
    // Initialize 3x3 grid with zeros
    const [grid, setGrid] = useState(
        Array(3).fill(null).map(() => Array(3).fill(0))
    );

    // Helper to check locked state (>= 15)
    const isLocked = (val) => val >= 15;

    const handleBoxClick = (rowIndex, colIndex) => {
        // 1. Create Deep Copy to avoid direct mutation
        const newGrid = grid.map(row => [...row]);
        const currentVal = newGrid[rowIndex][colIndex];

        // 2. Check if clicked box is locked
        if (isLocked(currentVal)) return;

        // 3. Increment Value
        const newVal = currentVal + 1;
        newGrid[rowIndex][colIndex] = newVal;

        // 4. Ripple Logic - RIGHT Neighbor
        // If new value is divisible by 3, decrement right neighbor
        if (newVal % 3 === 0) {
            if (colIndex < 2) { // Check bounds (not last column)
                const rightVal = newGrid[rowIndex][colIndex + 1];
                // Only modify if neighbor is NOT locked
                if (!isLocked(rightVal)) {
                    newGrid[rowIndex][colIndex + 1] = rightVal - 1;
                }
            }
        }

        // 5. Ripple Logic - BELOW Neighbor
        // If new value is divisible by 5, increment below neighbor by 2
        if (newVal % 5 === 0) {
            if (rowIndex < 2) { // Check bounds (not bottom row)
                const belowVal = newGrid[rowIndex + 1][colIndex];
                // Only modify if neighbor is NOT locked
                if (!isLocked(belowVal)) {
                    newGrid[rowIndex + 1][colIndex] = belowVal + 2;
                }
            }
        }

        // 6. Update State
        setGrid(newGrid);
    };

    const handleReset = () => {
        setGrid(Array(3).fill(null).map(() => Array(3).fill(0)));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <h1 className="mb-8 text-4xl font-extrabold text-white drop-shadow-lg tracking-tight">
                Ripple Grid
            </h1>

            <div className="grid grid-cols-3 gap-4 p-6 bg-white/20 backdrop-blur-lg rounded-xl shadow-2xl border border-white/30">
                {grid.map((row, rowIndex) => (
                    row.map((val, colIndex) => {
                        const locked = isLocked(val);
                        const isEven = val % 2 === 0;

                        // Determine styles based on state
                        // Locked takes precedence over Even/Odd
                        let bgClass = '';
                        let textClass = '';

                        if (locked) {
                            bgClass = 'bg-red-600';
                            textClass = 'text-white';
                        } else if (isEven) {
                            bgClass = 'bg-[#e0e0e0]';
                            textClass = 'text-black';
                        } else {
                            bgClass = 'bg-[#1a237e]';
                            textClass = 'text-white';
                        }

                        return (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                onClick={() => handleBoxClick(rowIndex, colIndex)}
                                className={`
                  w-24 h-24 
                  flex items-center justify-center 
                  text-3xl font-bold 
                  rounded-[4px] 
                  shadow-[2px_2px_0px_black]
                  transition-all duration-200
                  ${bgClass}
                  ${textClass}
                  ${locked ? 'cursor-not-allowed opacity-90' : 'cursor-pointer hover: -translate-y-1 hover:shadow-[4px_4px_0px_black] active:translate-y-0 active:shadow-[2px_2px_0px_black]'}
                `}
                                role="button"
                                aria-label={`Grid box at row ${rowIndex + 1}, col ${colIndex + 1}, value ${val}, ${locked ? 'locked' : 'unlocked'}`}
                            >
                                {val}
                            </div>
                        );
                    })
                ))}
            </div>

            <button
                onClick={handleReset}
                className="mt-8 px-8 py-3 bg-white text-indigo-900 font-bold text-lg rounded-full shadow-lg 
                   hover:bg-indigo-50 hover:scale-105 transition-all duration-300 
                   active:scale-95 active:shadow-md"
            >
                Reset Grid
            </button>
        </main>
    );
}
