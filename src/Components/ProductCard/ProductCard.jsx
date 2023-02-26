export const ProductCard = (props) => {
  let { tittle, price } = props;

  return (
    <div>
      <h1>{tittle}</h1>
      <h2> {price}</h2>
    </div>
  );
};
