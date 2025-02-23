import { useDispatch } from "react-redux";

import { deleteGoal } from "../features/goals/goalsSlice";
import { FaDeleteLeft } from "react-icons/fa6";

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
      <h2>{goal.text}</h2>

      <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
        <FaDeleteLeft />
      </button>
    </div>
  );
}

export default GoalItem;
