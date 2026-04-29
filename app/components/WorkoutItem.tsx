import { Exercise } from "./WorkoutTracker";

type Properties = {
  item: Exercise;
  toggleExercise: (id: number) => void;
  deleteExercise: (id: number) => void;
};

export default function WorkoutItem({
  item,
  toggleExercise,
  deleteExercise,
}: Properties) {
  return (
    <div className="border rounded-lg px-5 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() =>
            toggleExercise(item.id)
          }
          className="w-5 h-5"
        />

        <span
          className={`text-black ${
            item.completed
              ? "line-through text-gray-400"
              : ""
          }`}
        >
          {item.name}
        </span>
      </div>

      <div className="flex gap-3 items-center">
        <span
          className={
            item.completed
              ? "bg-green-100 text-green-700 px-3 py-1 rounded text-sm"
              : "bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm"
          }
        >
          {item.completed
            ? "Completed"
            : "Pending"}
        </span>

        <button
          onClick={() =>
            deleteExercise(item.id)
          }
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
}