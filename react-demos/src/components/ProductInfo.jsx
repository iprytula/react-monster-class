function ProductInfo() {
  const product = {
    name: 'iPhone 14 Pro',
    price: 999,
    description: 'The latest iPhone with advanced features and improved performance.',
    imageUrl: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_105225846?x=536&y=402&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=536&ey=402&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=536&cdy=402'
  }

  return (
    <div className="product-info">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  )
}

export default ProductInfo