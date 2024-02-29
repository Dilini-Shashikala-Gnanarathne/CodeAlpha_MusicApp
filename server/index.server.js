const express =require('express')
const app=express();
const fs = require('fs');

const PORT=9000;


const __AUDIO_TYPE__ = {
    ROCK: "rock",
    JAZZ: "jazz",
    CINEMATIC: "cinematic",
    ACCOUSTIC: "accoustic"
}
function getDirectories(type){
    return fs.readdirSync(`./music/${type}`);
}

function getSongDetails(type, dir){
    try{
        const path = `music/${type}/${dir}/media`;
        const audioData = fs.readdirSync(path);
        const audioInfo = fs.readFileSync(`./music/${type}/${dir}/info.json`);
        const parsedData = JSON.parse(audioInfo);
        return {
            audioFile: `${path}/${audioData[0]}`,
            avatar: `${path}/${audioData[1]}`,
            ...parsedData
        }
    }catch(error){
        return false;
    }
}

app.get(`/song`,(req,res)=>{
    const songData = {};
    for(let type in __AUDIO_TYPE__){
        const directoryItems = getDirectories(__AUDIO_TYPE__[type]);
        directoryItems.forEach((item) => {
            const audioData = getSongDetails(__AUDIO_TYPE__[type], item);
            console.log({audioData});
            if(audioData){
                if(__AUDIO_TYPE__[type] in songData){
                    songData[__AUDIO_TYPE__[type]].push(audioData);
                }else{
                    songData[__AUDIO_TYPE__[type]] = [audioData];
                }
            }    
    })
}
    res.send("Hello from server");
});

app.listen(PORT,()=>
{
    console.log(`Server listening on port ${PORT}`);  
})