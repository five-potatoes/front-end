import Webcam from "react-webcam";
import React from "react";
import ReactPlayer from "react-player";
import "./Webcam.css";

const WebcamComponent = ({ mode,  }) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const videoConstraints = {
    facingMode: "user",
  };
  const blob = new Blob(recordedChunks, {
    type: "video/mp4",
  });
  const url = URL.createObjectURL(blob);

  const [rec, setRec] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  console.log(play);
  const startPlay = () => setPlay(true);
  const stopPlay = () => setPlay(false);
  const endPlay = () => {
    setRec(false);
    setPlay(false);
    setRecordedChunks([]);
  };

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    setRecordedChunks([]);

    let options = {};
    if (MediaRecorder.isTypeSupported("video/webm; codecs=vp9")) {
      options = { mimeType: "video/webm; codecs=vp9" };
    } else if (MediaRecorder.isTypeSupported("video/webm")) {
      options = { mimeType: "video/webm" };
    } else if (MediaRecorder.isTypeSupported("video/mp4")) {
      options = { mimeType: "video/mp4" };
    } else {
      console.error("No suitable mimeType found for this device");
    }

    mediaRecorderRef.current = new MediaRecorder(
      webcamRef.current.stream,
      options
    );

    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    // eslint-disable-next-line
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    setRec(true);
    // eslint-disable-next-line
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  // const handleDownload = React.useCallback(() => {
  //   if (recordedChunks.length) {
  //     const blob = new Blob(recordedChunks, {
  //       type: "video/mp4",
  //     });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style = "display: none";
  //     a.href = url;
  //     a.download = "react-webcam-stream-capture.webm";
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     setRecordedChunks([]);
  //   }
  // }, [recordedChunks]);

  return (
    <div className="vc">
      <div className="webcam">
        {rec ? (
          <ReactPlayer
            url={url}
            playing={play}
            onPlay={startPlay}
            onPause={stopPlay}
            width="100%"
            height="100%"
          />
        ) : (
          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
          />
        )}
      </div>
      <div className="vb">
        {mode === "sign" &&
          !rec &&
          (capturing ? (
            <button onClick={handleStopCaptureClick}>
              <img src="img/녹화종료.png" alt="녹화중지" className="rb" />
            </button>
          ) : (
            <button onClick={handleStartCaptureClick}>
              <img src="img/녹화시작.png" alt="녹화" className="rb" />
            </button>
          ))}
        {/* {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
        {recordedChunks.length > 0 &&
          (play ? (
            <button onClick={stopPlay}>
              <img src="img/중지.png" alt="재생중지" className="rb" />
            </button>
          ) : (
            <button onClick={startPlay}>
              <img src="img/재생.png" alt="재생" className="rb" />
            </button>
          ))}
        {recordedChunks.length > 0 && (
          <button onClick={endPlay}>
            <img src="img/다시.png" alt="다시" className="rb" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WebcamComponent;

// https://www.npmjs.com/package/react-webcam

//이미지 출처 <a href="https://kr.freepik.com/free-vector/symbols-arrows-25-flat-color-icon-pack-including-complete-check-undo-stop-tumbler_38018468.htm#query=%EB%85%B9%ED%99%94%20%EB%B2%84%ED%8A%BC&position=13&from_view=keyword&track=ais">작가 flatart</a> 출처 Freepik
