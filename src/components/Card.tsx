import { ReactNode } from "react"

interface CardProps {
  title: string,
  body: ReactNode
}

/**
 * Generates a Card container to host other components in
 * @param props - contains a card title (string) and body (react component)
 * @constructor
 */
export default function Card(props: CardProps) {
  return (
    <>
      <div className="m-4 p-8 border rounded-lg hover:shadow-md">
        <h3 className="text-2xl font-medium">{props.title}</h3>
        <div className="my-4">
          {props.body}
        </div>
      </div>
    </>
  )
}
