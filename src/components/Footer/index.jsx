import "./style.css";

const Footer = () => {
    return <footer className="face" >
       <a 
       href="https://www.facebook.com/sasa.djuric.315"
       target="_blank" rel='noreferrer'>
       <img
           src={`${process.env.PUBLIC_URL}/face-logo.png`}
           alt="face"
           />
       </a>
       <a 
       href= "https://www.instagram.com/sasadjuric333/"
       target="_blank" rel='noreferrer' >
       <img
           src={`${process.env.PUBLIC_URL}/insta-logo.png`}
           alt="insta"
           />
       </a>
        <a 
           href="https://www.linkedin.com/in/sasa-djuric-a259331b8/"
           target="_blank" rel='noreferrer'>
       <img
           src={`${process.env.PUBLIC_URL}/linkedin-logo.png`}
           alt="linkedin"
           />
       </a>
       <a 
       href="https://github.com/ortodoxman333"
       target="_blank" rel='noreferrer' >
       <img
           src={`${process.env.PUBLIC_URL}/git-logo.png`}
           alt="git"
           />
       </a>
    </footer>;
};

export default Footer;
