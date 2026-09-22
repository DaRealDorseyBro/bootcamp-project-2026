import styles from "./student-card.module.css";
import Image from "next/image";

export type Student = {
  name: string;
  major: string;
  year: number;
  hobbies: string[];
  image: string;
};

export function createStudent(
  name: string,
  major: string,
  year: number,
  hobbies: string[],
  image: string,
): Student {
  return { name, major, year, hobbies, image };
}

type StudentCardProps = {
  student: Student;
};

export function StudentCard({ student }: StudentCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.header}>
          <span className={styles.badge}>Student</span>
          <h2 className={styles.name}>{student.name}</h2>
        </div>

        <p className={styles.meta}>
          {student.major}, Year {student.year}
        </p>

        <p className={styles.hobbies}>
          <span className={styles.hobbiesLabel}>Hobbies</span>
          {student.hobbies.join(", ")}
        </p>
      </div>

      <Image
        className={styles.studentImage}
        src={student.image || "/cplogo.svg"}
        alt={`${student.name}'s profile`}
        width={100}
        height={100}
      />
    </div>
  );
}
