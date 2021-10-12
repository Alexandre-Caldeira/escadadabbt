import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';

import Header from '../components/Header';

const Info: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <ExploreContainer name="Info page" />
      </IonContent>
    </IonPage>
  );
};

export default Info;
