import { Card, Image } from 'antd';
import Link from 'next/link';

const { Meta } = Card;

type cartType = {
    label?: string,
    image?: string,
    time?: string,
    url?: string
}

const CardItem = ({label, image, time, url}:cartType) => {
    return (
        <Card
        hoverable
        cover={<Image alt="example" src={image} />}
      >
        {url ? <Link href={url}><Meta title={label} description={time} /></Link> : <Meta title={label} description={time} />}
      </Card>
    );
}

export default CardItem