import {IframeProps} from "@/components/SlideshowIframe";

export default function VideoIframe(props: IframeProps) {
  return (
    <>
      <iframe className="hidden md:block" width="560" height="315"
              src={props.link} title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
      <iframe className="md:hidden" width="280" height="158"
              src={props.link} title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen></iframe>
    </>
  )
}