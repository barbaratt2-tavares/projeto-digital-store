import logoImage from '../assets/logo-footer.svg';

const Footer = () => {
  return (
    <div>
      <img 
        src={logoImage} 
        alt="Logomarca da aplicação" 
        style={{ width: '253px', height: '44px' }} 
      />
    </div>
  );
};

export default Footer;