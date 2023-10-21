'use client'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from '@/components/card'
import Checkbox from '@/components/checkbox'
import Input from '@/components/input'
import Button from '@/components/button'
import Alert from '@/components/alert'
import Skeleton from '@/components/input/skeleton'
import api from '@/services/api'

import './style.css'

export default function Home() {
  const mode = useSelector(state => state.mode)
  const [database, setDatabase] = useState()
  const [activeAlert, setActiveAlert] = useState(false)
  const [childrenAlert, setChildrenAlert] = useState()
  const [typeAlert, setTypeAlert] = useState()
  const [todo, setTodo] = useState({
    activated: false,
    description: undefined
  })

  useEffect(() => {
    fetchTasks()
  })

  const fetchTasks = async () => {
    await api.get('/tasks').then((response) => {
      const resDataBase = response.data
      const resArray = resDataBase.reverse()
      setDatabase(resArray)
    }).catch((error) => {
      setChildrenAlert(`ERRO AO REQUISITAR INFORMAÇÕES - ${error}`)
      setTypeAlert(2)
      setActiveAlert(true)
      setTimeout(() => {
        setActiveAlert(false)
      }, 1500);
    })
  }

  const createTask = async () => {
    let err = false
    if (todo.activated === null || todo.activated === undefined || todo.activated === '') {
      err = true;
    }
    if (todo.description === null || todo.description === undefined || todo.description === '') {
      err = true;
    }

    if (!err) {
      await api.post('/task', {
        "activated": todo.activated,
        "description": todo.description
      }).then((_response) => {
        document.getElementById('task_input').value = ''
        setTodo({ ...todo, description: '' })
        setChildrenAlert('Task adicionda com Sucesso!')
        setTypeAlert(1)
        setActiveAlert(true)
        setTimeout(() => {
          setActiveAlert(false)
        }, 1000);
      }).catch((error) => {
        setChildrenAlert(`ERRO - ${error}`)
        setTypeAlert(2)
        setActiveAlert(true)
        setTimeout(() => {
          setActiveAlert(false)
        }, 1500);
      })
    } else {
      setChildrenAlert('Você não pode adicionar uma Task sem Conteúdo!')
      setTypeAlert(2)
      setActiveAlert(true)
      setTimeout(() => {
        setActiveAlert(false)
      }, 1500);
    }
  }

  const handleCheckedTask = async (task) => {
    await api.put(`/task/${task.id}`, {
      "activated": !task.activated,
      "description": task.description
    }).then((_response) => {
    }).catch((error) => {
      setChildrenAlert(`ERRO - ${error}`)
      setTypeAlert(2)
      setActiveAlert(true)
      setTimeout(() => {
        setActiveAlert(false)
      }, 1500);
    })
  }

  const removeTask = async (id) => {
    await api.delete(`/task/${id}`).then((_response) => {
    }).catch((error) => {
      setChildrenAlert(`ERRO - ${error}`)
      setTypeAlert(2)
      setActiveAlert(true)
      setTimeout(() => {
        setActiveAlert(false)
      }, 1500);
    })
  }

  return (
    <main className='home-main'>
      <Alert active={activeAlert} children={childrenAlert} type={typeAlert} />
      <div className='home-content'>
        <Card
          title='TODO LIST'
          description='Aqui você pode adicionar quantas Tasks quiser!'
        >
          <section className='home-form'>
            <Input
              id='task_input'
              placeholder='Crie uma nova task!'
              type='text'
              onChange={(event) => setTodo({ ...todo, description: event.target.value })}
            />
            <Button
              children='CRIAR'
              type={1}
              style={{
                marginLeft: '20px'
              }}
              onClick={() => createTask()}
            />
          </section>
          {database ? <>
            {database.map((task) => {
              if (!task.activated) {
                return (
                  <Checkbox
                    key={task.id}
                    id={task.id}
                    name={task.id}
                    children={task.description}
                    checked={task.activated}
                    onChange={() => handleCheckedTask(task)}
                    onRemove={() => removeTask(task.id)}
                  />
                )
              }
            })}
            {database.map((task) => {
              if (task.activated) {
                return (
                  <Checkbox
                    key={task.id}
                    id={task.id}
                    name={task.id}
                    children={task.description}
                    checked={task.activated}
                    onChange={() => handleCheckedTask(task)}
                    onRemove={() => removeTask(task.id)}
                  />
                )
              }
            })}</> : <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>}
        </Card>
      </div>
    </main>
  )
}

