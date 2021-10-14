import { IonLabel, IonButton, IonChip} from '@ionic/react';
import './Header.css';

import logo from '../assets/header_img.png'; 
import { MdMenu, MdSearch } from "react-icons/md";

const Header: React.FC = () => {
  return (

    // Header from https://github.com/shadeed/headers-css, thanks!
    <header className="site-header">
          <a href="/escada" >
              <img src={logo} alt ='logo' style={{margin:'.5em',width: '8rem',background:'transparent no-repeat center',backgroundSize:'cover'}}/>
          </a>    

          <div style={{justifyContent:'flex-end'}}>
            {/* <IonButton fill='clear' href='/escada'>
              <IonChip >
                <IonLabel color="#000">ESCADA</IonLabel>
              </IonChip>
            </IonButton> */}

            <IonButton fill='clear' href='/info'>
              <IonChip style={{width:'auto',height:'auto',margin:'-.5rem'}}>
                <IonLabel style={{color:'#000'}}>INFO</IonLabel>
              </IonChip>
            </IonButton>

            <IonButton fill='clear' href='/faqs' style={{margin:'-.5rem'}}>
              <IonChip style={{width:'auto',height:'auto'}}>
                <IonLabel style={{color:'#000'}}>FAQS</IonLabel>
              </IonChip>
            </IonButton>
            
            {/* <IonButton fill='clear'>
              <h1 style={{fontSize:'2.5rem', color:'#000'}}>
                  <MdMenu/>
              </h1>
            </IonButton> */}
                {/* <h1 style={{fontSize:'3.2rem'}}>
              <MdSearch/>
            </h1> */}
          </div>
          
        
        
        

        {/* <nav className="nav">
          <button className="nav__toggle" aria-expanded="false" type="button">
            {MdArticle}
          </button>
          <ul className="nav__wrapper">
            <li className="nav__item"><a href="/escada">HOME</a></li>
            <li className="nav__item"><a href="/info">INFO</a></li>
            <li className="nav__item"><a href="/faqs">FAQS</a></li>
          </ul>
        </nav> */}
        {/* <IonTabBar slot="top" style={{marginTop:'-4%',justifyContent:"right"}} color='#99b7ff'>        
        <IonTabButton tab="escada" href="/escada" layout="icon-end">
        <IonLabel class="text-labels">ESCADA</IonLabel>
        </IonTabButton>
        <IonTabButton tab="info" href="/info" layout="icon-end">
        <IonLabel class="text-labels">INFO</IonLabel>
        </IonTabButton>
        <IonTabButton tab="faqs" href="/faqs" layout="icon-end">
        <IonLabel class="text-labels">FAQS</IonLabel>
        </IonTabButton>
        </IonTabBar> */}


    
    </header>
    
    
  );
};

export default Header;
