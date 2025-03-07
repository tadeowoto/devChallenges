import { Item } from "./Item";
import { products } from "../mock/items";

export function Purchase() {
  return (
    <section>
      <article>
        <div>
          {products.map((product) => (
            <Item
              key={product.id}
              imageUrlDesktop={product.desktopImage}
              imageUrlMobile={product.movileImage}
              productName={product.name}
              productColor={product.color}
              productPrice={product.price}
              productQuantity={product.quantity}
            />
          ))}
        </div>
        <div>Cupon</div>
      </article>
      <div></div>
    </section>
  );
}
