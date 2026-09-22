import { Student, createStudent, StudentCard } from "./StudentCard";

const schoolName: string = "Cal Poly";
let maxStudents: number = 10;

function getGreeting(name: string): string {
  return `Hi, ${name}`;
}

const students: Student[] = [
  {
    name: "Dorsey",
    major: "Computer Science",
    year: 1,
    hobbies: ["Pickleball", "Rock Climbing"],
    image: "/me.jpg",
  },
  {
    name: "Aidan",
    major: "Architectural Engineering",
    year: 1,
    hobbies: ["Biking"],
    image: "/cplogo.svg",
  }
];

export default function StudentPreview() {
  return (
    <main>
      <div>
        <h1>{schoolName} - Profile Cards</h1>
        <p>{getGreeting("Dorsey")}</p>
        <p>
          Showing {students.length} of {maxStudents} students
        </p>
        {students.map((student) => (
          <StudentCard key={student.name} student={student} />
        ))}
      </div>
    </main>
  );
}
