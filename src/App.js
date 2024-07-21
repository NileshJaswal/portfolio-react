import "./App.css";
import HeaderWrap from "./components/HeaderWrap";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <HeaderWrap></HeaderWrap>
      </header>
      <main class="pt-24 lg:w-1/2 lg:py-24">
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
      </main>
    </>
  );
}

export default App;
