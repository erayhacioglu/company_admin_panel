// import { useTranslation } from "react-i18next";
// import useWindowDimensions from "./hooks/useWindowDimensions";
// import Helmet from "./components/Helmet";
// import useTheme from "./hooks/useTheme";
// import menuData from "./constants/menu";

// const App = () => {
//   const {width,height} = useWindowDimensions();
//   const { theme, toggleTheme } = useTheme()

//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang); // Dil değiştirildiğinde, 'languageChanged' event'ı tetiklenir
//   };

//   return(
//     <>
//       <Helmet titleKey="home.title" descriptionKey="home.description"/>
//     <div className="container py-5">
//       <div>
//         Width : 
//       {
//         width ?? ""
//       }
//       </div>
//       <div>
//         Height : 
//       {
//         height ?? ""
//       }
//       </div>
//       <div>
//       <h1>{t('welcome')}</h1>
//       <p>{t('description')}</p>
//       <div>
//         <button onClick={() => changeLanguage('en')}>English</button>
//         <button className="test" onClick={() => changeLanguage('tr')}>Türkçe</button>
//       </div>
//     </div>
//     <div>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</div>
//     <button onClick={toggleTheme}>{theme === "light" ? "Dark Mode":"Light Mode"}</button>
//     </div>
//     <ul>
//       {menuData.map((item, index) => (
//         <li key={index}>
//           {item?.icon} {t(item.name)}
//           {item.subMenu && (
//             <ul>
//               {item.subMenu.map((sub, idx) => (
//                 <li key={idx}>{t(sub.name)}</li>
//               ))}
//             </ul>
//           )}
//         </li>
//       ))}
//     </ul>
//     </>
//   );
// }

// export default App;

import {Routes,Route} from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";

const App = () => {
  useTheme()
  return(
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;