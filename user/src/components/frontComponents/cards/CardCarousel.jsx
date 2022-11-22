import { Card } from 'antd';
const { Meta } = Card;

const CardCarousel = ({img, title, content, url}) => {
  return (
    <>
      <Card hoverable className='card_caroussel_index'
    style={{
        width: 400,
        height: 600,
      }}
      cover={
        <img
          alt="activité au château"
          src={img}
        />
      }
      >
    <Meta
      title={title}
      description={content}
    />
    </Card>
    </>
  )
}

export default CardCarousel