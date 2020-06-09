import { List, Record } from 'immutable'

export interface ChecklistItemType {
  _id: string
  content: string
  checked: boolean
}

export const ChecklistItemRecord: Record.Factory<ChecklistItemType> = Record({
  _id: '',
  content: '',
  checked: false as boolean,
})

export interface TodosType {
  _id: string
  title: string
  checklist: ChecklistItemType[]
}

export interface TodosImmutableType {
  _id: string
  title: string
  checklist: List<Record<ChecklistItemType>>
}

export const TodosRecord: Record.Factory<TodosImmutableType> = Record({
  _id: '',
  title: '',
  checklist: List([new ChecklistItemRecord() as Record<ChecklistItemType>]),
})
