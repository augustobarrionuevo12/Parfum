const CartWidget = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary position-relative bg-secondary"
      >
        Mis compras
        <img src="/images/bx-cart-add.svg" alt="carrito" />
        <span className="position-relative top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span className="visually-hidden">New alerts</span>
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
