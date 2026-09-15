import Intro from "./components/common/Intro.jsx";
import Hero from "./components/hero/Hero.jsx";
import Navbar from "./components/navigation/Navbar.jsx";
import FeaturedProject from "./components/projects/FeaturedProjects.jsx";
import FeaturedProjectFull from "./components/projects/FeaturedProjectFull";
import FeaturedProjectReverse from "./components/projects/FeaturedProjectReverse";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <FeaturedProject />
      <FeaturedProjectReverse />
      <FeaturedProjectFull />{" "}
    </main>
  );
}

export default App;
