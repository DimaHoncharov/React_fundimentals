import React, {useState} from 'react';
import Btn from '../../atoms/Btn';
import Input from '../../atoms/Input';
import ListObject from '../../../utils/objects/ListObject';
import styles from './styles.module.css';

const TodoListForm = () => {

  const [listObject, setListObject] = useState(ListObject);
  const [listItem, setListItem] = useState({title: '',desc: '',})


  const addNewItem = () => {
    setListObject([...listObject, listItem]);
    setListItem({title: '',desc: '',});
  }

  return (
    <form className={styles.formWrapper}>
      <Input onChange={e => setListItem({...listItem, title: e.target.value})} type='text'/>
      <Input onChange={e => setListItem({...listItem, desc: e.target.value})} type='text'/>
      <Btn onClick={addNewItem} type='button'>Add</Btn>
    </form>
  ) 
}

export default TodoListForm;