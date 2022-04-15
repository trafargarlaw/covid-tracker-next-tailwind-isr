interface CardProps {
  addClass?: string
}
const Card: React.FC<CardProps> = ({ children, addClass }) => {
  return (
    <div
      className={`mx-2 h-fit w-full space-y-2 rounded-md border border-gray-300 p-6 shadow lg:w-auto ${addClass}`}
    >
      {children}
    </div>
  )
}

export default Card
