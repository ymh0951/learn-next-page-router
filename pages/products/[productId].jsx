import ProductHeader from "@/components/ProductHeader";
import axios from "axios";

export default function ProductDetailPage({ message, productInfo }) {
    return (
        <div>
            <ProductHeader title="상세 정보 페이지" />
            <div>ProductDetailPage: {message}</div>
            <div>{productInfo.name}</div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const id = context.params.productId;
    const response = await axios.get(`http://localhost:4000/products/${id}`);

    return {
        props: {
            message: '서버에서 보내준 메세지',
            productInfo: response.data
        }
    }
}