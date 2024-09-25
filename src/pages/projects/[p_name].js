import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Plan from "@components/Plan";
import Intro from "@components/Intro";
import Experience from "@components/Experience";
import DreamJob from "@components/DreamJob";
import Why from "@components/Why";
import Projects from "@components/Projects";
import LifeCycle from "@components/LifeCycle";
import Contact from "@components/Contact";
import Testimonials from "@components/Testimonials";
import ProjectCover from "@components/ProjectCover";
import ProjectDesc from "@components/ProjectDesc";
import ProjectCarousel from "@components/ProjectCarousel";
import ProjectTeam from "@components/ProjectTeam";

export default function Project() {
  return (
    <Layout>
      <Navbar />
      <ProjectCover />
      <ProjectDesc />
      <ProjectCarousel />
      <ProjectTeam />
      <Testimonials />
      <Footer />
    </Layout>
  );
}