createVideo("https://9jaflaverfiles.com/wp-content/uploads/2020/09/Davido-FEM-_Official-Video_.mp4").then(
    playVideo()
).catch(function (err) {
    alert(err)
});

async function createVideo(videoUrl) {
     let promise = new Promise(function(resolve,reject){
     let video = document.createElement('video')
     let source = document.createElement('source')
     video.setAttribute('controls', 'controls')
     video.setAttribute('id','video')
     
     source.src=videoUrl
     video.appendChild(source)

     video.onload = () => resolve(video)
     video.onerror = () => reject(new Error("video source is not available"))
     
     document.body.appendChild(video)
     
     })
     let result = await promise;
};

 function playVideo() {
     return new Promise(function (resolve, reject) {
         resolve(document.getElementById('video').play());
     });
};