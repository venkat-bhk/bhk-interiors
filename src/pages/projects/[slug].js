import Layout from "@layout/Layout";
import Navbar from "@layout/Header/Navbar";
import Footer from "@layout/Footer/Footer";
import Testimonials from "@components/Testimonials";
import ProjectCover from "@components/ProjectCover";
import ProjectDesc from "@components/ProjectDesc";
import ProjectCarousel from "@components/ProjectCarousel";
import ProjectTeam from "@components/ProjectTeam";
import { useRouter } from "next/router";
import { getAllProjectIds, getProjectData } from "@utils/projectData";

export default function Project({ projectData }) {

  const router = useRouter()
  
  return (
    <Layout>
      <Navbar />
      <ProjectCover project={projectData.proj[0]}/>
      <ProjectDesc project={projectData.proj[0]}/>
      <ProjectCarousel project={projectData.proj[0]}/>
      <ProjectTeam project={projectData.proj[0]}/>
      <Testimonials />
      <Footer />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.slug);
  return {
    props: {
      projectData,
    },
  };
}