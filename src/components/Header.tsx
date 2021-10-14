import { IonLabel, IonButton, IonChip, IonToggle} from '@ionic/react';
import './Header.css';

import logo from '../assets/header_img.png'; 
import { MdMenu, MdSearch } from "react-icons/md";

const Header: React.FC = () => {
  // function onClick(this: any, event: { detail: { checked: any; }; }){
  //   // let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  //   // systemDark.addListener(this.colorTest);
  //   if(event.detail.checked){
  //     document.body.setAttribute('data-theme', 'dark');
  //   }
  //   else{
  //     document.body.setAttribute('data-theme', 'light');
  //   }
  // }

  // Use matchMedia to check the user preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  toggleDarkTheme(prefersDark.matches);

  // Listen for changes to the prefers-color-scheme media query
  prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

  // Add or remove the "dark" class based on if the media query matches
  function toggleDarkTheme(shouldAdd: boolean | undefined) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  return (

    // Header from https://github.com/shadeed/headers-css, thanks!
    <header className="site-header">
      <div style={{display:'flex', width:'96%', justifyContent:'space-between', alignItems:'center'}}>

      
          <a href="/escada" style={{justifyContent:'flex-start'}} >
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

              {/* onIonChange={event => onClick(event)} */}
            {/* <IonToggle id="themeToggle" slot="end" ></IonToggle> */}
            
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

      </div>
    
    </header>
    
    
  );
};

export default Header;
