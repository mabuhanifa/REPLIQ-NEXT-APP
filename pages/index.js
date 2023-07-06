import { useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((s) => s);
  console.log(state);
  return <main></main>;
}
