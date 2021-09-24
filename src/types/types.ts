export interface TaskListProps {
  addTask?: Function
  text?: string
  tasks?: TaskType[]
  editMode: boolean
  editId: number
  isChecked: boolean
  toggleEditMode: Function
  onEditFinish: Function
  onTextChange: Function
  requestTasks: Function
  onCheck: Function
  onDelete: Function
  isFetching?: boolean
  task?: TaskType
}

export interface TaskType {
  id: number
  text: string
  isChecked: boolean
}

export interface TaskListStateToProps {
  taskList: {
    text: string
    tasks: TaskType[]
    isFetching: boolean
    editId: number
    editMode: boolean
  }
}
