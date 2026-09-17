function SubjectList({ subjects }) {
    return (
        <section className="card">
            <h2>Subjects</h2>

            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </section>
    );
}

export default SubjectList;