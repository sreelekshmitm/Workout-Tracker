"use client";

import { useEffect, useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutStats from "./WorkoutStats";
import WorkoutList from "./WorkoutList";

// TypeScript Type
export type Exercise = {
    id: number;
    name: string;
    completed: boolean;
};

export default function WorkoutTracker() {
    const [input, setInput] = useState("");
    const [error, setError] = useState("");
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        const saved = localStorage.getItem("exercises");

        if (saved) {
            setExercises(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(
            "exercises",
            JSON.stringify(exercises)
        );
    }, [exercises]);

    //   Add Exercise
    const addExercise = () => {
        if (!input.trim()) {
            setError("Please enter an exercise");
            return;
        }
        // Create New Item
        const newExercise: Exercise = {
            id: Date.now(),
            name: input,
            completed: false,
        };
        // Add To Array
        setExercises([...exercises, newExercise]);
        setInput("");
        setError("");
    };

    // Toggle Checkbox Function
    const toggleExercise = (id: number) => {
        const updated = exercises.map((item) =>
            item.id === id
                ? { ...item, completed: !item.completed }
                : item
        );

        setExercises(updated);
    };

    // Delete Function
    const deleteExercise = (id: number) => {
        setExercises(
            exercises.filter((item) => item.id !== id)
        );
    };

    // Completed Count
    const completedCount = exercises.filter(
        (item) => item.completed
    ).length;

    // Filter Exercises
    const filteredExercises = exercises.filter((item) => {
        if (filter === "completed") return item.completed;
        if (filter === "pending") return !item.completed;
        return true;
    });

    return (
        <main className="min-h-screen bg-white py-10 px-4">
            <div className="max-w-5xl mx-auto bg-white rounded-xl p-8">
                <h1 className="text-4xl font-bold text-black text-center mb-8">
                    Exercise Tracker
                </h1>

                <WorkoutForm
                    input={input}
                    setInput={setInput}
                    addExercise={addExercise}
                    setError={setError}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-4">
                        {error}
                    </p>
                )}

                <WorkoutStats
                    total={exercises.length}
                    completed={completedCount}
                />

                {/* Filter */}
                <div className="flex gap-3 text-black mb-6">
                    <button
                        onClick={() => setFilter("all")}
                        className="px-4 py-2 border rounded"
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("completed")}
                        className="px-4 py-2 border rounded"
                    >
                        Completed
                    </button>

                    <button
                        onClick={() => setFilter("pending")}
                        className="px-4 py-2 border rounded"
                    >
                        Pending
                    </button>
                </div>

                <WorkoutList
                    exercises={filteredExercises}
                    toggleExercise={toggleExercise}
                    deleteExercise={deleteExercise}
                />

                <p className="text-center text-gray-500 mt-10">
                    Data is saved in local storage. <span className="text-black">It should persist after refresh.</span>
                    
                </p>
            </div>
        </main>
    );
}