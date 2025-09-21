import React, { useEffect, useState } from "react";
import axios from "axios";

export default function VipList() {
  const [vips, setVips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "https://expressrichpepole.onrender.com/";
        let { data } = await axios.get(url);
        setVips(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>List of VIP:</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {vips.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
              boxShadow: "0px 3px 8px rgba(0,0,0,0.2)",
              borderRadius: "10px",
              background: "#f9f9f9",
            }}
          >
            <div>
              <h3>{item.name}</h3>
              <p>Money: {item.worth}</p>
              <p>Company: {item.source}</p>
            </div>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
