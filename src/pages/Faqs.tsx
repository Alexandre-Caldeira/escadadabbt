import { IonContent, IonPage } from '@ionic/react';
import './Faqs.css';

import Pergunta from '../components/Pergunta';
import Header from '../components/Header';

const Faqs: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <Header/>

        <div className='divDasperguntas'>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
          <Pergunta/>
        </div>



      </IonContent>

      
    </IonPage>
  );
};

export default Faqs;
