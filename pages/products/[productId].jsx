import ProductHeader from "@/components/ProductHeader";
import { fetchProductById } from "@/api";

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
    const response = await fetchProductById(id);

    return {
        props: {
            message: '서버에서 보내준 메세지',
            productInfo: response.data
        }
    }
}