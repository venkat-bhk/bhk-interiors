import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Testimonials from "@components/Testimonials";
import ProjectCover from "@components/ProjectCover";
import ProjectDesc from "@components/ProjectDesc";
import ProjectCarousel from "@components/ProjectCarousel";
import ProjectTeam from "@components/ProjectTeam";
import { useRouter } from "next/router";
import ProjectData from "@utils/projectData";

export default function Project() {

  const router = useRouter()
  const project = ProjectData.filter(x => x.slug === router.query.p_name)

  return (
    <Layout>
      <Navbar />
      <ProjectCover project = {project[0] && project[0]} />
      <ProjectDesc project = {project[0] && project[0]} />
      <ProjectCarousel project = {project[0] && project[0]} />
      <ProjectTeam project = {project[0] && project[0]} />
      <Testimonials />
      <Footer />
    </Layout>
  );
}