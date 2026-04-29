type Properties = {
  input: string;
  setInput: (value: string) => void;
  addExercise: () => void;
  setError: (value: string) => void;
};

export default function WorkoutForm({
  input,
  setInput,
  addExercise,
  setError,
}: Properties) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-2">
      <input
        type="text"
        placeholder="Enter exercise"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError("");
        }}
        className="border rounded px-4 py-3 text-black placeholder:text-gray-400"
      />

      <button
        onClick={addExercise}
        className="bg-blue-600 text-white rounded px-4 py-3 hover:bg-blue-700"
      >
        Add Exercise
      </button>
    </div>
  );
}