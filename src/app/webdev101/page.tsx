import Navbar from "@/components/Navbar";

export default function Intro() {

  return (
    <>
      <Navbar activeTab="Tutorials" />
      <div className='text-center font-semibold mb-4 mx-1'>
        <h1 className='text-3xl md:text-5xl my-2 mb-4'>Web Dev 101</h1>
        <p className='font-normal'>{"A quick introduction to web development!"}</p>
      </div>

      <div className="xl:grid xl:grid-cols-2">
        <div className="border p-4 mx-4 my-2">
          <h3 className="text-lg mb-4">Fireship: 100+ Web Development Things You Should Know</h3>
          <iframe className="hidden md:block" width="560" height="315" src="https://www.youtube.com/embed/erEgovG9WBs?si=EW8oVfjWx_qfb6X2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="md:hidden" width="280" height="158" src="https://www.youtube.com/embed/erEgovG9WBs?si=EW8oVfjWx_qfb6X2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="border p-4 mx-4 my-2">
          <h3 className="text-lg mb-4">Fireship: 100 JavaScript Concepts You Need to Know</h3>
          <iframe className="hidden md:block" width="560" height="315" src="https://www.youtube.com/embed/lkIFF4maKMU?si=OxF82X4KIRpNM450" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          <iframe className="md:hidden" width="280" height="158" src="https://www.youtube.com/embed/lkIFF4maKMU?si=OxF82X4KIRpNM450" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>

      <div className="border p-4 mx-4 my-4">
        <h3 className="text-lg mb-4">Gabriel Sessions: Introduction to React Slides</h3>
        <iframe className="hidden lg:block" src="https://docs.google.com/presentation/d/e/2PACX-1vT5lLgAg9v65kxFQK_e01V8YcbZsub5kC2FfpnDVXjwfEGVJjVbTPiMtcrR_pmFu00A-ZWX5IYFurek/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="960" height="569" allowFullScreen={true}  ></iframe>

        <iframe className="hidden md:block lg:hidden" src="https://docs.google.com/presentation/d/e/2PACX-1vT5lLgAg9v65kxFQK_e01V8YcbZsub5kC2FfpnDVXjwfEGVJjVbTPiMtcrR_pmFu00A-ZWX5IYFurek/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="480" height="299" allowFullScreen={true}  ></iframe>

        <iframe className="md:hidden" src="https://docs.google.com/presentation/d/e/2PACX-1vT5lLgAg9v65kxFQK_e01V8YcbZsub5kC2FfpnDVXjwfEGVJjVbTPiMtcrR_pmFu00A-ZWX5IYFurek/embed?start=false&loop=false&delayms=3000" frameBorder="0" width="300" height="188" allowFullScreen={true}  ></iframe>
      </div>


    </>
  )
}