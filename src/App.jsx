import React, { useEffect, useState } from "react";
import { kitaplar as tumKitaplar } from "./Kitaplar";

import AramaCubugu from "./AramaCubugu";
import KategoriFiltre from "./KategoriFiltre";
import KitapListe from "./KitapListe";
import FavoriPaneli from "./FavoriPaneli";
import "./index.css";


const App = () => {
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("aramaMetni") || "");
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, favoriler]);

  const filtrelenmisKitaplar = tumKitaplar.filter((kitap) => {
    const baslikUyum = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUyum = kategori === "Tümü" || kitap.kategori === kategori;
    return baslikUyum && kategoriUyum;
  });

  const toggleFavori = (id) => {
    setFavoriler((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      <h1>Mini Kitaplık</h1>

      <div className="top-controls">
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      <div className="content">
        <div className="kitaplar">
          <KitapListe kitaplar={filtrelenmisKitaplar} favoriler={favoriler} toggleFavori={toggleFavori} />
        </div>

        <FavoriPaneli favoriler={favoriler} kitaplar={tumKitaplar} toggleFavori={toggleFavori} />
      </div>
    </div>
  );
};

export default App;

