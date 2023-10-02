import React from "react";

import logo from './io_logo.png';
import './App.css';

import Header from './modules/Header'
import {Members_vol1, Members_vol2, Members_vol3} from './modules/Members'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';


import ScrollToButton from "./modules/ScrollToButton";
import Section from "./modules/Section";

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import "./styles.css";
import YoutubeEmbed from "./modules/YoutubeEmbed";



const sections = ["top", "event", "contact", "footer"];


// -----------------
// ANIMATING SCROLL 
// https://codesandbox.io/s/scroll-to-element-react-hs0gj?from-embed=&file=/src/App.js



function App() {




  const images = [
      "images/0001.JPG",
      "images/0002.JPG",
      "images/0003.JPG",
      "images/0004.JPG",
      "images/0005.JPG",
      "images/0006.JPG",
      "images/0007.JPG",
      "images/0008.JPG",
      "images/0009.JPG",
      "images/0010.JPG",
      "images/0011.JPG",
      "images/0012.jpg",    // Live Vol.2
      "images/0013.jpg",
      "images/0014.jpg",
      "images/0015.jpg",
  ];

  const buttonStyle = {
      width: "30px",
      background: 'none',
      border: '0px',
      marginLeft: '2em',
      marginRight: '2em'
  };

  const slideSettings = {
      easing: "cubic-out",
      prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
      nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
  }


const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
];



  const descriptionRef = React.useRef(null);




  return (
    <div className="bg-black flex flex-col h-screen justify-between">

      <Header />

      {/*
      <Section title={sections[0]} />
      <Section ref={descriptionRef} title={sections[1]} />
      <Section id={sections[2]} title={sections[2]}>
        <ScrollToButton duration={1500} toRef={descriptionRef}>
          Scroll To Description!
        </ScrollToButton>
      </Section>
      <Section title={sections[3]} />
      */}



      <div className="bg-black text-sm text-white text-center">


        <img src={logo} className="m-auto" alt="logo" />
        

        <h1 className="font-bold text-2xl p-12">
          i—/o|.Labとは
        </h1>
        <div className="m-8 mb-32">
          <p className="text-center"><code className="underline px-4 font-bold">「i—/o|.Lab」</code>は、</p>
          <p className="text-center">記号(電気信号)の入出力を</p>
          <p className="text-center">コミュニケーションと捉え</p>
          <p className="text-center">記号(電気信号)の変換/情報化</p>
          <p className="text-center">人間と人間・人間と機械・機械と</p>
          <p className="text-center">機械のコミュニケーションに関する</p>
          <p className="text-center">思索や実践を展開する研究機関です。</p>
          <p className="text-center">あるインターフェ ースへの刺激を違う</p>
          <p className="text-center">インターフェースへの刺激に変換する</p>
          <p className="text-center">ことで生まれる表現や体験を思索・実装し</p>
          <p className="text-center">ライブイベントにて実践・検証を行う</p>
          <p className="text-center">芸術実践活動を行なっています。</p>
          
        </div>


        <Section id={sections[1]} ></Section>


        <div className="my-24 grid my-24 gap-y-6">
          <h2 className="font-thin text-6xl">i—/o|.Lab</h2>
          <h2 className="font-thin text-6xl">Live Vol. 3</h2>

            <img src="/images/ev_0004.png" className="w-full lg:w-[95%] xl:w-[90%] sm:w-full m-auto" alt="logo" />

        </div>


        <div className="mb-12 font-bold text-lg">
        Artists
        </div>

        <div className="mx-8">
          <Members_vol3 />
        </div>






        <div className="text-slate-500 mt-96 font-bold text-lg">
        Past Events
        </div>




        <div className="my-24 grid my-24 gap-y-6">
          <h2 className="font-thin text-6xl">i—/o|.Lab</h2>
          <h2 className="font-thin text-6xl">Live Vol. 2</h2>
          <a href="https://youtu.be/fQjM0o4XMfk"> 
            <img src="/images/ev_0003.png" className="w-full lg:w-[95%] xl:w-[90%] sm:w-full m-auto" alt="logo" />
          </a>
        </div>


        <div className="mb-12 font-bold text-lg">
        Artists
        </div>

        <div className="mx-8">
          <Members_vol2 />
        </div>

        <YoutubeEmbed embedId="fQjM0o4XMfk" />
        <div className="text-slate-500 mb-12 font-bold text-lg">
        Live Vol.2 Archives 
        </div>

        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>



        <Slide {...slideSettings} >

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[11]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[12]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[13]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[14]})` }}>
                </div>
            </div>
        </Slide>

        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>








        <div className="my-24 grid my-24 gap-y-6">
          <h2 className="font-thin text-6xl">i—/o|.Lab</h2>
          <h2 className="font-thin text-6xl">Live Vol. 1</h2>
          <a href="https://www.youtube.com/live/bybPmDyIfPg?feature=share">
            <img src="/images/ev_0002.png" className="w-full lg:w-[95%] xl:w-[90%] sm:w-full m-auto" alt="logo" />
          </a>
        </div>


        <div className="mb-12 font-bold text-lg">
        Artists
        </div>

        <div className="mx-8">
          <Members_vol1 />
        </div>
        
        <YoutubeEmbed embedId="-qNCvu2YzmM" />
        <div className="text-slate-500 mb-12 font-bold text-lg">
        Live Vol.1 Archives 
        </div>

        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>



        <Slide {...slideSettings} >

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[8]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[9]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[10]})` }}>
                </div>
            </div>
        </Slide>

        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>




        <div className="mt-36 mb-24 grid my-24 gap-y-6">
          <h2 className="font-thin text-6xl">i—/o|.Lab</h2>
          <h2 className="font-thin text-6xl">Live Vol. 0</h2>
          <a href="https://youtu.be/JkfjkvyW0iY">
          <img src="/images/ev_0001.png" className="w-full lg:w-[95%] xl:w-[90%] sm:w-full m-auto" alt="logo" />
          </a>
        </div>




        <div className="text-slate-500 mb-12 font-bold text-lg">
        Live Vol.0 Archives 
        </div>

        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>

        <Slide {...slideSettings} >

            <div className="each-slide-effect">

                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>

            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                </div>
            </div>
            
        </Slide>


        <div style={{background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,0,0,1) 35%, rgba(26,37,182,1) 100%)'}} 
          className="h-4 bg-red-800">
        </div>



        <div className="place-items-center mx-12 my-48">


          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="iaod_lab"
            options={{width: 700, height: 700}}
          />
        </div>

        <div className="text-center text-sm text-white p-24">
          <a className="underline" href="mailto:iaod.lab@gmail.com">contact : iaod.lab@gmail.com</a>
          <p className="my-5">Copyright (c) 2022-2023 i—/o|.Lab</p>
        </div>

        


      </div>



    </div>
  );
}

export default App;
