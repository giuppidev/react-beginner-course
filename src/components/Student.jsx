function Student({ parentStudent }) {
  const [student, setStudent] = useState(parentStudent);

  function add() {
    setStudent({
      ...student,
      vote: student.vote + 1,
    });
  }

  return (
    <div>
      <div>Name: {student.name}</div>
      <div>Vote: {student.vote}</div>
      <button onClick={add}>INCREMENT VOTE</button>
    </div>
  );
}

export default Student;
