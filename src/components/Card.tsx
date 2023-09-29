import { FC, ReactNode } from "react"

interface CardProps {
  title: string,
  body: ReactNode
}


export default function Card(props: CardProps) {
  return (
    <>
      <div className="m-4 p-8 border border-gra-500 rounded-lg hover:shadow-md">
        <h3 className="text-2xl font-medium">{props.title}</h3>
        <div className="my-4">
          {props.body}
        </div>

      </div>
    </>
  )
}