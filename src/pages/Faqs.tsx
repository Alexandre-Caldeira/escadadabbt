import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Faqs.css';

const Faqs: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ExploreContainer name="FAQS page" />
      </IonContent>
    </IonPage>
  );
};

export default Faqs;
