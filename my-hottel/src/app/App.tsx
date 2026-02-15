import { Header } from "@/features/heder/heder";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
