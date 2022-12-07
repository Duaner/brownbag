import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'


/**
 * @typedef {import("@prismicio/client").Content.ImageAndTextSlice} ImageAndTextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageAndTextSlice>} ImageAndTextProps
 * @param { ImageAndTextProps }
 */
const ImageAndText = ({ slice }) => (
  <section className={slice.variation}>
    <div className='Text'>
      <div className='TextContent'>
        <PrismicRichText field={slice.primary.title}/>
        <PrismicRichText field={slice.primary.description} className="description"/>
        <div className='button' >
          <div className='main-content'>
            <span >{ slice.primary.button_label }</span>
          </div>
          <PrismicLink field={slice.primary.button_link}> <span >{ slice.primary.button_label }</span> </PrismicLink>
          <div className='shadow yellow'></div>
          <div className='shadow pink'></div>
        </div>
      </div>
    </div>
    <div className='Image'>
      <div className="floating-illustration" src='https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f97a0f047aaa46093f3b3_paint-brush.svg'/>
      <div className='social-handle'>{ slice.primary.social_handle }</div>
      <img src={slice.primary.main_image.url} alt={slice.primary.main_image.alt} />
    </div>
    <style jsx>{`
        h1 {
          font-size : 40px;
          color : blue;
        }
        section {
          margin: 4em auto;
          text-align: center;
          align-items : stretch;
          flex-basis : auto;
          display : flex;
          flex-basis: auto;
          font-size : 18px;
          font-weight : 300;
          border : solid 1px #000;
        }
        .textRight .Text{
          order : 2;
          border-left : solid 1px #000;
          border-right : none;
        }
        .Text {
          width : 50%;
          display : flex;
          text-align : left;
          padding: 100px;
          background : #ff90e8;
          align-items : center;
          color : black;
          border-right : solid 1px #000;
        }
        .Image {
          width : 50%;
          display : block;
          padding: 6.5vw;
          background : #ffc900;
          position : relative;
        }
        .Image img{
          width : 100%;
          display : block;
          mask-image: url(./mask.svg);
          mask-repeat: no-repeat;
        }
        .button {
          display : inline-block;
          position : relative;
          margin-top : 20px;
          cursor: pointer;
        }
        .button .main-content{
          background : black;
          z-index : 2;
          display : inline-block;
          height : 60px; 
          background : black;
          line-height : 60px;
          text-align : center;
          color : white;
          padding: 0 30px;
          position : relative;
          
        }
        .button .main-content:hover{
          top : -4px;
          left : -4px;
          transform : translate(-5px, -5px);
          transition : transform 300ms
        }
        .button .shadow{
          display: block;
          position : absolute;
          top : 30px;
          left : 0;
          width : 100%;
          height : 100%;
          top : 0;
          left : 0;
          background : #ffc900;
          border : solid 1px black;
          z-index : 1;
        }

        .button .shadow:hover{
          top : -1px;
          left : -1px;
        }
        .button .shadow.pink {
          background : #ff90e8;
          z-index : 0;
          top : 0px;
          left : 0px;
        }
       
        .button:hover .shadow.{
          top : 20px;
          left : 20px;
        }
        .social-handle{
          display : block;
          position : absolute;
          bottom: 9.6vw;
          right: 9.6vw;
          background : #fff;
          z-index : 10000;
          border-radius : 40px;
          color : black;
          padding : 10px 20px;
          border: solid 1px black;
          font-weight : bold;
        }
        .floating-illustration{
          display : block;
          position : absolute;
          top : 9.6vw;
          left :  9.6vw;
          width : 120px; 
          height : 120px;
          background : url("https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f97a0f047aaa46093f3b3_paint-brush.svg") no-repeat;
          background-size : contain;
          z-index: 10000;
        }
        .floating-illustration img{
          width : 120px;
          display : block;
        }
    `}</style>
  </section>
)

export default ImageAndText