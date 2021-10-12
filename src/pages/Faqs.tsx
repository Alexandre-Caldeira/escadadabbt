import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Faqs.css';

import Header from '../components/Header';

const Faqs: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <ExploreContainer name="FAQS page" />
      </IonContent>
    </IonPage>
  );
};

export default Faqs;
