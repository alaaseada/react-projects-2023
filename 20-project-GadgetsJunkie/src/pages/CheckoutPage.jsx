import styled from 'styled-components';
import { PageHero, StripeCheckout } from '../components';
// extra imports
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { order_total } = useCartContext();
  return (
    <main>
      <PageHero title='Checkout' />
      <Wrapper className='page'>
        {order_total ? (
          <StripeCheckout />
        ) : (
          <div className='empty'>
            <h2>You Cart is Empty</h2>
            <Link className='btn' to='/products'>
              Fill it
            </Link>
          </div>
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;
export default CheckoutPage;
