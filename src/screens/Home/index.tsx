import AlertDialog from "../../Components/Modal";
import dekstopview from "../../assets/Dekstopviewf.jpg";
import mobileview from "../../assets/mobileviewf.jpg";
export default function Home() {
  // let [win, setWin] = useState(window.innerWidth)
  return (
    <>
      <div>
        <div className="body">
          <AlertDialog />
          {window.innerWidth > 600 ? (
            <img
              id="dekstop"
              src={dekstopview}
              style={{ width: "100%" }}
              alt=""
            />
          ) : (
            <img
              id="mobile"
              src={mobileview}
              style={{ width: "100%", height: "100%" }}
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
}
