import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import SubjectList from "./components/SubjectList";
import Attendance from "./components/Attendance";
import ExamDetails from "./components/ExamDetails";
import Footer from "./components/Footer";

function App() {

    const student = {
        name: "Humera Mahaveen",
        rollNumber: "2303A53030",
        branch: "Computer Science and Engineering",
        year: "4th Year"
    };

    const subjects = [
        "Data Structures",
        "Database Management Systems",
        "Computer Networks",
        "DevOps and Fullstack",
        "Artificial Intelligence"
    ];

    return (
        <div className="app">

            <Header />

            <main className="dashboard">

                <StudentProfile
                    name={student.name}
                    rollNumber={student.rollNumber}
                    branch={student.branch}
                    year={student.year}
                />

                <SubjectList subjects={subjects} />

                <Attendance percentage={85} />

                <ExamDetails />

            </main>

            <Footer />

        </div>
    );
}

export default App;