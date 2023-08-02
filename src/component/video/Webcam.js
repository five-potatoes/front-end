import Webcam from "react-webcam";
import React from "react";
import ReactPlayer from "react-player";
import "./Webcam.css";

const WebcamComponent = ({ mode }) => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);

  const blob = new Blob(recordedChunks, {
    type: "video/webm",
  });
  const url = URL.createObjectURL(blob);

  const [rec, setRec] = React.useState(false);
  const [end, setEnd] = React.useState(false);
  const [play, setPlay] = React.useState(false);
  console.log(play);
  const startPlay = () => {
    setPlay(true);
  };
  const stopPlay = () => {
    setPlay(false);
  };
  const endPlay = () => {
    setRec(false);
    setPlay(false);
    setRecordedChunks([]);
  };

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    setRecordedChunks([]);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
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

  const handleDownload = React.useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      a.href = url;
      a.download = "react-webcam-stream-capture.webm";
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <div>
      <div className="webcam">
        {rec ? (
          <ReactPlayer
            url={url}
            playing={play}
            onPlay={startPlay}
            onPause={stopPlay}
          />
        ) : (
          <Webcam audio={false} ref={webcamRef} />
        )}
      </div>

      {mode === "sign" &&
        !rec &&
        (capturing ? (
          <button onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button onClick={handleStartCaptureClick}>Start Capture</button>
        ))}
      {/* {recordedChunks.length > 0 && (
        <button onClick={handleDownload}>Download</button>
      )} */}
      {recordedChunks.length > 0 &&
        (play ? (
          <button onClick={stopPlay}>stop</button>
        ) : (
          <button onClick={startPlay}>play</button>
        ))}
      {recordedChunks.length > 0 && <button onClick={endPlay}>Re</button>}
    </div>
  );
};

export default WebcamComponent;

// https://www.npmjs.com/package/react-webcam
