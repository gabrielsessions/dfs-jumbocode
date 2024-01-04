import Navbar from "@/components/Navbar";
import SlideshowIframe from "@/components/SlideshowIframe";
import VideoIframe from "@/components/VideoIframe";
import { generateBullets } from "../home_cards";

/**
 * Intro - Generates a page with a list of tutorial videos and slideshows
 * @constructor
 */
export default function Intro() {

  return (
    <>
      <Navbar activeTab="Tutorials"/>
      <div className='text-center font-semibold my-4 mx-1'>
        <h1 className='text-3xl md:text-5xl my-2 mb-4'>Intro to Docker Lab</h1>
        <p className='font-normal'>{"A quick introduction to running Docker containers!"}</p>
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">What is Docker?</h3>
        <p className="mb-4">Docker is a useful tool that allows developers to run software in a standardized environment (similar to JVM). Docker virtualizes an operating system (but not the underlying hardware). {"Here's"} a quick introduction to Docker from Fireship:
        
        </p>
        <VideoIframe link={"https://www.youtube.com/embed/Gjnup-PuquQ?si=W8U8L6csKJbc5vto"} />
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 1: Install Docker</h3>
        {"Here's"} a link to main <a href="https://docs.docker.com/engine/install/" className="text-blue-500 hover:underline">Docker installation</a> page. 
        <p>Docker Desktop will install Docker Engine (which is what we want!)</p>
        <p>There should be an installer for most operating systems, although MacOS has had issues in the past.</p>

        <p className="mt-2">Run <code className="underline">docker --version</code> in a shell to check if Docker was installed correctly. You may need to modify PATH if it shows up as an invalid command.</p>
        
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 2: Running your first container</h3>
        <p className="mb-1">Download the most recent image of Ubuntu (linux) by running <code>docker pull ubuntu:latest</code></p>

        <p className="my-1">Create a new Ubuntu container by running <code>docker run -it ubuntu:latest</code></p>

        <p>This should open up an Ubuntu shell. Run some linux commands to verify that the container is running Ubuntu. {"You've"} created your first Docker container, congratulations!</p>
        
      </div>
    


    </>
  )
}