import React from 'react';
import CartItems from '../../components/CartItems/CartItems';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

const Cart = () => {
    return (
      <div className="py-12 md:py-20 dark:bg-gray-500">
        <Container>
          <div className='md:hidden mt-5'>
            <SectionHeader heading={"SHOPPING CART"} />
          </div>
          <CartItems />
        </Container>
      </div>
    );
};

export default Cart;