import React, { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Header from './components/Header';
import Content from './components/Content';

const Home: FC = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
};

export default Home;
