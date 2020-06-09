const API_ENDPOINT = process.env.REACT_APP_API_HOST
  ? `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`
  : ''

export const createnewTodoApi: () => Promise<any> = () =>
  fetch(`${API_ENDPOINT}/createnewTodo`)

export const fetchTodosApi = () => fetch(`${API_ENDPOINT}/fetchTodos`)
