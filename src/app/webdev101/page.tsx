import Navbar from "@/components/Navbar";
import SlideshowIframe from "@/components/SlideshowIframe";
import VideoIframe from "@/components/VideoIframe";

/**
 * Intro - Generates a page with a list of tutorial videos and slideshows
 * @constructor
 */
export default function Intro() {

  return (
    <>
      <Navbar activeTab="Tutorials"/>
      <div className='text-center font-semibold my-4 mx-1'>
        <h1 className='text-3xl md:text-5xl my-2 mb-4'>Web Dev 101</h1>
        <p className='font-normal'>{"A quick introduction to web development!"}</p>
      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Gabriel Sessions: Introduction to HTML/CSS/JS</h3>
        <SlideshowIframe link={"https://docs.google.com/presentation/d/e/2PACX-1vQycnqOatYPIaPBrWqJ1PfBHA5w2waCiI2_8XRnO6VKGYf2HfTF83cG-HZCLv4joFGij-m845E3lcqR/embed?start=false&loop=false"} />

      </div>

      <div className="xl:grid xl:grid-cols-2">
        <div className="border p-4 mx-4 my-2">
          <h3 className="text-lg mb-4">Fireship: 100+ Web Development Things You Should Know</h3>
          <VideoIframe link={"https://www.youtube.com/embed/erEgovG9WBs?si=EW8oVfjWx_qfb6X2"} />
        </div>
        <div className="border p-4 mx-4 my-2">
          <h3 className="text-lg mb-4">Fireship: 100 JavaScript Concepts You Need to Know</h3>
          <VideoIframe link={"https://www.youtube.com/embed/lkIFF4maKMU?si=OxF82X4KIRpNM450"} />
        </div>

      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Gabriel Sessions: Introduction to React Slides</h3>
        <SlideshowIframe link={"https://docs.google.com/presentation/d/e/2PACX-1vT5lLgAg9v65kxFQK_e01V8YcbZsub5kC2FfpnDVXjwfEGVJjVbTPiMtcrR_pmFu00A-ZWX5IYFurek/embed?start=false&loop=false&delayms=3000"} />

      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-2">Beyond Fireship: Next.js Tutorial</h3>
        <p>{"I'd like you to just get the gist of how to build a full stack Next.js app. Coding along is *optional*."}</p>
        <p className={"mb-4"}>{"We'll be using a different tech stack but a lot of the concepts will be similar."}</p>
        <VideoIframe
          link={"https://www.youtube.com/embed/__mSgDEOyv8?si=FTSNvKxczTdy7lI_"}
        />
      </div>





    </>
  )
}