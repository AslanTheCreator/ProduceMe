import React, { FC } from 'react';
import { Text } from 'native-base';
import { Layout } from '../../layout/Layout';
import Header from '../../UI/Header';
import Content from './Content';

const Settings: FC = () => {
  return (
    <Layout>
      <Header title="Settings" />
      <Content />
    </Layout>
  );
};

export default Settings;
