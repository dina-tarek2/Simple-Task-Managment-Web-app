function Card({
  title,
  number,
  color,
}: {
  title: string;
  number: number;
  color: string;
}) {
  return (
    <div
      className={`flex flex-col gap-2 p-5 w-52 ${color} rounded-xl shadow-md text-white font-medium `}
    >
      <p>{number}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
