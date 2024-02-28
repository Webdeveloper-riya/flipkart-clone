// import logo from './logo.svg';
import "./App.css";
import Mynavbar from "./MyreactProject/Mynavbar.js";
import Myproducts from "./MyreactProject/Myproducts.js";
import Imgslider from "./MyreactProject/imgslider.js";
import Myelectronicproducts from "./MyreactProject/Myelectronicproducts.js";
import FooterSection from "./MyreactProject/footerSection.js";

function App() {
  return (
    <div>
      <Mynavbar></Mynavbar>
      <Myproducts></Myproducts>
      <Imgslider></Imgslider>
      <Myelectronicproducts></Myelectronicproducts>
      <FooterSection></FooterSection>
    </div>
  );
}

export default App;
