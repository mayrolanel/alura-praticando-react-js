import Banner from 'components/Banner';
import styles from './Favoritos.modules.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos(){
    return (
        <>

            <Banner imagem="favoritos"/>
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifacio' capa='https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png'/>
            </section>
        </>
    )
}

export default Favoritos;