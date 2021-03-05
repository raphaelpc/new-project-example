import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <Head>
        <title>New Project Example</title>
      </Head>

      <Title>Have fun!</Title>
    </div>
  );
}
