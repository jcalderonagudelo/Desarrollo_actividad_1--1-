import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../components/store";
import Footer from "../components/footer";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);

  return (
    <div>
    <Layout>
      <h2>{item?.title}</h2>
      <div>{item?.cover ? <img src={item.cover} width="400" /> : ""}</div>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.completed ? "Completado" : "No terminado"}</div>
      <div>{item?.review}</div>
    </Layout>
    <Footer/>
    </div>
  );
}
