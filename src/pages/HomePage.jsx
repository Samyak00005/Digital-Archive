import Collections from "../components/home/Collections";
import FeaturedProjects from "../components/home/featured/FeaturedProjects";
import Hero from "../components/home/Hero";
import Intro from "../components/home/Intro";

function HomePage() {
  return (
    <main>
      <Hero />
      <Intro />
      <FeaturedProjects />
      <Collections />
    </main>
  );
}

export default HomePage;
