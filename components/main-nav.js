import { PrismicLink } from '@prismicio/react'
import { PrismicRichText, PrismicText } from "@prismicio/react"


const MainNav = ({ Navdata }) => (
    <div id="main-nav">
        <nav>
            <ul id="main-links">
            {Navdata.data.main_nav.map((navItem, index) => {
                return(
            <li key={index}>
                    <PrismicLink field={navItem.link}><PrismicText field={navItem.label} /></PrismicLink>
            </li>
            )})}
            </ul>
            <ul id="sign-in">
                <li><PrismicLink  field={Navdata.data.sign_in_link}><PrismicText field={Navdata.data.sign_in_label} /></PrismicLink></li>
                <li id="signup"><PrismicLink  field={Navdata.data.sign_up_link}><PrismicText field={Navdata.data.sign_up_label} /></PrismicLink></li>
            </ul>

            
        </nav>
        <style jsx>{`

            a {
                text-decoration : none;
            }
            #main-nav {
                width: 100%;
                background : blue;
                border: solid 1px #000;
                max-width: 100%;
                padding-right: 0vw;
                padding-left: 2vw;
                -webkit-box-pack: justify;
                -webkit-justify-content: space-between;
                -ms-flex-pack: justify;
                justify-content: space-between;
                -webkit-box-align: center;
                -webkit-align-items: center;
                -ms-flex-align: center;
                align-items: center;
            }
            
            nav {
                background : pink;
                display : flex;
                justify-content : space-between;

            }

            ul {
                display : inline-block
            }

            ul li {
                display : inline-block
                color: #000;
                font-size: 1rem;
                margin-right: 1.5vw;
                margin-left: 1.5vw;
                list-style : none;
            }

            #main-links {
                background : white;
                display : flex;
                margin : 0;
            }
            #main-links ul li a{
                color : red;
                text-decoration : none;
                padding: 0 20px;
            }
            #sign-in {
                display : flex;
                margin : 0;
            }
            #sign-in li{
                margin : 0
            }

            
        `}</style>
        <style jsx global>{`
            #main-nav a {
                text-decoration : none;
                line-height : 70px;
                display : block; 
            }
            #sign-in a{
                padding : 0 60px;
                background : pink;
                color : black;
                display: block;
                background: white;
                border: solid 1px #000;
            }
            #signup a{
                background : black;
                color : white;
            }
        `}</style>
    </div>
    
)

export default MainNav