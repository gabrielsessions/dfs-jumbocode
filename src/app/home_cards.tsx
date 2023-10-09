import {ReactNode} from "react";
import Link from "next/link";

/**
 * generateBullets - generates an ordered bullet point list with an optional sublist or unordered elements
 * @param meetings - An array of objects that contain a title component and an array of sub-bullets which are also components
 */
export function generateBullets(meetings: Array<{ title: ReactNode, bullets?: Array<ReactNode> }>): ReactNode {
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

const week1: CardContentInterface = {
  title: "Week of 10/8: Onboarding (Part 2)",
  body:
    <>
      <p>{"Welcome back! This week we'll be getting your development environment set up and providing some easy tickets to start practicing PRs and some basic React."}</p>
      <p className='my-2 mt-4 underline text-lg'>Action Items</p>
      {
        generateBullets([
          {
            title: <p>Pick a code editor to use!</p>,
            bullets: ["General Recommendation: VSCode", "Bloated Option: WebStorm", "Power Users: Vim/Neovim"]
          },
          {
            title: <p>Add your name to the developers list on the <Link className={"text-blue-500 hover:underline"} href={"/about"}>about page</Link></p>,
            bullets: [
              <p key={1}>Do this <span className={"italic underline"}>AFTER</span> Workshop A: Git/GitHub</p>,
              <p key={2}>Submit a <span className={"italic font-semibold"}>pull request</span> to this <Link target="_blank" className="text-blue-500 hover:underline" href={"https://github.com/gabrielsessions/dfs-jumbocode"}>GitHub repository</Link>.</p>
            ]
          },
          {
            title: <p><span className='italic'>Optional: </span> Check out our
              <Link className='text-blue-500 hover:underline hover:text-blue-700'
                    href="/webdev101"> Web Dev 101 resources</Link></p>
          },
          {
            title: "REQUIRED: Attend a session of Developer Workshop B: Introduction to React"
          },
          {
            title: <p>Fetch a fun fact from the backend by clicking on your name on the <Link className={"text-blue-500 hover:underline"} href={"/about"}>about page</Link></p>,
            bullets: [
              <p key={0}>Please install Bun before attempting this task. Directions are in the backend README.</p>,
              <p key={1}>Do this <span className={"italic underline"}>AFTER</span> you add your name to the developers list and submit a PR.</p>,
              <p key={2}>Make your name clickable and trigger an API call onClick to the backend.</p>,
              <p key={3}>Modify the backend to return a fun fact when your name is called using the API!</p>,
              <p key={4}>Run the frontend and backend servers at the same time to verify that you can fetch and display your fun fact on the frontend.</p>,
              <p key={5}>Submit a <span className={"italic font-semibold"}>pull request</span> to this <Link target="_blank" className="text-blue-500 hover:underline" href={"https://github.com/gabrielsessions/dfs-jumbocode"}>GitHub repository</Link> when you are done.</p>
            ]
          },
        ])
      }
    </>
}

const week0: CardContentInterface = {
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
            title: <a target="_blank" rel='noreferrer'
                      className='text-blue-500 hover:underline hover:text-blue-700'
                      href="https://docs.google.com/forms/d/e/1FAIpQLScxjWXdF0t8i9lwwsY93gNVV_OcVtH271skSYXQyqRYwSGDRg/viewform">{'Fill out the "Getting to Know You" survey.'}</a>
          },
          {
            title: <p>Add your name to the developers list on the <Link className={"text-blue-500 hover:underline"} href={"/about"}>about page</Link></p>,
            bullets: [
              <p key={1}>Do this <span className={"italic underline"}>AFTER</span> Workshop A: Git/GitHub</p>,
              <p key={2}>Submit a <span className={"italic font-semibold"}>pull request</span> to this <Link target="_blank" className="text-blue-500 hover:underline" href={"https://github.com/gabrielsessions/dfs-jumbocode"}>GitHub repository</Link>.</p>
            ]
          },
        ])
      }
      <p className='my-2 mt-4 underline text-lg'>Upcoming Meetings & Workshops</p>
      {generateBullets([
        {
          title: "Sunday October 1st (7:00 - 8:00PM): First Hack Night!",
          bullets: ["JCC Room 170"]
        },
        {
          title: <p><span className='font-semibold underline'>REQUIRED</span> Developer Workshop A:
            Introduction to Git/GitHub</p>,
          bullets: [
            "Option 1: Monday, October 2nd from 8:30pm - 9:30pm in JCC 170",
            "Option 2: Thursday, October 5th from 7:30pm - 8:30pm in SEC 253"
          ]
        },
        {
          title: <p><span className='font-semibold underline'>REQUIRED</span> Developer Workshop B:
            Introduction to React</p>,
          bullets: [
            "Option 1: Monday, October 9th from 8:30pm - 9:30pm in Cabot ASEAN",
            "Option 2: Thursday, October 12th from 7:30pm - 8:30pm in SEC 253"
          ]
        },
        {
          title: <p><span className='italic underline'>Optional (but recommended)</span> Developer
            Workshop C: More React + APIs</p>,
          bullets: [
            "Option 1: Monday, October 16th from 8:30pm - 9:30pm in JCC 170",
            "Option 2: Thursday, October 19th from 7:30pm - 8:30pm in SEC 253"
          ]
        }
      ])}
    </>
}

// Array of cards to display on the homepage
const cards: Array<CardContentInterface> = [
  week1, week0
]


export default cards;