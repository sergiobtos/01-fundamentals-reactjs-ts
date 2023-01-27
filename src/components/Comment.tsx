import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar'
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1;
    })
  }

  return( 
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://vectorified.com/images/avatar-icon-png-18.jpg" alt=""/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}> 
        <header>
          <div className={styles.authorAndTime}>
            <strong>Alex J.</strong>      
            <time title="11 de Maio as 08:13" dateTime="2022-05-11 08:13:30">About 2 hours ago</time>
          </div>
          <button title="Delete comment" className={styles.button} onClick={handleDeleteComment}>
            <Trash size={24}/>
          </button>
        </header>
         <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp/>
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div> 
  )
}