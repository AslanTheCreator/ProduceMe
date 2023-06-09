import React, { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Header from '../../UI/Header';
import Content from './Content';

const Profile: FC = () => {
  return (
    <Layout>
      <Header title="Profile" />
      <Content />
    </Layout>
  );
};

export default Profile;
