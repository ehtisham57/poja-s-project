import AlertDialog from "../../Components/Modal";
import dekstopview from "../../assets/dimond.jpeg";
import mobileview from "../../assets/dimondMob.jpeg";
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
              alt="image"
            />
          ) : (
            <img
              id="mobile"
              src={mobileview}
              style={{ width: "100%", height: "100%" }}
              alt="image"
            />
          )}
        </div>
      </div>
    </>
  );
}
