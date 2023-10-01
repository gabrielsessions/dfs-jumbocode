export interface IframeProps {
  link: string
}

export default function SlideshowIframe(props: IframeProps) {


  return (
    <>
      <iframe className="hidden lg:block" src={props.link}  width="960" height="569" allowFullScreen={true}  ></iframe>

      <iframe className="hidden md:block lg:hidden" src={props.link}  width="480" height="299" allowFullScreen={true}  ></iframe>

      <iframe className="md:hidden" src={props.link}  width="300" height="188" allowFullScreen={true}  ></iframe>
    </>
  )
}