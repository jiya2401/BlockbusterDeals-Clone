import Product from "./product.jsx";

function ProductTab() {
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

    return (
      <div style={styles}>
     <Product title="Apple Pencil (2nd Gen)" idx={0} />
     <Product title="AirNote Pen V2" idx={1}/>
      <Product title="Zebronics Zeb-Max Chroma" idx={2}/>
       <Product title="Logitech MX Master" idx={3} />
    </div>
    );   
}

export default ProductTab;