import React from 'react';
import ListObject from '../../../utils/objects/ListObject';
import TodoListItem from '../../molecules/TodoListItem';
import styles from './styles.module.css';

const TodoList = () => 
  <ul className={styles.listWrapper}>
    {ListObject.map(item => 
      <TodoListItem
        key={item.id}
        number={item.id}
        title={item.title}
        desc={item.desc}
        deleteMethod={() => alert('Delete method')}
      />
    )}
  </ul>

export default TodoList;