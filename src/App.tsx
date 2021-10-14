import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Escada from './pages/Escada';
import Info from './pages/Info';
import Faqs from './pages/Faqs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import EFooter from './components/EFooter';
import { GiThorHammer } from "react-icons/gi";



const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
    
      {/* <IonTabs> */}
        <IonRouterOutlet>
          
          <Route exact path="/escada">
            <Escada />
          </Route>
          <Route exact path="/info">
            <Info />
          </Route>
          <Route path="/faqs">
            <Faqs />
          </Route>
          <Route exact path="/">
            <Redirect to="/escada" />
          </Route>
          
        </IonRouterOutlet>
        
        {/* style={{width:"20%",position:"absolute",right:"0px"}} */}    
        {/* <IonTabBar color='#99b7ff' slot="bottom" style={{justifyContent:"right",backgroundColor:'#99b7ff'}}>        
          <IonTabButton tab="escada" href="/escada" layout="icon-end" >
            <IonLabel class="text-labels">ESCADA</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/info" layout="icon-end">
            <IonLabel class="text-labels">INFO</IonLabel>
          </IonTabButton>
          <IonTabButton tab="faqs" href="/faqs" layout="icon-end">
            <IonLabel class="text-labels">FAQS</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
      
      
    </IonReactRouter>

  </IonApp>

);

export default App;
