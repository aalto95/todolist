export interface TaskListProps {
  addTask?: Function;
  text?: string;
  tasks?: TaskType[];
  editMode: boolean;
  editId: string;
  isChecked: boolean;
  toggleEditMode: Function;
  onEditFinish: Function;
  onTextChange: Function;
  requestTasks: Function;
  onCheck: Function;
  onDelete: Function;
  isFetching?: boolean;
  task?: TaskType | Partial<TaskType>;
}

export interface TaskType {
  id: string;
  heading: string;
  text: string;
  isChecked: boolean;
  timestamp: number;
}

export interface TaskListStateToProps {
  taskList: {
    text: string;
    tasks: TaskType[];
    isFetching: boolean;
    editId: string;
    editMode: boolean;
  };
}
