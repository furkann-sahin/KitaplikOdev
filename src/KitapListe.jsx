import React from "react";
import KitapKarti from "./KitapKarti";

const KitapListe = ({ kitaplar, favoriler, toggleFavori }) => {
    if (kitaplar.length === 0) {
        return <p style={{ color: "#777" }}>Hiç kitap bulunamadı.</p>;
    }

    return (
        <div>
            {kitaplar.map((kitap) => (
                <KitapKarti
                    key={kitap.id}
                    {...kitap}
                    favorideMi={favoriler.includes(kitap.id)}
                    toggleFavori={toggleFavori}
                />
            ))}
        </div>
    );
};

export default KitapListe;
