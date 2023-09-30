import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

/**
 * generateBullets - generates an ordered bullet point list with an optional sublist or unordered elements
 * @param meetings - An array of objects that contain a title component and an array of sub-bullets which are also components
 */
export function generateBullets(meetings: Array<{ title: ReactNode, bullets?: Array<ReactNode> }>): ReactElement {
  return (
    <>
      <ol className='ml-6 list-decimal'>
        {
          meetings ?
            meetings.map((meeting, index) => {
              return (
                <li key={index} className='my-2'>
                  {meeting.title}
                  <ul className='list-disc mx-2'>
                    {meeting.bullets ?
                      meeting.bullets.map((bullet, bulletIndex) =>
                        <li className='list-item' key={bulletIndex}>{bullet}</li>
                      ) : <></>}
                  </ul>
                </li>
              )
            }) : <></>
        }
      </ol>
    </>
  )
}

interface CardContentInterface {
    title: string,
    body: ReactNode
}

// Array of cards to display on the homepage
const cards: Array<CardContentInterface> = [
  {
    title: "Week of 10/1: Onboarding (Part 1)",
    body:
      <>
        <p>{"Welcome to the team! We're glad you've chosen to join us for an exciting journey into the world of web development!"}</p>
        <p className='my-2 mt-4 underline text-lg'>Action Items</p>
        {
          generateBullets([
            {
              title: <p>Join the JumboCode Slack</p>,
              bullets: ["Ask us for the link"]
            },
            {
              title: <a target="_blank" rel='noreferrer' className='text-blue-500 hover:underline hover:text-blue-700' href="https://docs.google.com/forms/d/e/1FAIpQLScxjWXdF0t8i9lwwsY93gNVV_OcVtH271skSYXQyqRYwSGDRg/viewform">{'Fill out the "Getting to Know You" survey.'}</a>
            },
            {
              title: <p><span className='italic'>Optional: </span> Check out our <Link className='text-blue-500 hover:underline hover:text-blue-700' href="/webdev101">Web Dev 101 resources</Link></p>
            }
          ])
        }
        <p className='my-2 mt-4 underline text-lg'>Upcoming Meetings & Workshops</p>
        {generateBullets([
          {
            title: "Sunday October 1st (7:00 - 8:00PM): First Hack Night!",
            bullets: ["JCC Room 170"]
          },
          {
            title: "Saturday October 7th: Field Day Bonding Event",
            bullets: ["Details TBD"]
          },
          {
            title: <p><span className='font-semibold underline'>REQUIRED</span> Developer Workshop A: Introduction to Git/GitHub</p>,
            bullets: [
              "Option 1: Monday, October 2nd from 8:30pm - 9:30pm in JCC 170",
              "Option 2: Thursday, October 5th from 7:30pm - 8:30pm in SEC 253"
            ]
          },
          {
            title: <p><span className='font-semibold underline'>REQUIRED</span> Developer Workshop B: Introduction to React</p>,
            bullets: [
              "Option 1: Monday, October 9th from 8:30pm - 9:30pm in Cabot ASEAN",
              "Option 2: Thursday, October 12th from 7:30pm - 8:30pm in SEC 253"
            ]
          },
          {
            title: <p><span className='italic underline'>Optional (but recommended)</span> Developer Workshop C: More React + APIs</p>,
            bullets: [
              "Option 1: Monday, October 16th from 8:30pm - 9:30pm in JCC 170",
              "Option 2: Thursday, October 19th from 7:30pm - 8:30pm in SEC 253"
            ]
          }
        ])}


      </>
  }
]


/**
 * Home - generates the homepage, a list of Cards which provide an overview of the current/previous weeks
 * @constructor
 */
export default function Home() {
  return (
    <>
      <Navbar activeTab='Home' />
      <div className='text-center font-semibold mb-4 mx-2'>
        <h1 className='text-3xl md:text-5xl my-4'>Welcome to JumboCode!</h1>
        <h2 className='text-2xl my-6'>Dress for Success</h2>
        <p className='font-normal my-4'>{"We'll be keeping track of some of our progress here!"}</p>
      </div>

      {
        cards.map((card, index) => {
          return (
            <div key={index}>
              <Card title={card.title} body={card.body} />
            </div>
          )
        })
      }


    </>
  )
}
