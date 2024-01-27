import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';
import { useFavoritoContext } from 'context/Favoritos';

function Favoritos(){
    const { favorito } = useFavoritoContext();
    return (
        <>

            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                {favorito.map((fav) => <Card key={fav.id}  {...fav}/>)}
            </section>
        </>
    )
}

export default Favoritos;