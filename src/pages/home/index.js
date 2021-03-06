import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeCurrentData, changeIndex } from "./store/actionCreators";
import { Container } from "./style";
import "./index.css";
import { Button } from "antd-mobile";
import { BASE_URL } from "../../config/url";
// import { log } from '../../utils/decorators'

function Home(props) {
  const { testdata, startIndex } = props;
  const { changeDataDispatch, changeIndex } = props;
  useEffect(() => {
    getData();
  }, []);
  const haha = (e) => {
    changeDataDispatch({ name: "2222" });
    changeIndex(2);
  };
  // @log
  const getData = () => {
    console.log("测试装饰器zzz111··········");
  };
  return (
    <div>
      ----home----
      <Button type="primary">按需导入</Button>
      <button onClick={(e) => haha(e)}>redux 测试 数据流 {startIndex}--</button>
      <Container></Container>
      <div className="box">{BASE_URL}</div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  testdata: state.getIn(["home", "currentData"]).toJS(),
  startIndex: state.getIn(["home", "startIndex"]),
});
// 映射dispatch到props上
const mapDispatchToProps = (dispatch) => {
  return {
    changeDataDispatch(data) {
      dispatch(changeCurrentData(data));
    },
    changeIndex(num) {
      dispatch(changeIndex(num));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Home));
