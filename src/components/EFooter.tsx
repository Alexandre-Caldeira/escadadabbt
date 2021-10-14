import { IonChip, IonLabel } from '@ionic/react';
import './EFooter.css';
// import { BsSuitHeartFill } from "react-icons/bs";
import { GiThorHammer } from "react-icons/gi";
import logoCAELT from '../assets/raioamarelo.png'; 

const EFooter: React.FC = () => {
  return (
    <footer style={{display:'flex', justifyContent:'space-between', alignItems:'center',position:'relative',top:'85%',marginTop:'1rem',height:'18%', width:'100%',backgroundColor:'#99b7ff'}}>

      <div style={{position:'relative', justifyContent:'flex-start'}}>
        <img src={logoCAELT} alt ='logo' 
        style={{margin:'.5em',width: '5rem',maxHeight:'55%',
        background:'transparent no-repeat center',backgroundSize:'cover'}}/>
      </div>

      {/* style={{display:'flex',position:'absolute'}} */}
      <div>
        <h1 style={{color:'#000',fontSize:'1.2rem'}}>
          Feito com &nbsp; <GiThorHammer/> &nbsp; por Alexandre Caldeira.
        </h1>
      </div>

      <div style={{position:'relative', right:'1rem'}}>
        <IonChip style={{width:'auto',height:'2.5rem'}}>
                <IonLabel style={{color:'#000',fontSize:'1rem'}}>Gestão 21-22</IonLabel>
        </IonChip>
        {/* <h1 style={{color:'#000',fontSize:'1.2rem'}}>
        Gestão 21-22
        </h1> */}
      </div>

    </footer>
      // {/* <div style={{display:'flex', justifyContent:'right'}}>
      // <IonButton>
      //   <IonLabel>ESCADA</IonLabel>
      // </IonButton>
      // <IonButton>
      //   <IonLabel>INFO</IonLabel>
      // </IonButton>
      // <IonButton>
      //   <IonLabel>FAQS</IonLabel>
      // </IonButton>
      // </div> */}
    
  );
};

export default EFooter;
