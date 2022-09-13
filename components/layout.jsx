import Header from "./Header";
import Footer from "./Footer";
import HeaderSecondary from "./HeaderSecondary";
import HeaderDeals from "./HeaderDeals";

export default function Layout({ children }) {
  return (
    <>
    <HeaderDeals/>
      <Header />
      <HeaderSecondary/>
      {children}
      <Footer />
    </>
  );
}
