import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"}
      /> */}
      <LoadMoreData />
    </>
  );
}

export default App;
