import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList(){
  return (
    <section className="product-list">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
