export function Tweet ({ id, name, content, like, onDelete, onLike }) {

    // const onLike = () => {
    //     console.log("Like", name)
    // }

    return <div className="">
        <div className="tweet">
            <button onClick={() => onDelete(id) } className="delete">
            ❌
            </button>
            <h1>{name}</h1>
            <p>{content}</p>
            <button onClick={() => onLike(id)}>{like} ❤️</button>
        </div>
    </div>
}
