type Properties = {
  total: number;
  completed: number;
};

export default function WorkoutStats({
  total,
  completed,
}: Properties) {
  return (
    <p className="mb-6 text-black text-lg">
      Total: {total} | Completed: {completed}
    </p>
  );
}