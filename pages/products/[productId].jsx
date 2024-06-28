import ProductHeader from "@/components/ProductHeader";

export default function ProductDetailPage({ productId }) {
    return (
        <div>
            <ProductHeader title="상세 정보 페이지" />
            <div>{productId}</div>
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.params.productId);

    return {
        props: { productId: context.params.productId }
    }
}