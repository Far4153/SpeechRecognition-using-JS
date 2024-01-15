document.getElementById('click_to_convert').addEventListener('click', function(){
    var speech=true; //indicates the speech recognition start
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;//browser compatibility
    const recognition= new SpeechRecognition();// intialize object
    recognition.interimResults=true;// for getting innternediate results

    recognition.addEventListener('result', e=>{
        const transcript = Array.from(e.results)
        .map(result=>result[0])//this events triggered when speech engine detects speech
        .map(result=>result.transcript)
        
        convert_text.innerHTML = transcript;// convert to html
    })

    if (speech==true){
        recognition.start();//it starts speech recognition process
    }
})