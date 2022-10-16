// 404.js

import styled from 'styled-components';
import { Link } from '../src/components/atoms';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function FourOhFour() {
  return (
    <Container>
      <h1>404 - Page Not Found</h1>
      <Link href='/'>Go back home</Link>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Not Found',
    },
  };
}
export default FourOhFour;
