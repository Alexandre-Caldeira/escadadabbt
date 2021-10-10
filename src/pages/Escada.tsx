import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Escada.css';

const Escada: React.FC = () => {
  return (
    <IonPage>
      {/* //TODO: criar header */}
      {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Info</IonTitle>
          </IonToolbar>
        </IonHeader> */}

      <IonContent fullscreen>
    
        <ExploreContainer name="HOME page" />
        
      </IonContent>
    </IonPage>
  );
};

export default Escada;
