import React, { useState } from "react";
import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material/";
const customModalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    width: "50%",
    minWidth: "640px",
    maxHeight: '90vh',
    
  },
};

const days = [
  {
    name: "firstDay",
    day: 1,
  },
  {
    name: "secondDay",
    day: 2,
  },
  {
    name: "thirdDay",
    day: 3,
  },
  {
    name: "fourthDay",
    day: 4,
  },
  {
    name: "fifthDay",
    day: 5,
  },
  {
    name: "sixthDay",
    day: 6,
  },
  {
    name: "seventhDay",
    day: 7,
  },
];

const ProgramModal = ({ visible, setVisible, item }) => {
  const [expanded, setExpanded] = useState("firstDay");

  const handleClose = () => {
    setVisible(false);
  };
  const handleExpand = (expand, value) => {
    setExpanded(expand ? value : "");
  };

  return (
    <Modal
      style={customModalStyle}
      isOpen={visible}
      onRequestClose={handleClose}
    >
      <ModalHeader title={item.title} handleClose={handleClose} />
      <div className="modalContent">
        <p style={{ marginBottom: "10px" }}>Açıklama: {item.description}</p>
        <div style={{ width: "100%" }}>
          {days.map((day) => (
            <Accordion
              key={day.day}
              expanded={expanded === day.name}
              onChange={(e, expand) => handleExpand(expand, day.name)}
            >
              <AccordionSummary 
                style={expanded === day.name ? {backgroundColor:'rgb(97,97,201)',color:'white'} : {}}
                expandIcon={<ExpandMore style={expanded === day.name ? {color:'white'} : {}} />}
              >
                {day.day}. Gün
              </AccordionSummary>
              <AccordionDetails style={{ borderTop: "1px solid gray" }}>
                <div className="dayList">
                  {item[day.name].map((each, index) => (
                    <div
                      className="row"
                      style={{
                        justifyContent: "space-between",
                        marginBottom: "4px",
                        padding: "10px 5px",
                        borderBottom: "1px solid #ccc",
                      }}
                    >
                      <div>
                        <span className="listNumber">{index + 1} - </span>
                        <span>{each.text}</span>
                      </div>
                      {!each.img && (
                        <button className="howDidButton">
                          Nasıl Yapılır ?
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ProgramModal;
