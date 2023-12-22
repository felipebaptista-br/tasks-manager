import {
  Panel,
  Planner
} from '@/components'

import './page.css'

export default function Home() {

  return (
    <main className='home-main'>
      <Panel />
      <Planner />
    </main>
  )
}
