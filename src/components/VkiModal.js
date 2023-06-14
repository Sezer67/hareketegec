import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import { useSelector } from "react-redux";
import { Input, Slider } from "@mui/material";
import ModalFooter from "./ModalFooter";
import alertify from "alertifyjs";
import { axiosInstance } from "../login.axios.util";

const VkiModal = ({ visible, setVisible, isEdit, data }) => {
  const userState = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    weight: userState.user.weight || 0,
    height: userState.user.height || 0,
  });

  const [result, setResult] = useState(null);

  useEffect(() => {
    if(isEdit){
        setUserData({
            weight: data.weight,
            height: data.height,
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const handleChangeState = (value, key) => {
    setUserData({
      ...userData,
      [key]: Number(value),
    });
  };

  const handleClose = () => {
    setVisible(false);
  };
  const handleSubmit = async () => {
    try {
      const { data } = await axiosInstance.post("/test/vki", {
        ...userData,
      });
      setResult(data);
    } catch (error) {
      alertify.error(error.response.data.message);
    }
  };

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
    },
  };

  const renderTest = () => (
    <>
      <div className="modalContent">
        <div className="sliderContent">
          <p className="sliderText">Boyunuzu Giriniz (cm)</p>
          <div className="row">
            <Slider
              max={200}
              min={0}
              disabled={isEdit}
              value={userData.height}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => <span>{value} cm</span>}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "height")}
            />
            <Input
              value={userData.height}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "height")}
            />
          </div>
        </div>
        <div className="sliderContent">
          <p className="sliderText">Kilonuzu Giriniz (kg)</p>
          <div className="row">
            <Slider
              disabled={isEdit}
              max={150}
              min={0}
              value={userData.weight}
              valueLabelDisplay="on"
              valueLabelFormat={(value) => <span>{value} kg</span>}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "weight")}
            />
            <Input
              value={userData.weight}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "weight")}
            />
          </div>
        </div>
      </div>
      {
        !isEdit && <ModalFooter handleCancel={handleClose} handleCalculate={handleSubmit} />

      }
    </>
  );

  const renderResult = () => (
    <div className="modalContent">
        <div className="resultCard">
            <div className="cardRow">
                <p>
                    Vücut Kitle İndeksi Değeriniz
                </p>
                <p>
                    {result.result}
                </p>
            </div>
            <div className="cardRow">
                <p>
                    Durumunuz
                </p>
                <p>
                    {result.description}
                </p>
            </div>
            {
                result.suggestions.split(",").map((item,index) => (
                    <div key={index} className="cardRow">
                        <p>
                            Öneri {index +1}
                        </p>
                        <p>
                            {item}
                        </p>
                    </div>
                ))
            }
        </div>   
    </div>
  )
  return (
    <Modal
      style={customModalStyle}
      isOpen={visible}
      onRequestClose={handleClose}
      contentLabel="Label"
    >
      <ModalHeader
        title={result ? "Vücut Kütle İndeksiniz" :"Vücut Kütle İndeksi Hesaplama"}
        handleClose={handleClose}
      />
      {
        result ? renderResult() : renderTest()
      }
    </Modal>
  );
};

export default VkiModal;
