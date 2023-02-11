import dynamic from "next/dynamic";

const App = dynamic(() => import("../App").then((mod) => mod.default), {
  ssr: false,
});

export default function Home() {
  console.log("home");
  return <App />;
}
