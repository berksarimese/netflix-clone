import React, { useState } from 'react'
import '../styles/fonts.css'
import '../styles/faqstyles.css'
import { VscAdd } from "react-icons/vsc";
import ReadyToWatch from './ReadyToWatch';

const faq = [
    {
        id:1,
        title:'What is Netflix?',
        desc:`Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
        
        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
        switch: false
    },
    {
        id:2,
        title:'How much does Netflix cost?',
        desc:'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 63.99 TL to 130.99 TL a month. No extra costs, no contracts.',
        switch: false
    },
    {
        id:3,
        title:'Where can I watch?',
        desc:`Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        switch: false
    },
    {
        id:4,
        title:'How much does Netflix cost?',
        desc:'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
        switch: false
    },
    {
        id:5,
        title:'What can I watch on Netflix?',
        desc:'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
        switch: false
    },
    {
        id:6,
        title:'Is Netflix good for kids?',
        desc:`The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
        switch: false
    }
]

const Faq = () => {


    const [faqList, setFaqList] = useState(faq);

    const styleChanges = {
        open: {maxHeight: '100vh', padding: '1em'},
        rotate: {transform:'rotate(45deg)'}
    } 

    const tabSwitch = (id:number) => {
    
        const changeSwitch = faqList.map((item) => {
            if(item.id !== id) {
                return {
                    ...item, 
                    switch: false
                }
            } else {
                return {
                    ...item, 
                    switch: !item.switch
                }
            } 
        });
    
       setFaqList(changeSwitch);
    }
   


  return (
    <div className='position-relative tab-container'>
        <div className="card-box">
            <div className="tabs">
                <div className='faq-title' style={{marginBottom: '1.2rem'}}>Frequently Asked Questions</div>
                {
                    faqList.map((list) => (
                        <div className="tab" key={list.id}>
                            <div className="tab-title" onClick={()=>tabSwitch(list.id)}>{list.title}
                            <VscAdd className='tab-icon' style={list.switch ? styleChanges.rotate : {}}/>
                            </div>
                            <div className="tab-content" style={list.switch ? styleChanges.open : {}}>{list.desc}</div>
                        </div>
                    ))
                }
            </div>
            <ReadyToWatch />
        </div>
    

        <div className='card-bar'></div>
    </div>
  )
}

export default Faq