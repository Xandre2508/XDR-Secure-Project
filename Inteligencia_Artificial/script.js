let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=0.9
    text_speak.pitch=1
    text_speak.volume=1
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <4){
        speak("Good afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
    window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})

function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hi")||message.includes("hey")){
        speak("Hello sir, what can i help you?")
    }

    else if(message.includes("how are you")){
        speak("i am fine, thank you sir, what can i help you")
    }
    else if(message.includes("what is your name")){
        speak("my name is jarviss i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("who create you")){
        speak("my name is jarviss i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("who are you")||message.includes("hi")||message.includes("how r u")){
        speak("i am virtual assistant, created by hamad khan")
    }
    else if(message.includes("thank you")){
        speak("you welcome, and most welcome hamad khan")
    }
    else if(message.includes("thank you jarvis")){
        speak("you welcome, and most welcome hamad khan")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("play music")||message.includes("play song")){
        speak("playing music")
        window.open("https://www.youtube.com/watch?v=XLqmL9cPN1E")
    }
    else if(message.includes("play pakistani music")||message.includes("play pakistani song")){
        speak("playing pakistani music")
        window.open("https://www.youtube.com/watch?v=hXklj79UyEY")
    }
    else if(message.includes("play english music")||message.includes("play english song")){
        speak("playing english music")
        window.open("https://www.youtube.com/watch?v=kffacxfA7G4")
    }
    else if(message.includes("play indian music")||message.includes("play indian song")){
        speak("playing indian music")
        window.open("https://www.youtube.com/watch?v=1pc60L6mBt0")
    }
    else if(message.includes("open google chrome")){
        speak("opening google chrome")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open canva" ,"_blank")){
        speak("opening canva")
        window.open("https://www.canva.com/")
    }
    else if(message.includes("open fiverr" ,"_blank")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/")
    }
    else if(message.includes("open fiver" ,"_blank")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/")
    }
    else if(message.includes("open fiber")){
        speak("opening fiverr")
        window.open("https://www.fiverr.com/" ,"_blank")
    }
    else if(message.includes("open upwork")){
        speak("opening upwork")
        window.open("https://www.upwork.com/" ,"_blank")
    }
    else if(message.includes("open up work")){
        speak("opening upwork")
        window.open("https://www.upwork.com/" ,"_blank")
    }
    else if(message.includes("open my portfolio")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open my website")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open my personal website")){
        speak("opening portfolio website")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open gmail")){
        speak("opening gmail")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open email")){
        speak("opening email")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open e-mail")){
        speak("opening email")
        window.open("https://mail.google.com/","_blank")
    }
    else if(message.includes("open yahoo")){
        speak("opening yahoo")
        window.open("https://mail.yahoo.com/","_blank")
    }
    else if(message.includes("open linkedin")){
        speak("opening linkedin")
        window.open("https://www.linkedin.com/","_blank")
    }
    else if(message.includes("open github")){
        speak("opening github")
        window.open("https://github.com/","_blank")
    }
    else if(message.includes("open infinityfree")){
        speak("opening infinityfree hosting server")
        window.open("https://www.infinityfree.com/","_blank")
    }
    else if(message.includes("open infinity free")){
        speak("opening infinityfree hosting server")
        window.open("https://www.infinityfree.com/","_blank")
    }
    else if(message.includes("what is the capital of pakistan")){
        speak("Islamabad is the capital city of Pakistan. It is the country's tenth-most populous city with a population of over 1.1 million, and is federally administered by the Pakistani government as part of the Islamabad Capital Territory.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+pakistan&sca_esv=3cba3ff7c6207a53&sxsrf=AE3TifNbHKM2K6snAc-yntqanOzUo-3ZwA%3A1758544346917&source=hp&ei=2kHRaJ7DNce9i-gPn9KL4Ac&iflsig=AOw8s4IAAAAAaNFP6h2c10Db2zri0CPU5XHrdrUqaLLR&oq=what+is+the+c&gs_lp=Egdnd3Mtd2l6Ig13aGF0IGlzIHRoZSBjKgIIADIFEAAYgAQyBRAAGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI6TZQAFiEJnAAeACQAQGYAY4KoAHXG6oBDTItMS4xLjEuMi4wLjG4AQPIAQD4AQGYAgWgAokZwgIKECMYgAQYJxiKBcICBBAjGCfCAhEQLhiABBixAxjRAxiDARjHAcICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAgsQABiABBixAxiDAcICChAAGIAEGEYY-QGYAwCSBw0yLTEuMC4yLjEuMC4xoAf0MrIHDTItMS4wLjIuMS4wLjG4B4kZwgcFNC00LjHIB6gB&sclient=gws-wiz","_blank")
    }
    else if(message.includes("what is the capital of america")){
        speak("Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+america&sca_esv=3cba3ff7c6207a53&sxsrf=AE3TifO7mMSdysUgzPVLkYMMWQLxA1tC7A%3A1758544357212&ei=5UHRaNLXDJO6i-gP9tOL8Qg&oq=what+is+the+capital+of+am&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXdoYXQgaXMgdGhlIGNhcGl0YWwgb2YgYW0qAggAMgsQABiABBiRAhiKBTIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgoQABiABBgUGIcCMgUQABiABDIFEAAYgAQyBRAAGIAEMgcQABiABBgKMgsQABiABBiGAxiKBUjInxRQ7dMSWIiUFHATeASQAQCYAeQCoAGDQaoBBzItMTguMTC4AQPIAQD4AQGYAiCgArcewgIEEAAYR8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIGEAAYBxgewgIHEAAYgAQYDcICCBAAGAcYCBgewgIMEAAYgAQYDRhGGPsBwgIGEAAYDRgewgIIEAAYChgNGB7CAhgQABiABBgNGEYY-wEYlwUYjAUY3QTYAQHCAgoQIRigARjDBBgKwgIGEAAYCBgewgIPECMYgAQYJxiKBRhGGPsBwgIKEAAYgAQYQxiKBcICBRAuGIAEwgIZEAAYgAQYigUYRhj7ARiXBRiMBRjdBNgBAcICEBAAGIAEGJECGIoFGEYY-wHCAhwQABiABBiRAhiKBRhGGPsBGJcFGIwFGN0E2AEBmAMAiAYBkAYKugYGCAEQARgTkgcHMjIuMy0xMKAHtY8CsgcEMy0xMLgHghrCBwoyLTMuNy4xOS4zyAf6BQ&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("what is the capital of japan")){
        speak("Tokyo is the capital of Japan and one of the world's largest cities. Besides being the political center of Japan, Tokyo is also the financial, cultural, and industrial center of Japan and a major international financial center.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+japan&sca_esv=9594ada01a48a169&sxsrf=AE3TifMrFNZopc-IM9RHmPDdbIRqFxCW5A%3A1758556102752&source=hp&ei=xm_RaNWxK4_NkdUPhd3iwAo&iflsig=AOw8s4IAAAAAaNF91g9i6AznNTRby5ltwY7vum5BDJHs&ved=0ahUKEwjVrMf-2-yPAxWPZqQEHYWuGKgQ4dUDCBg&uact=5&oq=what+is+the+capital+of+japan&gs_lp=Egdnd3Mtd2l6Ihx3aGF0IGlzIHRoZSBjYXBpdGFsIG9mIGphcGFuMg8QIxiABBgnGIoFGEYY-wEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgYQABgWGB4yBhAAGBYYHkjsMFAAWLklcAB4AJABAJgB-gmgAfw3qgELMy00LjMuMy4yLjG4AQPIAQD4AQL4AQGYAgigAtUhwgIKECMYgAQYJxiKBcICBxAAGIAEGArCAggQABgWGAoYHsICBRAuGIAEmAMAkgcJMy0yLjUuNy0xoAfZgQGyBwkzLTIuNS43LTG4B9UhwgcFMy0yLjbIB8IB&sclient=gws-wiz","_blank")
    }
    else if(message.includes("what is the capital of china")){
        speak("Beijing. The modern day capital of China is Beijing literally Northern Capital which first served as China's capital city in 1261, when the Mongol ruler Kublai Khan established his seat of power in the area centered around what is today Beihai Park.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+chaina&sca_esv=9594ada01a48a169&sxsrf=AE3TifNt2Ud9IPTbH5W3Mi08IFeUQbEFQA%3A1758556110926&ei=zm_RaLuiOMyH9u8PqLz1sQk&ved=0ahUKEwi7wbyC3OyPAxXMg_0HHShePZYQ4dUDCBA&uact=5&oq=what+is+the+capital+of+chaina&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXdoYXQgaXMgdGhlIGNhcGl0YWwgb2YgY2hhaW5hSP8BUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwA&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("what is the capital of chaina")){
        speak("Beijing. The modern day capital of China is Beijing literally Northern Capital which first served as China's capital city in 1261, when the Mongol ruler Kublai Khan established his seat of power in the area centered around what is today Beihai Park.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+chaina&sca_esv=9594ada01a48a169&sxsrf=AE3TifNt2Ud9IPTbH5W3Mi08IFeUQbEFQA%3A1758556110926&ei=zm_RaLuiOMyH9u8PqLz1sQk&ved=0ahUKEwi7wbyC3OyPAxXMg_0HHShePZYQ4dUDCBA&uact=5&oq=what+is+the+capital+of+chaina&gs_lp=Egxnd3Mtd2l6LXNlcnAiHXdoYXQgaXMgdGhlIGNhcGl0YWwgb2YgY2hhaW5hSP8BUABYAHAAeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQL4AQGYAgCgAgCYAwCSBwCgBwCyBwC4BwDCBwDIBwA&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("what is the capital of saudi arabia")){
        speak("Riyadh, Saudi Arabia’s capital and main financial hub, is on a desert plateau in the country’s center.")
        window.open("https://www.google.com/search?q=what+is+the+capital+of+saudi+arabia&sca_esv=9594ada01a48a169&sxsrf=AE3TifNzvP4O4Ta3jsZ5Y1gE54GheuD9lA%3A1758556396011&ei=7HDRaME3jYGL6A_syYeRCg&oq=what+is+the+capital+of+soudia+a&gs_lp=Egxnd3Mtd2l6LXNlcnAiH3doYXQgaXMgdGhlIGNhcGl0YWwgb2Ygc291ZGlhIGEqAggAMgwQABiABBgNGEYY-wEyBxAAGIAEGA0yBxAAGIAEGA0yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCBAAGBYYChgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMhgQABiABBgNGEYY-wEYlwUYjAUY3QTYAQFI80VQxgZY2T1wAXgBkAEAmAHZBaAByjCqAQkzLTQuMi42LjG4AQPIAQD4AQGYAgqgAoEowgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgoQLhiABBgnGIoFwgIKECMYgAQYJxiKBcICBRAAGIAEwgIKEAAYgAQYQxiKBcICFxAuGIAEGIoFGJcFGNwEGN4EGOAE2AEBwgILEAAYgAQYkQIYigXCAgoQABiABBgUGIcCwgIQEAAYgAQYkQIYigUYRhj7AcICBxAAGIAEGArCAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIcEAAYgAQYkQIYigUYRhj7ARiXBRiMBRjdBNgBAcICBhAAGA0YHsICCBAAGAoYDRgemAMAiAYBkAYKugYGCAEQARgUkgcJMS4zLTEuNi4yoAeOhAGyBwczLTEuNi4yuAflJ8IHBTQtNS41yAezAw&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("who is the president of pakistan")){
        speak("Asif Ali Zardari is a Pakistani politician serving as the president of Pakistan since 2024, having held the same office from 2008 to 2013.")
        window.open("https://www.google.com/search?q=who+is+the+president+of+pakistan&sca_esv=9594ada01a48a169&sxsrf=AE3TifM3v2Va4xqApqcqc11nS0d6xd3ffw%3A1758556410182&ei=-nDRaOL2Cuayi-gPx_XLgAw&oq=who+is+the+president+of+paki&gs_lp=Egxnd3Mtd2l6LXNlcnAiHHdobyBpcyB0aGUgcHJlc2lkZW50IG9mIHBha2kqAggAMhAQABiABBiRAhiKBRhGGPsBMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhwQABiABBiRAhiKBRhGGPsBGJcFGIwFGN0E2AEBSPqOAVC4B1j5gwFwA3gBkAEAmAHpAqAB5TaqAQYyLTE5Lja4AQPIAQD4AQGYAhegAqM0wgIKEAAYsAMY1gQYR8ICDRAuGIAEGLADGEMYigXCAg0QABiABBiwAxhDGIoFwgIPECMYgAQYJxiKBRhGGPsBwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAhkQABiABBiKBRhGGPsBGJcFGIwFGN0E2AEBwgILEAAYgAQYkQIYigXCAgYQABgWGB7CAgsQABiABBixAxiDAZgDAIgGAZAGCroGBggBEAEYE5IHDDMuMC4xMi43LjYtMaAHlLwBsgcGMi0xMi43uAe4K8IHBjMtMjEuMsgHvgI&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("who is the president of america")){
        speak("Donald John Trump is an American politician, media personality, and businessman who is the 47th president of the United States. A member of the Republican Party, he served as the 45th president from 2017 to 2021.")
        window.open("https://www.google.com/search?q=who+is+the+president+of+america&sca_esv=9594ada01a48a169&sxsrf=AE3TifOCniRDKpBFtypMgJcvO7a5oeBvLg%3A1758556566060&ei=lnHRaMSzA8Ski-gPl-qCuAo&oq=who+is+the+president+of+ame&gs_lp=Egxnd3Mtd2l6LXNlcnAiG3dobyBpcyB0aGUgcHJlc2lkZW50IG9mIGFtZSoCCAAyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIFEAAYgAQyBRAAGIAESO6zB1CQkAdY4KUHcAJ4BJABAJgBsgKgAc8VqgEGMi0xMC4xuAEDyAEA-AEBmAIHoAKBCcICBBAAGEfCAgoQIxiABBgnGIoFwgIKEAAYgAQYQxiKBcICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQOYAwCIBgGQBgiSBwczLjAuMy4xoAe_VLIHBTItMy4xuAe-CMIHAzMtN8gHZA&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("who is the president of china")){
        speak("Xi Jinping is a Chinese politician who has been the general secretary of the Chinese Communist Party and chairman of the Central Military Commission, and thus the paramount leader of China, since 2012. Since 2013, Xi has also served as the seventh president of China.")
        window.open("https://www.google.com/search?q=who+is+the+president+of+china&sca_esv=9594ada01a48a169&sxsrf=AE3TifNPvbFDWJ1Sf8eswBVRiJE_uMcU2Q%3A1758556709851&ei=JXLRaKrhM-vqi-gPn8OLoQY&oq=who+is+the+president+of+ch&gs_lp=Egxnd3Mtd2l6LXNlcnAiGndobyBpcyB0aGUgcHJlc2lkZW50IG9mIGNoKgIIADILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgUQABiABDIKEAAYgAQYFBiHAjIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjYjgdQ5IMBWOWFB3AIeAGQAQGYAbgDoAG-FaoBBzItNS4zLjG4AQPIAQD4AQL4AQGYAgKgAsUEwgIKECMYgAQYJxiKBcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDmAMAiAYBkgcDMi0yoAfARbIHAzItMrgHxQTCBwUzLTEuMcgHLg&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("who is the president of saudi arabia")){
        speak("Mohammed bin Salman Al Saud also known as MbS, is the de facto ruler of the Kingdom of Saudi Arabia, formally serving as Crown Prince and Prime Minister.")
        window.open("https://www.google.com/search?q=who+is+the+president+of+saudi+arabia&sca_esv=9594ada01a48a169&sxsrf=AE3TifOf1-7J5Fdo37Jp4k6nqSo2nu3BzQ%3A1758556987373&ei=O3PRaITLFtyE9u8P1626oQQ&oq=who+is+the+president+of+s&gs_lp=Egxnd3Mtd2l6LXNlcnAiGXdobyBpcyB0aGUgcHJlc2lkZW50IG9mIHMqAggAMgsQABiABBiRAhiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgsQABiABBiRAhiKBTIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjRI1B2WO4acAJ4AZABAZgB8ASgAa0UqgEJMi00LjEuMS4xuAEDyAEA-AEBmAIFoALPB8ICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgITEC4YgAQYsAMYQxjIAxiKBdgBAcICChAjGIAEGCcYigXCAgsQABiABBixAxiDAcICCBAAGIAEGLEDmAMAiAYBkAYLugYECAEYCJIHBzIuMC4xLjKgB-45sgcFMi0xLjK4B5EHwgcFMy0yLjPIB2o&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("cv generate")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("cv generator")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("generate the cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("create the cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open cv")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("cv open")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("resume generate")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("resume generator")){
        speak("welcome to the professional cv generate platform, a proffessional cv gets you noticed by recruiters and hiring algorithms, so create your proffessional cv now")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("game play")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("games play")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("play the game")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open game")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("open games")){
        speak("play the game, just for fun")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("daily news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("daily newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("today newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("today news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open today news")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open today newspaper")){
        speak("daily newspaper in urdu")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open express news")){
        speak("opening express news")
        window.open("https://www.express.com.pk/","_blank")
    }
    else if(message.includes("open daily jang news")){
        speak("opening daily jang news")
        window.open("https://e.jang.com.pk/","_blank")
    }
    else if(message.includes("open daily aaj news")){
        speak("opening daily aaj news")
        window.open("https://epaper.dailyaaj.com.pk/","_blank")
    }
    else if(message.includes("open geo news")){
        speak("opening geo news")
        window.open("https://www.geonewsurdu.tv/","_blank")
    }
    else if(message.includes("open ary news")){
        speak("opening ary news")
        window.open("https://arynews.tv/","_blank")
    }
    else if(message.includes("tell me about of pakistan")){
        speak("Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre.")
        window.open("https://www.google.com/search?q=pakistan&sca_esv=9594ada01a48a169&ei=sYPRaJv6DMyui-gP3IijqQU&ved=0ahUKEwjbltv97uyPAxVM1wIHHVzEKFUQ4dUDCBE&uact=5&oq=pakistan&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHBha2lzdGFuMhAQABiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQABiABBhDGIoFMgYQABgHGB4yChAAGIAEGEMYigUyBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yChAAGIAEGEMYigVIsgdQAFgAcAB4AZABAJgBswKgAbMCqgEDMy0xuAEDyAEA-AEBmAIBoALmApgDAJIHAzMtMaAHqgqyBwMzLTG4B-YCwgcDNC0xyAcp&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("tell me about of university of swabi")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of university of sawari")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of university of sawabi")){
        speak("University of Swabi was established in 2012 with the mission to advance knowledge and learning through quality research and education for the whole nation. Currently, the university comprises of two campuses, old campus and main campus having a combined area of 188 acres nears M1 Motorway.")
        window.open("https://uoswabi.edu.pk/","_blank")
    }
    else if(message.includes("tell me about of hammad khan")){
        speak("hamad khan a graduate in BSCS Bachelor Of Science In Computer Science, So hamad gained all the basic knowledge from my study, that’s why i knew many works related to web programming before entering this business. i'm a dynamic and driven individual with a passion for technology, innovation, and lifelong learning. my journey is marked by a strong academic foundation, a diverse skill set, and a deep interest in leveraging technology to solve real-world problems. with a blend of technical expertise and creative thinking, i is carving out a unique path for himself in the ever-evolving world of technology.")
        window.open("https://hamadkhan.infy.uk/","_blank")
    }
    else if(message.includes("tell me about of lahore degree college")){
        speak("Lahore Degree College a government Educational Institution under the KP Higher Education Department Established in 1986. In 2012, the college introduced 4 years BS programs in Physics. Later, Chemistry, Botany, Economics and Political Science. The master's degree courses are shelved due to introduction of BS programs.")
        window.open("https://www.google.com/search?q=lahore+degree+college+swabi+college+about&sca_esv=9221048d9dc68eb4&sxsrf=AE3TifP62TFqVvSi44-nXHDs_y5RUCUd9w%3A1757751325121&ei=HSjFaNOWB7Tqi-gPoPuD-A8&ved=0ahUKEwiTmdn6pdWPAxU09QIHHaD9AP8Q4dUDCBA&uact=5&oq=lahore+degree+college+swabi+college+about&gs_lp=Egxnd3Mtd2l6LXNlcnAiKWxhaG9yZSBkZWdyZWUgY29sbGVnZSBzd2FiaSBjb2xsZWdlIGFib3V0MggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMgUQABjvBTIIEAAYgAQYogRIgmhQvURYgmRwAngBkAEAmAGxAqABlxyqAQYyLTEzLjG4AQPIAQD4AQGYAgegAugKwgIKEAAYsAMY1gQYR8ICBBAjGCeYAwCIBgGQBgKSBwUyLjAuNaAH5C6yBwMyLTW4B9EKwgcFMi0yLjXIB0A&sclient=gws-wiz-serp","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("whatsapp://")
    }
    else if(message.includes("open sublime")){
        speak("opening sublime")
        window.open("sublime://")
    }
    else if (message.includes("open recycle bin")) {
        speak("opening recycle bin");
        window.open("recycle://");
    }
    else if (message.includes("open my computer")) {
        speak("opening My Computer");
        window.open("mycomputer://");
    }
    else if (message.includes("open microsoft google")) {
        speak("opening Microsoft Google");
        window.open("msedge://");
    }
    else if (message.includes("open idm")) {
        speak("opening IDM");
        window.open("idm://");
    }
    else if (message.includes("open internet download manager")) {
        speak("opening Internet Download Manager");
        window.open("idm://");
    }
    else if (message.includes("open photoshop")) {
        speak("opening Adobe Photoshop");
        window.open("photoshop://");
    }
    else if (message.includes("open vsdc")) {
        speak("opening VSDC Free Video Editor");
        window.open("vsdc://");
    }
    else if (message.includes("open vsdc video editor")) {
        speak("opening VSDC Free Video Editor");
        window.open("vsdc://");
    }
    else if (message.includes("open adobe premiere pro")) {
        speak("opening Adobe Premiere Pro 2019");
        window.open("premiere://");
    }
    else if (message.includes("open camtasia")) {
        speak("opening Camtasia 2020");
        window.open("camtasia://");
    }
    else if (message.includes("open vs code")) {
        speak("opening Visual Studio Code");
        window.open("https://vscode.dev/","_blank")
    }
    else if (message.includes("open visual studio code")) {
        speak("opening Visual Studio Code");
        window.open("https://vscode.dev/","_blank")
    }
    else if (message.includes("open word")) {
        speak("opening Microsoft Word");
        window.open("wordapp://");
    }
    else if (message.includes("open microsoft word")) {
        speak("opening Microsoft Word");
        window.open("wordapp://");
    }
    else if (message.includes("open powerpoint")) {
        speak("opening Microsoft PowerPoint");
        window.open("powerpoint://");
    }
    else if (message.includes("open microsoft powerpoint")) {
        speak("opening Microsoft PowerPoint");
        window.open("powerpoint://");
    }
    else if (message.includes("open excel")) {
        speak("opening Microsoft Excel");
        window.open("excelapp://");
    }
    else if (message.includes("open microsoft excel")) {
        speak("opening Microsoft Excel");
        window.open("excelapp://");
    }
    else if (message.includes("open access")) {
        speak("opening Microsoft Access");
        window.open("accessapp://");
    }
    else if (message.includes("open microsoft access")) {
        speak("opening Microsoft Access");
        window.open("accessapp://");
    }
    else if (message.includes("open acrobat")) {
        speak("opening Adobe Acrobat");
        window.open("acrobatapp://");
    }
    else if (message.includes("open adobe acrobat")) {
        speak("opening Adobe Acrobat");
        window.open("acrobatapp://");
    }
    else if (message.includes("open git bash")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open get bash")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open get bass")) {
        speak("opening Git Bash");
        window.open("gitbash://");
    }
    else if (message.includes("open github desktop")) {
        speak("opening GitHub Desktop");
        window.open("githubdesktop://");
    }
    else if (message.includes("open github")) {
        speak("opening GitHub");
        window.open("githubdesktop://");
    }
    else if (message.includes("open filezilla")) {
        speak("opening FileZilla");
        window.open("filezillaapp://");
    }
    else if (message.includes("open minitool")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open mini tool")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open miniTool partition wizard")) {
        speak("opening MiniTool Partition Wizard");
        window.open("minitool://");
    }
    else if (message.includes("open bandicam")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open bandi cam")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open bande game")) {
        speak("opening Bandicam");
        window.open("bandicam://");
    }
    else if (message.includes("open server control panel")) {
        speak("opening XAMPP Control Panel");
        window.open("xampp://");
    }
    else if (message.includes("open control panel")) {
        speak("opening XAMPP Control Panel");
        window.open("xampp://");
    }
    else if (message.includes("open camera")) {
        speak("opening Camera");
        window.open("camera://");
    }
    else if (message.includes("shutdown")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("shut down")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("system shut down")) {
        speak("Shutting down the computer");
        window.open("shutdown://");
    }
    else if (message.includes("system lock")) {
        speak("locking your computer");
        window.open("lock://");
    }
    else if (message.includes("system block")) {
        speak("locking your computer");
        window.open("lock://");
    }
    else if (message.includes("open dictation")) {
        speak("opening Windows dictation");
        window.open("dictationwin+h://");
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("jarvis","") || message.replace("jarvis","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("jarvis","")}`,"_blank")
    }
}
