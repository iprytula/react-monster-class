import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import JSExpressions from "./components/JSExpressions";
import MainContent from "./components/mainContent";
import ProductInfo from "./components/ProductInfo";
import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <Header />
      {/* <MainContent />
      <JSExpressions />
      <Form /> */}
      <ProductInfo />
      <UserList />
      <Footer />
    </>
  )
};

export default App;