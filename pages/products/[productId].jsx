export default function ProductDetailPage({ productId }) {
    return (
        <div>{productId}</div>
    )
}

export async function getServerSideProps(context) {
    console.log(context.params.productId);

    return {
        props: { productId: context.params.productId }
    }
}