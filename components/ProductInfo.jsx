import Image from 'next/image'
import styles from '@/components/ProductInfo.module.css'
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

export default function ProductInfo({ productDetail }) {
    const router = useRouter();
    const { id, name } = productDetail;

    const addCart = async () => {
        await createCartItem(id, name);
        alert('장바구니에 추가됨');
        router.push('/cart');
    };

  return (
    <div className={styles.container}>
        <div>
            <Image 
                src={productDetail.imageUrl}
                width={250}
                height={250}
                alt={productDetail.name} 
            />
        </div>
        <div className={styles.description}>
            <p>{productDetail.name}</p>
            <p>{productDetail.price}</p>
            <button onClick={addCart}>장바구니에 담기</button>
        </div>
    </div>
  )
}
