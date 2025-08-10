const Person = ({ name, number, onClick }) => {
  return (
    <li>
      {name} {number}
      <button type="button" onClick={onClick}>Delete</button>
    </li>
  )
}

const Persons = ({ persons, onClick }) => {
  return (
    <ul>
      {persons.map(person =>
        <Person
          key={person.id}
          name={person.name}
          number={person.number}
          onClick={() => onClick(person.id, person.name)}
        />
      )}
    </ul>
  )
}

export default Persons;