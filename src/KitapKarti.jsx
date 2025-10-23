import React from "react";

const KitapKarti = ({ id, baslik, yazar, kategori, favorideMi, toggleFavori }) => {
    return (
        <div className="kitap-karti">
            <div>
                <h3>{baslik}</h3>
                <p>{yazar} - {kategori}</p>
            </div>
            <button
                onClick={() => toggleFavori(id)}
                className={favorideMi ? "btn-favoride" : "btn-ekle"}
            >
                <span>⭐</span> {favorideMi ? "Favoride" : "Favori Ekle"}
            </button>
        </div>
    );
};

export default KitapKarti;
