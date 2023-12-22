import { TaskProvider } from '@/context/taskContext'
import {
  Panel,
  Planner
} from '@/components'

import './page.css'

export default function Home() {

  return (
    <main className='home-main'>
      <TaskProvider>
        <Panel />
        <Planner />
      </TaskProvider>
    </main>
  )
}
