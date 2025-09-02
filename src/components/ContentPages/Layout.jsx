import Header from "../Header";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <main className="content">{children}</main>
    </div>
  );
}
