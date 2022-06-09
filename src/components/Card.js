
const Card = () => {
    const userList = ["Abcd","asd","fdf"];

    const elements = userList.map((element) =>
        <p>{element}</p>
    );
    return (
        <section className="Card p-5" style={{gridColumn:"2/5", gridRow:"2/-1", background:"white"}} >
            <p>{elements}</p>

        </section>
    )
}

export default Card;