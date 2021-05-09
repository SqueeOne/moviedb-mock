import FilterableMovieList from "./components/FilterableMovieList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Wrapper component
function App() {
  return (
    <>
      <div className="w-full mx-auto">
        <Header />
      </div>
      <div className="container max-w-lg md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto h-full">
        <FilterableMovieList />
      </div>
      <Footer />
    </>
  );
}

export default App;
