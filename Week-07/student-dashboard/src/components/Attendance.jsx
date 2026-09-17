function Attendance({ percentage }) {
    const eligible = percentage >= 75;

    return (
        <section className="card">
            <h2>Attendance</h2>

            <p>
                <strong>Attendance:</strong> {percentage}%
            </p>

            <p>
                <strong>Status:</strong>{" "}
                {eligible ? "Eligible" : "Not Eligible"}
            </p>
        </section>
    );
}

export default Attendance;