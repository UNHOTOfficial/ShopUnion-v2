import Header from "./header";
import Footer from "./footer";
import HeaderSecondary from "./headerSecondary";
import HeaderDeals from "./headerDeals";

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
