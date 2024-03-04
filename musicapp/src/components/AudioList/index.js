import { backIcon , down } from "../../assets";
import { baseUrl } from "../../config";
import "./style.css";

const AudioList = ({ onBackButtonPress, audioList, onTrackSelect }) => {
  console.log({ audioList });
  return (
    <div className="audio-ls p-20">
      <div onClick={onBackButtonPress} className="audio-ls-header">
        <img src={backIcon} alt="Back" />
      </div>

      {audioList.length ? (
        <ul className="mtb-10">
          {audioList.map((item, index) => (
            <li
              onClick={() => onTrackSelect(index)}
              key={index}
              className="audio-ls-container"
            >
              <div className="audio-ls-item flex align-center ptb-5">
                <div className="audio-img">
                  <img src={`${baseUrl}/${item.avatar}`} alt="Audio Cover" />
                </div>
                <div className="audio-info mlr-10">
                  <p>{item.title}</p>
                  <p>{item.artist}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <button className="buttonDownload">
        <a href="https://www.google.com/">
        No Audio Available
          <img src={down} alt="Download Icon" className="download-icon" />
        </a>
      </button>
      
      )}
    </div>
  );
};

export default AudioList;
