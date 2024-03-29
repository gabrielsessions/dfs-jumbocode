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

const january = {
  title: "January 2024",
  body: 
  <>
    <p className='my-2 mt-4 underline text-lg'>Tickets</p>
    {
      generateBullets([
        {
          title: <p>Finish Up Ticket 2</p>,
          bullets: ["Note: There are some partner reassignments!", "Ticket 2 NEEDS to be done by Sunday 1/28."]
        },
        {
          title: <p>Ticket 3 will be released by January 26th</p>,
        },
      ])
    }
    <p className='my-2 mt-4 underline text-lg'>Slides/Notes/Labs</p>
    <ol className={"list-disc ml-6"}>
      <li className={"list-item"}><Link href={"https://docs.google.com/presentation/d/1TBhTV6WgpQZMQqsglNfliz2TfSPY6t0r4qnZO4EvprA/edit?usp=sharing"} className={"text-blue-500 hover:underline"}>Web Application Deployment Notes (Google Slides)</Link>
        </li>
      <li className={"list-item"}><Link href={"/docker-lab"} className={"text-blue-500 hover:underline"}>Introduction to Docker Lab</Link></li>
      <li className={"list-item"}><Link href={"https://docs.google.com/presentation/d/1wgWFQVRioa_yEdMPcHc7uE4LjxJIr5y8aaT42DehEgM/edit?usp=sharing"} className={"text-blue-500 hover:underline"}>Introduction to Authentication Notes (Google Slides)</Link></li>
    </ol>

  </>
}

const fall2023 : CardContentInterface = {
  title: "The Rest of Fall 2023",
  body:
  <>
    <p className='my-2 mt-4 underline text-lg'>Tickets</p>
    {
      generateBullets([
        {
          title: <p>Ticket 1</p>,
          bullets: [
            <p key={1}>Login Page</p>,
            <p key={2}>Homepage Grid</p>,
            <p key={3}>Cards to Display Items</p>,
            <p key={4}>Miscellaneous Frontend Components</p>
          ]
        },
        {
          title: <p>Ticket 2</p>,
          bullets: [
            <p key={1}>Implementing Database CRUD Operations</p>,
            <p key={2}>Form to add items to inventory</p>,
            <p key={3}>Popup box to display item info/actions</p>,
            <p key={4}>Navbar</p>,
            <p key={5}>Assembling frontend components</p>
          ]
        }
      ])
    }
    <p>Full ticket descriptions are avaliable on GitHub</p>
    <p className='my-2 mt-4 underline text-lg'>Tutorials and Resources</p>
    {
      generateBullets([
        {
          title: <p>Backend Servers, Databases, and More!</p>,
          bullets: [
            <p key={1}><Link href={"https://docs.google.com/document/d/1REUNQRgQsoZ8DVMjXE8guH7I7MRdd2_NirdzO9NuD38/edit#heading=h.xtbepxz7y54h"} className={"text-blue-500 hover:underline"}>Link to Notes (Google Docs)</Link></p>,
          ]
        },
        {
          title: <p>Frontend</p>,
          bullets: [
            <p key={1}><Link href="https://docs.google.com/presentation/d/1ZQIVk2bgqclszg7OdAxbqMFvLU4V7ttyZ21R4B0VyJo/edit?usp=sharing" className={"text-blue-500 hover:underline"}>React Slides</Link></p>,
          ]
        }
      ])
    }
    
  </>
}

const week3: CardContentInterface = {
  title: "Week of 10/22: React and Frontend Review",
  body:
  <>
    <p className='my-2 mt-4 underline text-lg'>Action Items</p>
    {
      generateBullets([
        {
          title: <p>Continue to work on your onboarding tickets</p>,
          bullets: [
            <p key={1}>Full Stack Button: Make your name clickable on the <Link href={"/about"} className={"text-blue-500 hover:underline"}>About Page</Link>. Fetch a fun fact from the backend when your name is clicked.</p>,
            <p key={2}>AI Chatbot: <Link href={"https://codesandbox.io/s/jumbocode-onboarding-chatbot-53qstt"} className={"text-blue-500 hover:underline"}>Starter Code</Link></p>,
            <p key={3}>Optional Todo List: Create a basic todo list with all 4 CRUD operations using Next.js</p>
          ]
        },
        {
          title: <p>React + Misc. Frontend Presentation</p>,
          bullets: [
            <Link key={1} href="https://docs.google.com/presentation/d/1ZQIVk2bgqclszg7OdAxbqMFvLU4V7ttyZ21R4B0VyJo/edit?usp=sharing" className={"text-blue-500 hover:underline"}>Link to Slideshow</Link>
          ]
        }
      ])
    }
    <p className='my-2 mt-4 underline text-lg'>Next Week</p>
    {
      generateBullets([
        {
          title: <p>Optional: Field Day (Sunday 8PM)</p>,
        },
        {
          title: <p>Final Onboarding Presentation: Backend</p>,
        },
        {
          title: <p>Your first (real) tickets!</p>,
        },

      ])
    }
  </>
}

