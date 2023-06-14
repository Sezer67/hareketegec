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

const meals = [
  {
    name: "firstMeal",
    label: "1. Öğün",
  },
  {
    name: "firstSnack",
    label: "Atıştırmalık",
  },
  {
    name: "secondMeal",
    label: "2. Öğün",
  },
  {
    name: "secondSnack",
    label: "Atıştırmalık",
  },
  {
    name: "thirdMeal",
    label: "3. Öğün",
  },
  {
    name: "thirdSnack",
    label: "Atıştırmalık",
  },
  {
    name: "fourthMeal",
    label: "4. Öğün",
  },
  {
    name: "fourthSnack",
    label: "Atıştırmalık",
  },
  {
    name: "fifthMeal",
    label: "5. Öğün",
  },
  {
    name: "fifthSnack",
    label: "Atıştırmalık",
  },
];

const DiyetModal = ({ visible, setVisible, item }) => {
  const [expanded, setExpanded] = useState("firstMeal");

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
          {meals.map((day) => {
            if(item[day.name].length > 0){
                return (
                    (
                        <Accordion
                          key={day.name}
                          expanded={expanded === day.name}
                          onChange={(e, expand) => handleExpand(expand, day.name)}
                        >
                          <AccordionSummary 
                            style={expanded === day.name ? {backgroundColor:'rgb(97,97,201)',color:'white'} : {}}
                            expandIcon={<ExpandMore style={expanded === day.name ? {color:'white'} : {}} />}
                          >
                            {day.label}
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
                                  {each.img && (
                                    <button className="howDidButton">
                                      Nasıl Yapılır ?
                                    </button>
                                  )}
                                </div>
                              ))}
                            </div>
                          </AccordionDetails>
                        </Accordion>
                      )
                )
            }
            return null;
          })}
        </div>
      </div>
    </Modal>
  );
};

export default DiyetModal;
