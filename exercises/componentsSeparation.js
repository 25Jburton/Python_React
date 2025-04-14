/*
    Separation of stateful vs stateless components 

    - Stateful 
    (Has state control, performs calculations based on props, or manage logic)

    - Stateless 
    (Presentation rendering of JSX)

    Nest these into 2 folders (Containers = stateful, Components = stateless) 

    import the required components into our container and make sure all JSX is broken out
    - In the components file pass any props required to our function - example - function x({src, isFavorite})
    - Call our components with any props appended 
    <example src={src} isFavorite={currentGP === favoriteGP}/>
*/
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";

function GuineaPigsContainer() {
    const [currentGP, setCurrentGP] = useState(0);
      const [favoriteGP, setFavoriteGP] = useState(0);
      const src = GUINEAPATHS[currentGP];
  
    const favoriteChangeHandler = (event) => {
      setFavoriteGP(parseInt(event.target.value));
    }
  
    const resetFavoriteHandler = () => {
      setFavoriteGP(0);
    }
  
    useEffect(() => {
          const intervalId = setInterval(() => {
              setCurrentGP(prevGP => {
                  const nextGP = prevGP + 1;
                  return nextGP % GUINEAPATHS.length;
              });
          }, 5000)
          return () => clearInterval(intervalId);
      }, []);

    return (
        <>
        <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP}/>
        <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
        </>
    );
}

// Last export the compiled container to be rendered by the root
root.render(<GuineaPigsContainer />);