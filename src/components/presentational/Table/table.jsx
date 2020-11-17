import Todo from "../../container/Todo/todo";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React, { Fragment, useEffect, useState } from "react";
import TotalTodo from "../../container/TotalTodo/totalTodo";
import { NewTodo } from "../../container";
import DataGrid, { Column, Pager, Paging } from "devextreme-react/data-grid";
import { todo_completed, todo_removed } from "../../../redux/actions";
import { useTranslation } from "react-i18next";
import './table.scss';
// import store from "../redux/store";

function TodoTable({ todo_completed, todo, todo_removed }) {
  const [sums, setSums] = useState([]);

  const { t, i18n } = useTranslation();

  //const todoList = useSelector(state=>state.todo);
  const calculateSums = (todo) => {
    let sumArray = [];
    const totalSum = todo.length;
    let completedSum = todo.filter((element) => element.completed === true)
      .length;
    let openSum = todo.filter((element) => element.completed === false).length;
    sumArray.push({ type: t("pages.todo.total_todos"), val: totalSum });
    sumArray.push({ type: t("pages.todo.completed_todos"), val: completedSum });
    sumArray.push({ type: t("pages.todo.open_todos"), val: openSum });

    setSums(sumArray);
    // setSums({"totalSum":totalSum,"completedSum":completedSum,"openSum":openSum});
  };
  useEffect(() => {
    // Update the document title using the browser API
    
    calculateSums(todo);
    // eslint-disable-next-line
  }, [todo]);
  const renderGridCell = (data) => {
    const { id, completed } = data.data;
    console.log("data", data);
    return (
      <div>
        <button
          onClick={() => {
            todo_completed(id);
          }}
        >
          {completed ? t("pages.todo.reopen") : t("pages.todo.completed")}
        </button>
        <button
          onClick={() => {
            todo_removed(id);
          }}
        >
          {t("pages.todo.delete")}
        </button>
        <Link to={`/todo/${id}`}>
          <button>{t("pages.todo.details")}</button>
        </Link>
      </div>
    );
  };
  return (
    <Fragment>
      <TotalTodo sums={sums} />
      <NewTodo />

      <DataGrid dataSource={todo} showBorders={true}>
        {/* <Editing
          mode='popup'
          allowAdding={true}
          allowDeleting={true}
          allowUpdating={true}
        >
          <Popup showTitle={true} title='Add New Todo' />
        </Editing> */}
        <Column dataField='title' caption='Description' />{" "}
        {/* <Column
          sortOrder='desc'
          width={30}
          dataField='completed'
          caption='Status'
        /> */}
        <Column dataField='id' cellRender={renderGridCell} />
        <Paging defaultPageSize={5} />
        <Pager showPageSizeSelector={true} allowedPageSizes={[5, 10, 15]} />
      </DataGrid>

      {/* this is classic way to list */}

      {/* <ul>
        {todo.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title }
            id={todo.id}
            completed={todo.completed }
          />
        ))}
      </ul> */}
    </Fragment>
  );
}

// FOR BETTER PERFORMANCE TRY TO BE SPESIFIC WHICH PART OF THE STATE YOU WANT TO LISTEN AND TRIGGER, OTHERWISE IT WILL TRIGGER ALL TIME FOR ANY CHANGE
// second paramater can be own props as  (state,ownprops) for this sample we dont need to use ownProps
const mapStateToProps = (state) => {
  return {
    //count : state.input,
    todo: state.todo,
  };
};
const mapDispatchToProps = {
  todo_removed,
  todo_completed,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTable);
