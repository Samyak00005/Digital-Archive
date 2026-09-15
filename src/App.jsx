import ProjectArchive from "./components/archive/ProjectArchive";
import CollectionQR from "./components/collections/CollectionQR";
import Intro from "./components/common/Intro";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navigation/Navbar";
import FeaturedProject from "./components/projects/FeaturedProjects";
import FeaturedProjectFull from "./components/projects/FeaturedProjectFull";
import FeaturedProjectReverse from "./components/projects/FeaturedProjectReverse";
import VisualIndex from "./components/gallery/VisualIndex";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <FeaturedProject />
      <FeaturedProjectReverse />
      <FeaturedProjectFull />
      <CollectionQR />
      <ProjectArchive />
      <VisualIndex />
    </main>
  );
}

export default App;
