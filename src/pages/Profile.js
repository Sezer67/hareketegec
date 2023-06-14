import {
  Pagination,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Description } from "@mui/icons-material/";
import { axiosInstance } from "../login.axios.util";
import FatRateModal from "../components/FatRateModal";
import VkiModal from "../components/VkiModal";
import { userActions } from "../redux/slice/userslice";
import alertify from "alertifyjs";

const Profile = () => {
  const userState = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    ...userState,
  });
  const [isEdit, setIsEdit] = useState(false);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [page, setPage] = useState(1);
  const [visibleVki, setVisibleVki] = useState(false);
  const [visibleFatRate, setVisibleFatRate] = useState(false);
  const [modalData, setModalData] = useState();

  const getResults = async () => {
    try {
      const { data } = await axiosInstance.get("/test/@me");
      setResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResults();
  }, []);

  const onChangeText = (value, key) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };
  const handleSubmit = async () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    try {
      // profile edit
      const {data} = await axiosInstance.put('/user/update', {
        fullName: userData.fullName,
        height: Number(userData.height),
        weight: Number(userData.weight),
        neck: Number(userData.neck),
        waist: Number(userData.waist),
        hip: Number(userData.hip),
      });
      dispatch(userActions.setUser(data));
      setIsEdit(false);
      alertify.success("Bilgileriniz Güncellendi");
    } catch (error) {
      throw error;
    }
  };

  const handleDetailPress = async (key, id) => {
    try {
      const { data } = await axiosInstance.get(`/test/${key}/${id}`);
      setModalData(data);
      if (key === "vki") {
        setVisibleVki(true);
      }
      if (key === "fat-rate") {
        setVisibleFatRate(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderVki = () => (
    <>
      <TableContainer key="vki" component={Paper}>
        <Table style={{ border: 0 }} sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow style={{ borderBottom: "1px solid #ccc" }}>
              <TableCell className="tableCell">Değer</TableCell>
              <TableCell className="tableCell">Açıklama</TableCell>
              <TableCell className="tableCell">Öneriler</TableCell>
              <TableCell className="tableCell">Tarih</TableCell>
              <TableCell className="tableCell">Veriler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.vki.rows
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.result}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.description || "Bu değer aralığı geçersizdir."}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.suggestions}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {new Date(row.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                    align="center"
                  >
                    <button
                      onClick={() => handleDetailPress("vki", row.vkiId)}
                      style={{
                        border: 0,
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <Description
                        style={
                          index % 2 === 1
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={page}
        onChange={(e, page) => setPage(page)}
        count={Math.ceil(results.vki.count / 10)}
        size="medium"
      />
    </>
  );

  const renderFatRate = () => (
    <>
      <TableContainer key="fatrate" component={Paper}>
        <Table style={{ border: 0 }} sx={{ minWidth: 650 }} size="small">
          <TableHead>
            <TableRow style={{ borderBottom: "1px solid #ccc" }}>
              <TableCell className="tableCell">Değer</TableCell>
              <TableCell className="tableCell">Açıklama</TableCell>
              <TableCell className="tableCell">Öneriler</TableCell>
              <TableCell className="tableCell">Tarih</TableCell>
              <TableCell className="tableCell">Veriler</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.fatRate.rows
              .slice((page - 1) * 10, (page - 1) * 10 + 10)
              .map((row, index) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.result}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.description || "Bu değer aralığı geçersizdir."}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {row.suggestions}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                  >
                    {new Date(row.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell
                    className="tableCell"
                    style={
                      index % 2 === 1
                        ? {
                            backgroundColor: "rgba(97,97,201,0.3)",
                            color: "white",
                          }
                        : {}
                    }
                    align="center"
                  >
                    <button
                      onClick={() =>
                        handleDetailPress("fat-rate", row.fatRateId)
                      }
                      style={{
                        border: 0,
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      <Description
                        style={
                          index % 2 === 1
                            ? {
                                color: "white",
                              }
                            : {}
                        }
                      />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={page}
        onChange={(e, page) => setPage(page)}
        count={Math.ceil(results.fatRate.count / 10)}
        size="medium"
      />
    </>
  );

  return (
    <div className="profile">
      <div style={{ padding: "20px", width: "40%" }}>
        <h2>Kullanıcı Bilgilerim</h2>
        <div
          id="info"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <TextField
            id="fullName"
            disabled={!isEdit}
            variant="outlined"
            label="Adınız Soyadınız"
            value={userData.fullName}
            onChange={(e) => onChangeText(e.target.value, "fullName")}
          />
          <div
            style={{
              width: "100%",
              position: "relative",
              justifyContent: "center",
            }}
          >
            <TextField
              id="email"
              style={{ width: "100%" }}
              disabled
              autoComplete="email"
              variant="outlined"
              label="Email Adresiniz"
              value={userData.email}
              onChange={(e) => onChangeText(e.target.value, "email")}
            />
            <Check
              style={{
                color: "green",
                position: "absolute",
                right: "10px",
                top: "15px",
              }}
            />
          </div>
          <TextField
            id="height"
            disabled={!isEdit}
            type="number"
            variant="outlined"
            label="Boyunuz (cm)"
            value={userData.height}
            onChange={(e) => onChangeText(e.target.value, "height")}
          />
          <TextField
            id="weight"
            disabled={!isEdit}
            type="number"
            variant="outlined"
            label="Kilonuz (kg)"
            value={userData.weight}
            onChange={(e) => onChangeText(e.target.value, "weight")}
          />
          <TextField
            type="number"
            disabled={!isEdit}
            id="neck"
            variant="outlined"
            label="Boyun Genişliğiniz (cm)"
            value={userData.neck}
            onChange={(e) => onChangeText(e.target.value, "neck")}
          />
          <TextField
            type="number"
            disabled={!isEdit}
            id="waist"
            variant="outlined"
            label="Bel Genişliğiniz (cm)"
            value={userData.waist}
            onChange={(e) => onChangeText(e.target.value, "waist")}
          />
          <TextField
            type="number"
            disabled={!isEdit}
            id="hip"
            variant="outlined"
            label="Kalça Genişliğiniz (cm)"
            value={userData.hip}
            onChange={(e) => onChangeText(e.target.value, "hip")}
          />
        </div>
        <button className="rightButton" onClick={handleSubmit}>
          {isEdit ? "Onayla" : "Düzenle"}
        </button>
      </div>
      <div style={{ padding: "20px", width: "60%" }}>
        <h2>Test Sonuçlarım</h2>
        <div style={{ marginBottom: "20px" }}>
          <Tabs
            value={activeTab}
            onChange={(e, value) => {
              setActiveTab(value);
              setPage(1);
            }}
          >
            <Tab label="Vücut Kütle İndeksİ" />
            <Tab label="Yağ Oranı" />
          </Tabs>
        </div>
        {results ? (
          <>{activeTab === 0 ? renderVki() : renderFatRate()}</>
        ) : null}
      </div>
      {visibleFatRate && (
        <FatRateModal
          isEdit
          data={modalData}
          visible={visibleFatRate}
          setVisible={setVisibleFatRate}
        />
      )}
      {visibleVki && (
        <VkiModal
          isEdit
          data={modalData}
          visible={visibleVki}
          setVisible={setVisibleVki}
        />
      )}
    </div>
  );
};

export default Profile;
