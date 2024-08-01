import React from 'react'
import Image from 'next/image'
import styles from './CartList.module.css'
import { useRouter } from 'next/router';
import axios from 'axios';

export default function CartList({ carts }) {
  const router  = useRouter();

  const totalPrice = carts.reduce((acc, cur) => {
    return acc + parseFloat(cur.price);
  }, 0);

  const removeCart = async (id) => {
    // 1. 삭제 API 호출
    const { data } = await axios.post('http://localhost:3000/api/carts', {
      id: id
    });
    alert(data);
    // 2. 상품 목록을 갱신
    router.replace(router.asPath);
  }

  return (
    <div>
      <div>
        <ul>
          {carts.map(cart => {
            return (
              <li key={cart.id} className={styles.item}>
                <div>
                  <Image 
                    src={cart.imageUrl}
                    alt={cart.name}
                    width={75}
                    height={75} 
                  />
                </div>
                <div className={styles.description}>
                  <div>{cart.name}</div>
                  <div>{cart.price}</div>
                  <button onClick={() => removeCart(cart.id)}>삭제하기</button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <p>총 가격 : {totalPrice}</p>
        <p>총 수량 : {carts.length}</p>
      </div>
    </div>
  )
}
