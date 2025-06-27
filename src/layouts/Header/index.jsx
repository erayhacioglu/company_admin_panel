import { FaBars } from "react-icons/fa";
import "./header.scss";
import { FaGlobe } from "react-icons/fa6";
import { MdLightMode,MdNightlightRound } from "react-icons/md";
import useTheme from "../../hooks/useTheme";
import { useState } from "react";
import LanguageModal from "../../components/LanguageModal";
import { useTranslation } from "react-i18next";

const Header = ({ sidebar, setSidebar }) => {
  const {theme,toggleTheme} = useTheme();
  const [languageModal,setLanguageModal] = useState(false);
  const { t, i18n } = useTranslation();

  console.log('t', t)
  console.log('i18n', i18n.language)

  return (
    <>
    <header className="header">
      <div className="container">
      <div className="header_container">
        <button className="header_toggle_button" onClick={() => setSidebar(prev => !prev)}>
          <FaBars />
        </button>
        <div className="header_config">
          <div className="header_language" onClick={() => setLanguageModal(true)}>
            <FaGlobe/>
            <span className="header_language_text">{i18n?.language === "tr" ? "İngilizce":"Turkish"}</span>
          </div>
          <div className="header_mode" onClick={toggleTheme}>
            {
              theme === "light" ? <MdNightlightRound />:<MdLightMode/>
            }
          </div>
          <div className="header_user_menu"></div>
        </div>
        </div>
      </div>
    </header>
    <LanguageModal languageModal={languageModal} setLanguageModal={setLanguageModal}/>
    </>
  );
};

export default Header;
