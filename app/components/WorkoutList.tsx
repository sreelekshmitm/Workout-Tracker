import WorkoutItem from "./WorkoutItem";
import { Exercise } from "./WorkoutTracker";

type Properties = {
  exercises: Exercise[];
  toggleExercise: (id: number) => void;
  deleteExercise: (id: number) => void;
};

export default function WorkoutList({
  exercises,
  toggleExercise,
  deleteExercise,
}: Properties) {
  return (
    <div className="space-y-4">
      {exercises.map((item) => (
        <WorkoutItem
          key={item.id}
          item={item}
          toggleExercise={toggleExercise}
          deleteExercise={deleteExercise}
        />
      ))}
    </div>
  );
}