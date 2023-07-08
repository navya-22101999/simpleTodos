const TodoItem = props => {
  const {details, deleteUser} = props
  const {title, id} = details
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li>
      <div>
        <div>
          <p>{title}</p>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </li>
  )
}
export default TodoItem
