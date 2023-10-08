import Image from 'next/image'
import Bottom from './Footer'
import Footer from './Footer'
import Loginblock from './Loginblock'
import body from './components/Body.module.css'
export default function Home() {
  return (
    <main className={body.body}>
      <div className=''>
        this is a login page to be finished : )
        <Loginblock></Loginblock>
      </div>
      <div>
        i will put something here
      </div>
      <Footer></Footer>
    </main>
  )
}
