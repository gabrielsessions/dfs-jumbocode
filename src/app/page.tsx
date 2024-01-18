import Card from '@/components/Card'
import Navbar from '@/components/Navbar'
import cards from "@/app/home_cards";

/**
 * Home - generates the homepage, a list of Cards which provide an overview of the current/previous weeks
 * @constructor
 */
export default function Home() {

  return (
    <>
      <Navbar activeTab='Home'/>
      <div className='text-center font-semibold mb-4 mx-2'>
        <h1 className='text-3xl md:text-5xl my-4'>Welcome to JumboCode!</h1>
        <h2 className='text-2xl my-6'>Dress for Success</h2>
        <p className='font-normal my-4'>{"We'll be keeping track of some of our progress here!"}</p>
      </div>


      <div className={""}>
        <Card
          title={"Meeting Schedule"}
          body={
            <>
              <p className='my-2 mt-4 underline text-lg'>Weekly Team Meetings</p>
              <p>There will only be <span className={"font-semibold italic"}>ONE</span> meeting per week in addition to Sunday hacknight. Gabriel can hold additional OH time Thursday evenings if there is demand later this semester.</p>
              <ul className={"list-disc my-2"}>
                <li className={"ml-6 list-item"}>Mondays Room and Time TBD</li>
              </ul>
              <p className='my-2 mt-4 underline text-lg'>Hack Night</p>
              <p className={"-mb-4"}>Sunday 7:00 - 8:00 PM: JCC 170</p>
            </>
          }
        />
      </div>

      {
        cards.map((card, index) => {
          return (
            <div key={index}>
              <Card title={card.title} body={card.body}/>
            </div>
          )
        })
      }


    </>
  )
}
