import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../components/store";
import Footer from "../components/footer";
import SearchBar from "../components/search";


export default function Index() {
  const store = useAppContext();

  const booksContainer = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };
 

  return (
    <div>
    <Layout>
      
      <div style={booksContainer}>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
        
      </div>
      
    </Layout>
   <Footer/>
    
    </div>
  );
}
