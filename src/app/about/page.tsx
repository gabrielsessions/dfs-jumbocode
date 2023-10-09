import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import {generateBullets} from "@/app/home_cards";
import PeopleList from "@/app/about/PeopleList";



/**
 * About - Generates a page outlining some general information about the project
 * @constructor
 */
export default function About() {

  return (
    <>
      <Navbar activeTab="About"/>
      <div className='text-center font-semibold mb-6 mx-2'>
        <h1 className='text-3xl md:text-5xl my-4 mb-4'>About The Project</h1>
        <p className='font-normal'>{"The team, overall goals, and technical details"}</p>
      </div>

      <PeopleList />
      <Card
        title="Project Overview"
        body={
          <>
            <h4 className="text-xl underline my-4">Project Goals</h4>
            <p>Coming Soon!</p>

            <h4 className="text-xl underline my-4">Tech Stack</h4>
            {
              generateBullets([
                {
                  title: "Frontend",
                  bullets: ["Next.js (React)", "TailwindCSS"]
                },
                {
                  title: "Backend",
                  bullets: ["Node.js (or maybe Bun?)", "PostgreSQL", "GCP"]
                }
              ])
            }
          </>
        }
      />
    </>
  )
}