import SearchBar from "../ui/foryou/SearchBar";
import SideNav from "../ui/foryou/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="wrapper">
        <SearchBar />
        <SideNav />
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
