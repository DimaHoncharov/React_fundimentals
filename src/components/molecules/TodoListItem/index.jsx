import React from 'react';
import ListInfo from '../../atoms/ListInfo';
import Btn from '../../atoms/Btn';
import styles from './styles.module.css';

const TodoListItem = ({...props}) => 
  <li className={styles.listItemWrapper}>
    <ListInfo number={props.number} title={props.title} desc={props.desc}/>
    <Btn onClick={props.deleteMethod}>Delete</Btn>
  </li>

export default TodoListItem;