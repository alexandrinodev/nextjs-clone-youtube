import React from 'react';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title="YouTube">
      Clone Youtube com Next.Js + Material-UI
      <Button variant="outlined" color="secondary">Hello World</Button>
    </Layout>
  );
}
