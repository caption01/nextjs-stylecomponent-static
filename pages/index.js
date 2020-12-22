import Card from "../component/card";
import { useProps, withProps2 } from "../helper/withProps";

const IndexPage = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Card />
    </div>
  );
};

export default useProps("hello")(IndexPage);
// export default withProps2("hello")(IndexPage);
