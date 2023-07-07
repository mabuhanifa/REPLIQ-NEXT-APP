import { hello } from "@/redux/features/storeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state.store);
  const dispatch = useDispatch();

  console.log(state);
  return (
    <main>
      <div>
        <button
          onClick={() => {
            dispatch(hello());
          }}
        >
          hello
        </button>
      </div>
    </main>
  );
}
