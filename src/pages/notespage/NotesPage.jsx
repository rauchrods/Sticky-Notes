import NoteCard from "../../components/noteCard/NoteCard";
import Controls from "../../components/controls/Controls";
import { useSelector } from "react-redux";
import InfoButton from "../../components/infoButton/InfoButton";
import Modal from "../../components/modal/Modal";
import { isBrowser } from "react-device-detect";

const NotesPage = () => {
  const notes = useSelector((state) => state.main.notes);

  console.log("isBrowser", isBrowser);

  return (
    <>
      {isBrowser ? (
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
