import React from 'react';
import { Grid, Box } from '@material-ui/core';

import Layout from 'src/components/Layout';
import VideoCard from 'src/components/VideoCard';


function Home( {data} ) {
  return (
    /** em Box p = padding */
    <Layout title="YouTube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12} >
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const data=[
    { 
      id: 1,
      title: 'NEXT.JS  O FRAMEWORK QUE VOCE DEVERIA CONHECER[PART #01]',
      authorId: 1,
      authorName: 'Alex Bruno',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next01.png',
      VideoUrl: 'url',
      updateAt: new Date()
    },
    { 
      id: 2,
      title: 'NEXT.JS  ENTENDENDO A RENDERIZAÇÃO ',
      authorId: 1,
      authorName: 'Alex Bruno',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next02.png',
      VideoUrl: 'url',
      updateAt: new Date()
    },
    { 
      id: 3,
      title: 'NEXT.JS  ROTAS ESTATICAS E DINAMICAS',
      authorId: 1,
      authorName: 'Alex Bruno',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      VideoUrl: 'url',
      updateAt: new Date()
    },
    { 
      id: 4,
      title: 'NEXT.JS  ROTAS ESTATICAS E DINAMICAS',
      authorId: 1,
      authorName: 'Alex Bruno',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/next03.png',
      VideoUrl: 'url',
      updateAt: new Date()
    },
  ]

  return {
    props: {
      data: JSON.parse(JSON.stringify(data))
    },
  }
}

export default Home;