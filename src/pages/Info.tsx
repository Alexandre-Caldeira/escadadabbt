import { IonContent, IonPage } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Info.css';

import Header from '../components/Header';
import EFooter from '../components/EFooter';


const Info: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>
        <ExploreContainer name="PÁGINA DE INFORMAÇÕES GERAIS" />
        <EFooter/>
      </IonContent>
    </IonPage>
  );
};

export default Info;
