import CollectionQR from "./components/collections/CollectionQR";
import Intro from "./components/common/Intro";
import Hero from "./components/hero/Hero";
import FeaturedProject from "./components/projects/FeaturedProjects";
import FeaturedProjectFull from "./components/projects/FeaturedProjectFull";
import FeaturedProjectReverse from "./components/projects/FeaturedProjectReverse";

function App() {
  return (
    <main>
      <Hero />
      <Intro />
      <FeaturedProject />
      <FeaturedProjectReverse />
      <FeaturedProjectFull />
      <CollectionQR />
    </main>
  );
}

export default App;
