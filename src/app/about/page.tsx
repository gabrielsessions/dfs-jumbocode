import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import { generateBullets } from "../page";
import Link from "next/link";

export default function About() {


  return (
    <>
      <Navbar activeTab="About" />
      <div className='text-center font-semibold mb-6 mx-2'>
        <h1 className='text-3xl md:text-5xl my-2 mb-4'>About The Project</h1>
        <p className='font-normal'>{"The team, overall goals, and technical details"}</p>
      </div>
      <Card
        title={"The Team"}
        body={
          <>
            <div className="md:grid md:grid-cols-2">
              <div>
                <ul className="list-disc ml-6 -mt-1">
                  <li className="list-item">Project Manager: Jyoti Bhardwaj</li>
                  <li className="list-item">Tech Lead: Gabriel Sessions</li>
                  <li className="list-item">Designer: Andy Xu</li>
                  <li className="list-item">Developer: </li>
                  <li className="list-item">Developer: </li>
                  <li className="list-item">Developer: </li>
                  <li className="list-item">Developer: </li>
                </ul>
              </div>
              <div>
                <ul className="list-disc ml-6">
                <li className="list-item">Developer: </li>
                <li className="list-item">Developer: </li>
                <li className="list-item">Developer: </li>
                <li className="list-item">Developer: </li>
                <li className="list-item">Developer: </li>
                <li className="list-item">Developer: </li>

                </ul>
              </div>
            </div>
          </>
        }
      />

      <Card
        title="Project Overview" 
        body={
          <>
            <Link target="_blank" className="text-blue-500 hover:underline" href="https://docs.google.com/document/d/1b2_bDoFQqHmApF2eS4tG20Gx1c1LGOonL8n0ywpaUxE/edit" alt="Dress for success project spec">Link to the Project Spec</Link>

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