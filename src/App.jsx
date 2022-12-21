import TextContent from "./components/text-content/TextContent";
import Calculator from "./components/calculator/Calculator";

import "./assets/scss/app.scss";

const App = () => {
  return (
    <div className="calculator-page-wrapper">
      <TextContent />
      <Calculator />
    </div>
  );
};

export default App;
