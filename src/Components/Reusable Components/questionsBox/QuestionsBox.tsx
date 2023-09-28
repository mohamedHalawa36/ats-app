import "./questionsBox.css"
type boxProps = {
    title:string,
    children:React.ReactNode
}

export default function QuestionsBox({title,children}:boxProps) {
  return (
    <div className="box-container">
        <div className={`box-header`}>{title}</div>
        <div className={`questions-container`}>
          {children}
        </div>
    </div>
  )
}
