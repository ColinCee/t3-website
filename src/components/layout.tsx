import Navbar from "./navbar";

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div id="layout-root" className="flex flex-col">
      <Navbar />
      {children}
    </div>
  );
}
