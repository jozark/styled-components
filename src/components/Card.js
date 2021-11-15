export default function Card({ item: { id, title, body, image } }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <img src={`./images/${image}`} alt="" />
    </div>
  )
}
