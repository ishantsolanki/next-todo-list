import { List, Record } from 'immutable'

export interface ChecklistItemType {
  itemId: string
  itemContent: string
  checked: boolean
}

export const ChecklistItemRecord: Record.Factory<ChecklistItemType> = Record({
  itemId: '',
  itemContent: '',
  checked: false as boolean,
})

export interface TodosType {
  id: string
  name: string
  content: List<Record<ChecklistItemType>>
}

export const TodosRecord: Record.Factory<TodosType> = Record({
  id: '',
  name: '',
  content: List([new ChecklistItemRecord() as Record<ChecklistItemType>]),
})
