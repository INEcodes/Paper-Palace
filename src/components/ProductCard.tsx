import type { Product } from '../data/products';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <div className="product-price">
          <span className="price-symbol">₹</span>
          <span className="price-amount">{product.price.toFixed(2)}</span>
        </div>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}
