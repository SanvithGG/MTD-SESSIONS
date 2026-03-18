function List() {
    const user = ["APPLE", "BANNANA", "CHERRY"];

    return (
        <>
            {user.map((user) => (
                <div>
                {user}
                </div>
            ))}
        </>
    );
}
export default List;