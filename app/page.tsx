import Header from "./components/header/Header";
import Warning from "./components/warning/Warning";
import TableComponent from "./components/table-component/TableComponent";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Warning />
      <TableComponent />
    </div>
  );
}
