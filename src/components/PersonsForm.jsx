const PersonsForm = ({onSubmit, newName, handleContact, newNumber, handleNumber}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>Name: <input value={newName} onChange={handleContact}/></div>
      <div>Number: <input value={newNumber} onChange={handleNumber}/> </div>
      <div><button type="submit">Add</button></div>
    </form>
  )
}
export default PersonsForm;