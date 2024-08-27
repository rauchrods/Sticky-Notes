import NoteCard from "../../components/noteCard/NoteCard";
import Controls from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import InfoButton from "../../components/infoButton/InfoButton";
import { useEffect, useState } from "react";
import Modal from "../../components/modal/Modal";
import { detectDevice } from "../../utils";

const NotesPage = () => {
  const notes = useSelector((state) => state.main.notes);

  // const [isDesktop, setDesktop] = useState(window.innerWidth > 600);

  // const updateMedia = () => {
  //   setDesktop(window.innerWidth > 600);
  // };

  const device = detectDevice();

  useEffect(() => {
    // window.addEventListener("resize", updateMedia);
    // return () => {
    //   window.removeEventListener("resize", updateMedia);
    // };
  }, []);

  // console.log("isDesktop", isDesktop);

  return (
    <>
      {device === "isDesktop" ? (
        <>
          <InfoButton />
          {notes.map((note) => (
            <NoteCard note={note} key={note.$id} />
          ))}
          <Controls />
        </>
      ) : (
        <Modal>
          <p>
            Please switch to desktop browser as this is not optimized for mobile
          </p>
        </Modal>
      )}
    </>
  );
};

export default NotesPage;
