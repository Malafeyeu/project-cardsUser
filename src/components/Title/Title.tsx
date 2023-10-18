import { ITitle } from "../../types/types"
import "./style.scss"

const Title = ({title}: ITitle) => {
  return (
    <div className='container-Title'>
      <p className='title__text'>{title}</p>
    </div>
  )
}

export { Title }