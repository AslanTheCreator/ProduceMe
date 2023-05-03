import React, { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Header from './Header';
import Content from './Content';

const Tasks: FC = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  );
};

export default Tasks;
