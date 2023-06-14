import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalHeader from "./ModalHeader";
import { useSelector } from "react-redux";
import { Input, Slider } from "@mui/material";
import ModalFooter from "./ModalFooter";
import alertify from "alertifyjs";
import { axiosInstance } from "../login.axios.util";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";

const FatRateModal = ({ visible, setVisible, isEdit, data }) => {
  const userState = useSelector((state) => state.user);

  const [userData, setUserData] = useState({
    weight: userState.user.weight || 0,
    height: userState.user.height || 0,
    age: 1,
    neck: userState.user.neck || 0,
    waist: userState.user.waist || 0,
    hip: userState.user.hip || 0,
    gender: userState.user.gender || 0,
  });

  useEffect(() => {
    if (isEdit) {
      setUserData({
        weight: data.weight,
        height: data.height,
        age: data.age,
        neck: data.neck,
        waist: data.waist,
        hip: data.hip,
        gender: data.gender,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [result, setResult] = useState(null);

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
      const { data } = await axiosInstance.post("/test/fat-rate", {
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
              max={150}
              min={0}
              value={userData.weight}
              disabled={isEdit}
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
        <div className="sliderContent">
          <p className="sliderText">Yaşınızı Giriniz</p>
          <div className="row">
            <Slider
              max={80}
              disabled={isEdit}
              min={1}
              value={userData.age}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "age")}
            />
            <Input
              value={userData.age}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "age")}
            />
          </div>
        </div>
        <div className="sliderContent">
          <p className="sliderText">Boyun Çevresi Genişliğinizi Giriniz (cm)</p>
          <div className="row">
            <Slider
              max={90}
              min={1}
              disabled={isEdit}
              value={userData.neck}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "neck")}
            />
            <Input
              value={userData.neck}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "neck")}
            />
          </div>
        </div>
        <div className="sliderContent">
          <p className="sliderText">Bel Çevresi Genişliğinizi Giriniz (cm)</p>
          <div className="row">
            <Slider
              max={150}
              min={0}
              disabled={isEdit}
              value={userData.waist}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "waist")}
            />
            <Input
              value={userData.waist}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "waist")}
            />
          </div>
        </div>
        <div className="sliderContent">
          <p className="sliderText">Kalça Çevresi Genişliğinizi Giriniz (cm)</p>
          <div className="row">
            <Slider
              max={150}
              disabled={isEdit}
              min={0}
              value={userData.hip}
              style={{ width: "280px", marginRight: "20px" }}
              onChange={(e) => handleChangeState(e.target.value, "hip")}
            />
            <Input
              value={userData.hip}
              disabled={isEdit}
              type="number"
              style={{ width: "60px" }}
              onChange={(e) => handleChangeState(e.target.value, "hip")}
            />
          </div>
        </div>
        <div className="sliderContent">
          <p className="sliderText">Cinsiyetinizi Seçiniz</p>
          <div className="row">
            <ManIcon
              style={{
                width: "60px",
                color: userData.gender === 0 ? "rgb(97,97,201)" : "#bbb",
              }}
            />
            <Slider
              max={1}
              disabled={isEdit}
              min={0}
              value={userData.gender}
              style={{
                width: "280px",
                marginRight: "20px",
                marginLeft: "20px",
              }}
              onChange={(e) => handleChangeState(e.target.value, "gender")}
            />
            <WomanIcon
              style={{
                width: "60px",
                color: userData.gender === 1 ? "rgb(97,97,201)" : "#bbb",
              }}
            />
          </div>
        </div>
      </div>
      {!isEdit && (
        <ModalFooter
          handleCancel={handleClose}
          handleCalculate={handleSubmit}
        />
      )}
    </>
  );

  const renderResult = () => (
    <div className="modalContent">
      <div className="resultCard">
        <div className="cardRow">
          <p>Yağ Oranı Değeriniz</p>
          <p>%{result.result}</p>
        </div>
        <div className="cardRow">
          <p>Durumunuz</p>
          <p>{result.description}</p>
        </div>
        {result.suggestions.split(",").map((item, index) => (
          <div key={index} className="cardRow">
            <p>Öneri {index + 1}</p>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <Modal
      style={customModalStyle}
      isOpen={visible}
      onRequestClose={handleClose}
    >
      <ModalHeader
        title={result ? "Yağ Oranı Test Sonucunuz" : "Yağ Oranı Hesaplama"}
        handleClose={handleClose}
      />
      {result ? renderResult() : renderTest()}
    </Modal>
  );
};

export default FatRateModal;
