import React, { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Content from './Content';
import { PropsSportDetails } from '../../../navigation/types';
import Header from '../../UI/Header';

const SportDetails: FC<PropsSportDetails> = ({ route }) => {
  const { items } = route.params;

  return (
    <Layout isScrollView>
      <Header title={items.title} />
      <Content items={items} />
    </Layout>
  );
};

export default SportDetails;
