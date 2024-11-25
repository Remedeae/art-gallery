import Artitem from './components/ArtItem.jsx';
import bilateral from './assets/bilateral.jpg';
import dsa from './assets/dsa-the-hunter.jpg';
import enclosed from './assets/enclosed.jpg';
import likeSand from './assets/like-sand.jpg';
import lurker from './assets/lurker-below.jpg';
import persephone from './assets/persephone.jpg'
import redux from './assets/redux-of-the-inifite.jpg';
import right from './assets/right-between-the-eyes.jpg';
import riverSpirit from './assets/river-spirit.jpg';
import spino from './assets/spinosaurus.jpg';
import winterLantern from './assets/winter-lantern.jpg';

function Gallery() {
    return (
      <>
        <main>
          <h1>Remedy Art</h1>
          <div>
            <Artitem image={bilateral} imgAlt="Unicorn" titel="Biletaral" price="$100" technique="Acryllic" description="The game is afoot." />
            <Artitem image={spino} imgAlt="Spinosaurus" titel="Spinosaurus" price="$100" technique="Ink/aquarelle" description="Jurassic horros that haunts the night."/>
            <Artitem image={lurker} imgAlt="Turtle Shell" titel="Lurker Below" price="$60" technique="Acryllic" description="What seems solid isn't always hard, there are secrets just below the surface."/>
            <Artitem image={redux} imgAlt="Galaxy" titel="Redux of the Inifinite" price="$60" technique="Pastel/acryllic" description="Sometimes the line between the smallest and the largest things blurr."/>
            <Artitem image={enclosed} imgAlt="Abstract Doorway" titel="Enclosed" price="$30" technique="Acryllic" description="An exploration in relationships, one door closes andother opens."/>
            <Artitem image={likeSand} imgAlt="Sunset" titel="Like Sand" price="$200" technique="Oil/acryllic" description="Where the ocean meets the sky."/>
            <Artitem image={persephone} imgAlt="Flower" titel="Persephone" price="$50" technique="Acryllic" description="She who blooms in the dark."/>
            <Artitem image={right} imgAlt="Night Elf Hunter" titel="Rigth Between the Eyes" price="$70" technique="Ink" description="With the aim of a hawk, Quinne fells her prey swiftly."/>
            <Artitem image={riverSpirit} imgAlt="River Spirit" titel="River Spirit" price="$70" technique="Ink/aquarelle" description="Stacking stones on the river shore, mourning those who never resurfeced."/>
            <Artitem image={dsa} imgAlt="Dranei Hunter" titel="Dsa the Huntress" price="$50" technique="Pencil/ink" description="Dsa the dranei hunter with her trusty companions gettin ready to strike."/>
            <Artitem image={winterLantern} imgAlt="Winter Lantern" titel="Winter Lantern" price="$9999" technique="Ink/aquarelle" description="Despite humming a scilent song, an encounter will have dire consequences."/>
          </div>
  
        </main>
      </>
    );
  }

  export default Gallery;