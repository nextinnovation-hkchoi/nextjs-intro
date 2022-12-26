import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Hello!</h1>
      <a href="#">test</a>
      <style jsx global>{`
        a {
          color: brown;
        }
      `}</style>
    </div>
  );
}
