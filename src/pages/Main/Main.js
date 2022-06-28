import Exchange from "../../components/Exchange/Exchange";
import Header from "../../components/Header/Header";

function Main({items, setItems}) {
  return (
    <>
      <Header />
      <main className="container">
        <Exchange items={items} setItems={setItems}  />
      </main>
    </>
  );
}

export default Main;
