import rootreducer from "../Reduser/Index";
 import { legacy_createStore as CreateStore } from "redux";
  const Mainstore=CreateStore(rootreducer);
  export default Mainstore;
  