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
        <p className="mb-4">Docker is a useful tool that allows developers to run software in a standardized environment (similar to the JVM). Unlike virtual machines, it {"doesn't"} virtualize computer architecture which makes Docker containers fast and easy to set up. {"Here's"} a quick conceptual overview:
        
        </p>
        <VideoIframe link={"https://www.youtube.com/embed/Gjnup-PuquQ?si=W8U8L6csKJbc5vto"} />
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 1: Install Docker</h3>
        {"Here's"} a link to the main <a href="https://docs.docker.com/engine/install/" className="text-blue-500 hover:underline">Docker installation</a> page. 
        <p>Docker Desktop will install Docker Engine (which is what we want!)</p>

        <p className="mt-2">Run <code className="underline">docker --version</code> in a shell to check if Docker was installed correctly. You may need to modify you {"computer's"} PATH variable if it shows up as an invalid command.</p>
        
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 2: Running your first container</h3>
        <p className="mb-1">Download the most recent image of Ubuntu (linux) by running <code className="underline">docker pull ubuntu:latest</code></p>

        <p className="my-1">Create a new Ubuntu container by running <code className="underline">docker run -it ubuntu:latest</code></p>

        <p>This should open up an Ubuntu shell. Run some linux commands to verify that the container is running Ubuntu. If you got this working, congrats on running your first Docker container!</p>
        
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 3: Run a Full Stack Web Application</h3>
        <p className="mb-1">{"Let's"} do something more interesting. {"I've"} created two images for this introductory dummy site and pushed them to Docker Hub, a marketplace for Docker images.</p>

        <p className="mt-1">Go to my Docker Hub profile (<a href={"https://hub.docker.com/u/gabrielsessions"}className="text-blue-500 hover:underline">gabrielsessions</a>) and pull the following images:</p>
        <p className="ml-2 underline">gabrielsessions/dfs-jumbocode-intro-frontend</p>
        <p className="ml-2 underline">gabrielsessions/dfs-jumbocode-intro-backend</p>

        <p className="my-1 font-semibold">Warning: I created these images on a machine running Linux and an x86 ISA. I have not tested this with an ARM ISA (M1/M2 MacBooks).</p>

        <p className="my-1">Open up the dfs-jumbocode-intro repository on your machine, the most recent version should have a <code>docker-compose.yml</code> file. Please pull from GitHub if you do not have the most recent version of the main branch. Alternatively you can add this file to your current working directory: <a href="https://github.com/gabrielsessions/dfs-jumbocode/blob/main/docker-compose.yml" className="text-blue-500 hover:underline">docker-compose.yml</a></p>

        <p className="my-1">To run both the backend and frontend servers concurrently, run <code className="underline">docker compose up</code>. Both the frontend and backend servers should boot. Verify both servers are working by going to <a href="http://localhost:3000/about" className="text-blue-500 hover:underline">localhost:3000/about</a> and clicking on some of the names.</p>

        <p>You can stop the servers with a CTRL-C. If they do not properly shut down after a CTRL-C, you can close the containers manually (run a command like <code>docker compose down</code>).</p>
        
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">(Optional) Step 4: Creating your own Docker Image</h3>
        <p className="mb-1">Open up the dfs-jumbocode-intro repository in a terminal (on the main branch). You should have a <code className="underline">Dockerfile</code> in the root directory.</p>

        <p className="my-1">Open up the Dockerfile and take a look at its structure. You do not need to know what each of the commands do, but try to get a sense of how a Dockerfile sets up a server.</p>

        <p className="my-1">Using this Dockerfile, create a new image for the frontend server. Run <code className="underline">docker build . -t my-first-image</code>. This may take a while if the build process is slow.</p>

        <p className="my-1">Now that you have an image set up, you can now build containers with this image. Pushing images to Docker Hub {"doesn't"} take too much additional work, but {"I'll"} leave the Googling to you.</p>
        
      </div>
    
      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Step 5: Review Key Concepts</h3>
        <p className="mb-1">If you read the lab carefully, you should be able to answer these questions:</p>

        {generateBullets([
          {
            title: "What is Docker and why is it useful?"
          },
          {
            title: <p>What is a Dockerfile and what does it do?</p>,
          },
          {
            title: <p>What is an image? Where can I search up publicly avaliable images?</p>,
          },
          {
            title: <p>What is a container? How is it different from an image?</p>,
          },
          {
            title: <p>Outline the process of building an image (and container) from source code.</p>,
          },
          {
            title: "Reflection",
            bullets: [
              "What are some advantages/disadvantages of using containers over VMs?",
              "Besides our DFS web app, can you describe a project (or type of system) where containerization might be useful?",
              "What parts of this lab were hard/confusing?"
            ]
          }
        ])}
        
      </div>


    </>
  )
}