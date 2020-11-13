import React, { useState } from "react";
import * as actions from "../../../redux/actions";
import { useDispatch } from "react-redux";
import notify from "devextreme/ui/notify";
import { Popup } from "devextreme-react/popup";
import Button from "devextreme-react/button";
import "./newTodo.scss";
import TextBox from "devextreme-react/text-box";
import {useTranslation} from 'react-i18next';


export default function NewTodo() {
  //here you can take all states or you can take as special one
  //const state = useSelector(state=>state)
  const [input, setInput] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const dispatch = useDispatch();
  const {t,i18n} = useTranslation();


  const renderButton =(buttonData)=>{
    return (<p className="renderButton-inside" >ADD</p>);
  };
  const renderContent = () => {
    return (
      //   <form onSubmit={AddTodo}>
      //     <label htmlFor='newTodo'>New todo</label>
      //     <input
      //       onChange={(e) => handleInputChange(e)}
      //       type='text'
      //       name='newTodo'
      //       value={input}
      //     />
      //     <input type='submit' value='Add New Todo ' />
      //   </form>
      <div>
        <TextBox
          placeholder='Enter todo here...'
          showClearButton={true}
          valueChangeEvent='keyup'
          onValueChanged={handleValueChanged}
        ></TextBox>
        <div className = "renderButton-outside">
        <Button
          onClick={AddTodo}
          type='success'
          width={130}
          height={35}
          stylingMode="contained"
          render={renderButton}
        />
        </div>
      </div>
    );
  };

  const AddTodo = (e) => {
    // e.preventDefault();
    console.log(input);
    if (input) {
      dispatch(actions.todo_add(input, false));
      setInput("");
      notify(t("pages.todo.messages.added_ok"), "success", 1000);
      setIsPopupVisible(false);
    } else {
      notify(t("pages.todo.messages.added_ko"), "error", 1000);
    }
  };
  //  const UpdateInput = e =>{
  //     // store.dispatch(actions.input_changed(e.target.value))
  //     console.log(e.target.value)
  //  }
  const handleValueChanged = (e) => setInput(e.value);
  const hidePopup = () => setIsPopupVisible(false);
  const showPopup = () => setIsPopupVisible(true);

  return (
    <React.Fragment>
      <div>
  <span className='add-text'>{t("pages.todo.add_new_todo")}</span>
        <Button icon='plus' onClick={showPopup} />
      </div>
      <Popup
        title={t("pages.todo.add_new_todo")}
        height={180}
        width={500}
        visible={isPopupVisible}
        contentRender={renderContent}
        onHiding={hidePopup}
      />
    </React.Fragment>
  );
}
