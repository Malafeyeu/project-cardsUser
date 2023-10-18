import { Card } from "./Card"

const CardRow = ({cards}: {cards: any[]}) => {
  return (
    <div className='container-CardRow'>
      {cards.map((el, i: any) => <Card key={i} cardsInfo={el}/>)} 
    </div>
  )
}

export { CardRow }