import closeIcon from "../assets/close-icon.svg";
type ItemProps = {
  imageUrlMobile: string;
  imageUrlDesktop: string;
  productName: string;
  productColor: string;
  productPrice: number;
  productQuantity: number;
};

export function Item({
  imageUrlDesktop,
  imageUrlMobile,
  productName,
  productColor,
  productPrice,
  productQuantity,
}: ItemProps) {
  return (
    <div className="w-full h-40 flex items-center justify-between bg-amber-300 mb-10 p-5">
      <div className="w-full h-full flex items-center gap-2">
        <div className="w-20 h-full flex items-center justify-center bg-amber-50 rounded-2xl p-2">
          <picture>
            <source media="(min-width: 640px)" srcSet={imageUrlDesktop} />
            <img
              src={imageUrlMobile}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        <div>
          <div>
            <p>{productName}</p>
            <p>{productColor}</p>
          </div>
          <div>
            <p>{productQuantity}</p>
          </div>
        </div>
      </div>
      <div>
        <p>{productPrice}</p>
        <img src={closeIcon} alt="close-icon" />
      </div>
    </div>
  );
}
