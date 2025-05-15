import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

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

      {/* <LoadMoreData /> */}

      {/* Tree View Component/ menu UI component/ recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products"} />
    </>
  );
}

export default App;
