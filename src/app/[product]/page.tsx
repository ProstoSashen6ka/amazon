export default async function Product({
    params,
  }: {
    params: Promise<{ product: string }>
  }){
    const product = (await params).product
    return <div>My Post: {product}</div>
  }