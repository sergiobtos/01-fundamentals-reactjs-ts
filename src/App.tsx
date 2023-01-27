import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostProps } from './components/Post';

import styles from './App.module.css';
import './global.css';

interface Post extends PostProps {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/48535068?v=4',
      name: 'Sergio Silva',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio.', },
      { type: 'link', content: 'sergio.design/doctorcare', },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/silverbowen.png',
      name: 'Larissa Silva',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio.', },
      { type: 'link', content: 'sergio.design/doctorcare', },
    ],
    publishedAt: new Date('2014-10-20 20:00:00'),
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts?.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

