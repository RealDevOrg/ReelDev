//window that opens the screenshot and camera -> send photo files to create Post element?
//take over current window vs create new window - which is easier? 
// import { desktopCapturer, remote } from 'electron';
// const Menu = remote();


const Camera = () => {
    // const capture = () => {
    //     async function getVideoSources() {
    //         const inputSources = await desktopCapturer.getSources({
    //           types: ['window', 'screen']
    //         });
          
    //         const videoOptionsMenu = Menu.buildFromTemplate(
    //           inputSources.map(source => {
    //             return {
    //               label: source.name,
    //               click: () => selectSource(source)
    //             };
    //           })
    //         );
          
          
    //         videoOptionsMenu.popup();
    //       }
    // }

    return (
        <div>
            <h1>Smile for the camera!</h1>
            <br/>
            <button onClick={() => capture()}>Take Screenshot and selfie</button>
            <div id='screenshot-image'>

            </div>
        </div>
    )
}

export default Camera;