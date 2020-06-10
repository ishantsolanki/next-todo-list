export const API_ENDPOINT = process.env.REACT_APP_API_HOST
  ? `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`
  : ''

type corsModeType = 'cors' | 'navigate' | 'no-cors' | 'same-origin' | undefined
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
}

const corsMode: corsModeType = 'cors'

export const createnewTodoApi: () => Promise<any> = () =>
  fetch(`${API_ENDPOINT}/createnewTodo`)

export const fetchTodosApi = () =>
  fetch(`${API_ENDPOINT}/fetchTodos`).then((res) => res.json())

export const fetchTodoApi = (todoId: string) => () =>
  fetch(`${API_ENDPOINT}/fetchTodo/${todoId}`).then((res) => res.json())

const options = (_id: string, title: string) => ({
  method: 'POST',
  body: JSON.stringify({ _id, title }),
  mode: corsMode,
  headers,
})

export const updateTitleApi = ({
  _id,
  title,
}: {
  _id: string
  title: string
}) => fetch(`${API_ENDPOINT}/updateTitle`, options(_id, title))

export const addNewChecklistApi = (todoId: string) =>
  fetch(`${API_ENDPOINT}/addNewChecklist/${todoId}`)
