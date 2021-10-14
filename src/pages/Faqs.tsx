import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Faqs.css';

import Pergunta from '../components/Pergunta';
import Header from '../components/Header';
import EFooter from '../components/EFooter';

const Faqs: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <Header/>
        <ExploreContainer name="PÁGINA COM AS FAQS" />

        <div className='divDasperguntas'>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
        </div>

      <EFooter/>
      </IonContent>
    </IonPage>
  );
};

export default Faqs;
