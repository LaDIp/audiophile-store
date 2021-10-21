import xx59_mobile from '../assets/product-xx59-headphones/mobile/image-product.jpg'
import xx59_tablet from '../assets/product-xx59-headphones/tablet/image-product.jpg'
import xx59_desktop from '../assets/product-xx59-headphones/desktop/image-product.jpg'
import xx99_1_mobile from '../assets/product-xx99-mark-one-headphones/mobile/image-product.jpg'
import xx99_1_tablet from '../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg'
import xx99_1_desktop from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg'
import xx99_2_mobile from '../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg'
import xx99_2_tablet from '../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'
import xx99_2_desktop from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'

type Product = {
  id: number
  img: { [key: string]: string }
  name: string
  text: string
  new_label: boolean
}

const data: Array<Product> = [
  {
    id: 4,
    img: {
      mobile: xx99_2_mobile,
      tablet: xx99_2_tablet,
      desktop: xx99_2_desktop,
    },
    name: 'xx99 mark two headphones',
    text: 'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
    new_label: true,
  },
  {
    id: 3,
    img: {
      mobile: xx99_1_mobile,
      tablet: xx99_1_tablet,
      desktop: xx99_1_desktop,
    },
    name: 'xx99 mark one headphones',
    text: 'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
    new_label: false,
  },
  {
    id: 2,
    img: {
      mobile: xx59_mobile,
      tablet: xx59_tablet,
      desktop: xx59_desktop,
    },
    name: 'xx59 headphones',
    text: `Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.`,
    new_label: false,
  },
]
export default data
