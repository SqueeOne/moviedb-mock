import FilterableMovieList from "./components/FilterableMovieList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Wrapper component
function App() {
  return (
    <>
      <div className="container w-full mx-auto">
        <Header />
      </div>
      <div className="container max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto h-full">
        <FilterableMovieList />
      </div>
      <Footer />
    </>
  );
}

export default App;
