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
