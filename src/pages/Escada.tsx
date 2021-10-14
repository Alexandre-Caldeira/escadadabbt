import { IonContent, IonPage, IonButton } from '@ionic/react';
import './Escada.css';

import Header from '../components/Header';
// import { GiThorHammer } from "react-icons/gi";
import logoCAELT from '../assets/raioamarelo.png'; 
import { MdCalendarToday } from 'react-icons/md';
import { BsInstagram } from 'react-icons/bs';
import { SiLinktree } from 'react-icons/si';
import { GrAssistListening } from 'react-icons/gr';

const Escada: React.FC = () => {
  return (
    <IonPage >

      <IonContent fullscreen>
      <Header/>
      <div style={{display:'flex', borderRadius:'2.5rem',backgroundColor:'#99b8ff9f',height:'80%',marginLeft:'4%',marginRight:'4%',marginTop:'3%', justifyContent:'space-between', alignItems:'flex-start'}}>
      
      
      <div style={{display:'flex',marginLeft:'4%',marginRight:'4%',marginTop:'3%', justifyContent:'space-between', alignItems:'center'}}>
        <IonButton fill='clear' shape='round' style={{display:'flex', height:'5rem',justifyContent:'flex-start', alignItems:'center'}}
        onClick={(event) =>window.open('https://www.soc.ufv.br/wp-content/uploads/Resolução-Cepe-7-2021-calendário-PER-3.pdf')}>

          

            <MdCalendarToday style={{fontSize:'300%', color:'#000'}} />

            <h2 style={{margin:'1%', fontSize:'150%', color:'#000'}}> 
            &nbsp; &nbsp; Calendário da graduação </h2>

          
        </IonButton>

        <IonButton fill='clear' shape='round' style={{display:'flex', height:'5rem',justifyContent:'flex-start', alignItems:'center'}}
        onClick={(event) =>window.open('https://www.instagram.com/caelt.ufv/')}>
          {/* color:'#99b7ff'  rgb(255,255,127)*/}

          <BsInstagram style={{fontSize:'300%', color:'rgb(0,0,0)'}} />

            <h2 style={{margin:'1%', fontSize:'150%', color:'rgb(0,0,0)'}}> 
            &nbsp; &nbsp; Nossos posts </h2>

            

        </IonButton>

        <IonButton fill='clear' shape='round' style={{display:'flex', height:'5rem',justifyContent:'flex-start', alignItems:'center'}}
        onClick={(event) =>window.open('https://linktr.ee/CAELTUFV')}>
          <SiLinktree style={{fontSize:'300%', color:'rgb(0,0,0)'}} />
            <h2 style={{margin:'1%', fontSize:'150%', color:'rgb(0,0,0)'}}> 
            &nbsp; &nbsp; Oportunidades </h2>
        </IonButton>

        </div>

      </div>


      <IonButton fill='clear' shape='round' 
      style={{position:'absolute',top:'50%', left:'25%', height:'5rem', alignItems:'center', borderRadius:'3rem', backgroundColor:'#80808052'}}
        onClick={(event) =>window.open('https://forms.gle/UPfHqGARL2EVBJC86')}>
          <GrAssistListening style={{fontSize:'500%', color:'rgb(0,0,0)'}} />
            <h2 style={{margin:'1%', fontSize:'300%', color:'rgb(0,0,0)'}}> 
            &nbsp; &nbsp; Ouvidoria Temporária </h2>
        </IonButton>


      <div style={{display:'flex',position:'absolute', top:'80%', left:'88%' }}>
          <img src={logoCAELT} alt ='logo' 
          style={{margin:'.5em',width: '5rem',maxHeight:'55%',
          background:'transparent no-repeat center',backgroundSize:'cover'}}/>
      </div>

         {/* <h1>Some example text..
Scroll back up again to "remove" the sticky position.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit. Lorem ipsum dolor sit amet, consectetur .</h1>  */}
      </IonContent>
    </IonPage>
  );
};

export default Escada;
