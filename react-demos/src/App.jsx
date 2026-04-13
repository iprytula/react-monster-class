import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import IconComponent from "./components/IconComponent";
import JSExpressions from "./components/JSExpressions";
import MainContent from "./components/mainContent";
import ProductInfo from "./components/ProductInfo";
import ProfileCard from "./components/ProfileCard";
import StyledCard from "./components/StyledCard";
import UserList from "./components/UserList";

const App = () => {
  return (
    <>
      <Header />
      {/* <MainContent />
      <JSExpressions />
      <Form /> */}
      {/* <ProductInfo />
      <UserList />
      <Footer /> */}
      <StyledCard>
        <h2>Styled Card</h2>
        <p>This is a card with custom styles applied.</p>
      </StyledCard>
      <ProfileCard>
        <h2>Profile Card</h2>
        <p>This is a profile card with custom styles applied.</p>
      </ProfileCard>
      <IconComponent />
    </>
  )
};

export default App;