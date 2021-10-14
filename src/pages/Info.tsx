import { IonButton, IonContent, IonPage } from '@ionic/react';
import './Info.css';

import Header from '../components/Header';
import { MdCalendarToday } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';

const Info: React.FC = () => {
  
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header/>

        <div style={{display:'flex',marginLeft:'4%',marginRight:'4%',marginTop:'3%', justifyContent:'space-between', alignItems:'center'}}>
        <IonButton fill='clear' shape='round' style={{display:'flex', height:'5rem',justifyContent:'flex-start', alignItems:'center'}}
        onClick={(event) =>window.open('https://www.soc.ufv.br/wp-content/uploads/Resolução-Cepe-7-2021-calendário-PER-3.pdf')}>

          

            <MdCalendarToday style={{fontSize:'300%', color:'#000'}} />

            <h2 style={{margin:'1%', fontSize:'150%', color:'#000'}}> 
              Calendário da graduação </h2>

          
        </IonButton>

        <IonButton fill='clear' shape='round' style={{display:'flex', height:'5rem',justifyContent:'flex-start', alignItems:'center'}}
        onClick={(event) =>window.open('https://instagram.com')}>

            <h2 style={{margin:'1%', fontSize:'150%', color:'#000'}}> 
                          Nossos posts </h2>

            <BsInstagram style={{fontSize:'300%', color:'#000'}} />

            

          
        </IonButton>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Info;
