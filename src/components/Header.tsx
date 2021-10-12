import { IonTabBar,IonTabButton,IonLabel, IonContent} from '@ionic/react';
import './Header.css';

import logo from '../assets/header_img.png'; 
import { MdArticle } from "react-icons/md";

const Header: React.FC = () => {
  return (

    // Header from https://github.com/shadeed/headers-css, thanks!
    <header className="site-header">
        
      <div className="site-header__wrapper">
        <a href="/" >
            <img src={logo} alt ='logo' style={{margin:'.5em',width: '10em',background:'transparent no-repeat center',backgroundSize:'cover'}}/>
        </a>     
        
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
      </div>

    
    </header>
    
    
  );
};

export default Header;
