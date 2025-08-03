import "./Product.css";
import Price from "./price";

function Product({ title, idx }) {
  let oldPrices = ["12,583", "11,456", "6,429","3,999"];
  let newPrices = ["12,000", "10,000", "4,999", "3,100"];
  let description = ["designed for ipad pro", "intuitive surface", "9,000 DPI", "wireless",];
  
    return (
      <div className="Product">
        <h4>{title}</h4>
       <p>{description[idx]}</p>
       <Price oldPrice={oldPrices[idx]} newPrice={newPrices [idx]} />
      </div>
    );
}

export default Product;