const week2: CardContentInterface = {
  title: "Week of 10/15: HTML/CSS/JS Introduction",
  body:
    <>
      <p className='my-2 mt-4 underline text-lg'>Action Items</p>
      {
        generateBullets([

          {
            title: <p>{"Install all necessary packages/tools from Week 1 if you haven't already done so."}</p>,
          },
          {
            title: <p>Complete any incomplete tickets from last week</p>,
            bullets: [
              <p key={1}>Your First PR: Adding you name to the devs list on the <Link href={"/about"} className={"text-blue-500 hover:underlin"}>About Page</Link></p>,
              <p key={2}>Creating a full-stack fun fact button (directions in Week 1)</p>
            ]
          },
          {
            title: <p><span className='italic'>Optional: </span> Check out our
              <Link className='text-blue-500 hover:underline hover:text-blue-700'
                    href="/webdev101"> Web Dev 101 resources</Link></p>
          },
          {
            title: <p><span className='italic'>Optional: </span>  Attend a session of Developer Workshop C: React State and APIs</p>
          },
          {
            title: "Start on the AI Chatbot Activity",
            bullets: [
              <p key={1}>HTML/CSS/JS slides are on the <Link href={"/webdev101"} className={"text-blue-500 hover:underline"}>Tutorials Page</Link></p>,
              <p key={2}>Link to the <Link href={"https://codesandbox.io/s/jumbocode-onboarding-chatbot-53qstt"} className={"text-blue-500 hover:underline"}>Starter Code</Link></p>,
              <p key={3}>{"[Gabriel's Implementation Coming Soon!]"}</p>

            ]
          },
        ])
      }

      <p className='my-2 mt-4 underline text-lg'>Upcoming Meetings & Workshops</p>
      {generateBullets([
        {
          title: "Sunday October 15th and 22nd (7:00 - 8:00PM): Hack Night!",
          bullets: ["JCC Room 170"]
        },
        {
          title: <p><span className='italic underline'>Optional (but recommended)</span> Developer
            Workshop C: More React + APIs</p>,
          bullets: [
            "Option 1: Monday, October 16th from 8:30pm - 9:30pm in JCC 170",
            "Option 2: Thursday, October 19th from 7:30pm - 8:30pm in SEC 253"
          ]
        },
        {
          title: <p>Weekly Meetings</p>,
          bullets: ["Attend at least one weekly meeting!", "See the schedule at the top of this page."]
        }
      ])}
    </>
};


const week1: CardContentInterface = {
  title: "Week of 10/8: Onboarding (Part 2)",
  body:
    <>
      <p>{"Welcome back! This week we'll be getting your development environment set up!"}</p>
      <p className='my-2 mt-4 underline text-lg'>Action Items</p>
      {
        generateBullets([
          {
            title: <p>Pick a code editor to use!</p>,
            bullets: ["General Recommendation: VSCode", "Bloated Option: WebStorm", "Power Users: Vim/Neovim"]
          },
          {
            title: <p>Install the following:</p>,
            bullets: [
              <Link className={"text-blue-500 hover:underline"} key={1}
                    href={"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}>Git</Link>,
              <Link className={"text-blue-500 hover:underline"} key={2} href={"https://nodejs.org/en"}>Node.js</Link>,
              <Link className={"text-blue-500 hover:underline"} key={3} href={"https://bun.sh/"}>Bun</Link>
            ]
          },
          {
            title: <p>Add your name to the developers list on the <Link className={"text-blue-500 hover:underline"}
                                                                        href={"/about"}>about page</Link></p>,
            bullets: [
              <p key={1}>Do this <span className={"italic underline"}>AFTER</span> Workshop A: Git/GitHub</p>,
              <p key={2}>Submit a <span className={"italic font-semibold"}>pull request</span> to this <Link
                target="_blank" className="text-blue-500 hover:underline"
                href={"https://github.com/gabrielsessions/dfs-jumbocode"}>GitHub repository</Link>.</p>
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
            title: <p>Fetch a fun fact from the backend by making your name clickable on the <Link
              className={"text-blue-500 hover:underline"} href={"/about"}>about page</Link></p>,
            bullets: [
              <p key={0}>Please install Bun before attempting this task. Directions are in the backend README.</p>,
              <p key={1}>Do this <span className={"italic underline"}>AFTER</span> you add your name to the developers
                list and successfully submit your first PR.</p>,
              <p key={2}>Make your name clickable and trigger an API call onClick to the backend.</p>,
              <p key={3}>Modify the backend to return a fun fact when your name is called using the provided API
                endpoint.</p>,
              <p key={4}>Run the frontend and backend servers at the same time to verify that you can fetch and display
                your fun fact on the frontend.</p>,
              <p key={5}>Submit a <span className={"italic font-semibold"}>pull request</span> to this <Link
                target="_blank" className="text-blue-500 hover:underline"
                href={"https://github.com/gabrielsessions/dfs-jumbocode"}>GitHub repository</Link> when you are done.
              </p>,
              <p key={6}>{"Congratulations! You've made a full-stack button!"}</p>
            ]
          },
        ])
      }

      <p className='my-2 mt-4 underline text-lg'>Upcoming Meetings & Workshops</p>
      {generateBullets([
        {
          title: "Sunday October 15th (7:00 - 8:00PM): Hack Night!",
          bullets: ["JCC Room 170"]
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
        },
        {
          title: <p>Weekly Meeting</p>,
          bullets: ["Times to be decided on 10/9"]
        }
      ])}
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
      ])}
    </>
}

// Array of cards to display on the homepage
const cards: Array<CardContentInterface> = [
  january,fall2023, week3, week2, week1, week0
]


export default cards;