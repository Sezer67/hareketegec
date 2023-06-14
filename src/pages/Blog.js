import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { nutrionApi } from "../nutrion.axios.util";

const Blog = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchList = async () => {
    const URL = "https://api.calorieninjas.com/v1";
    const nutrionURL = `/nutrition?query=${searchTerm}`;

    await nutrionApi
      .get(URL + nutrionURL)
      .then((resp) => {
        // console.log("Response:",resp.data.items); //inspect de yazıyor.
        setData(resp.data.items);
        console.log(resp.data);
      })
      .catch((err) => {})
      .finally(() => {
      });
  };

  return (
    <div className="CalorieImage">
      <div className="CalorieBody">
        <div className="CalorieTitle">
          Kalorisini öğrenmek istediğiniz yemeği,besini,atıştırmalğı ingilizce
          aratabilirsiniz.
          <br></br>
          <i>
            (Örnek: Cheddar Crispy Bread Tomato Soup ,Large chicken barbecue
            pizza,10oz onion and a tomato,Doritos,oreo vb..)
          </i>
        </div>
        <div className="CalorieSearchBar">
          <Box>
            <TextField
              id="demo-helper-text-aligned"
              label="Besin"
              onChange={handleChange}
            />
          </Box>
        </div>
        <div className="NutritionResults">
          <div className="NutritionResultsTable">
            {data?.map((data, index) => (
              <p key={data.name + index}>
                <table>
                  <tr>
                    <th>Besin</th>
                    <th>Kalori</th>
                    <th>Karbonhidrat</th>
                    <th>Kolesterol</th>
                    <th>Doymuş Yağ</th>
                    <th>Toplam Yağ</th>
                    <th>Lif</th>
                    <th>Potasyum</th>
                    <th>Protein</th>
                    <th>Servis Boyutu</th>
                    <th>Sodyum</th>
                    <th>Şeker</th>
                  </tr>

                  <tr>
                    <th>{data.name}</th>
                    <th>{data.calories} Kalori</th>
                    <th>{data.carbohydrates_total_g} g</th>
                    <th>{data.cholesterol_mg} mg</th>
                    <th>{data.fat_saturated_g} g</th>
                    <th>{data.fat_total_g} g</th>
                    <th>{data.fiber_g} g</th>
                    <th>{data.potassium_mg} mg</th>
                    <th>{data.protein_g} g</th>
                    <th>{data.serving_size_g} g</th>
                    <th>{data.sodium_mg} mg</th>
                    <th>{data.sugar_g} g</th>
                  </tr>
                </table>
              </p>
            ))}
            <div className="NutritionResultsTableButton">
              <button onClick={fetchList}>Göster</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
