import "./App.css";
import React, {useEffect}from "react";
import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
import  MainContent  from "./components/presentational/MainContent/mainContent";
import { todos_from_API } from "./redux/actions";
import { connect } from "react-redux";


function App({todos_from_API}) {
  useEffect(() => {
    // Update the document title using the browser API
    todos_from_API();    
  
// eslint-disable-next-line 
  }, []);

  return (
    <div>
      <MainContent />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
 
  };
};

const mapDispatchToProps = {
  todos_from_API,
};

export default connect(mapStateToProps,mapDispatchToProps) (App);
