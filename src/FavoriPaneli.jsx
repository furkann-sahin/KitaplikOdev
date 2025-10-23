import React from "react";

const FavoriPaneli = ({ favoriler, kitaplar, toggleFavori }) => {
    const favoriKitaplar = kitaplar.filter((k) => favoriler.includes(k.id));

    return (
        <div className="favori-paneli">
            <h2>Favoriler ({favoriKitaplar.length})</h2>
            {favoriKitaplar.length === 0 ? (
                <p style={{ color: "#777" }}>Henüz favori yok.</p>
            ) : (
                <ul>
                    {favoriKitaplar.map((k) => (
                        <li key={k.id}>
                            • {k.baslik}{" "}
                            <button onClick={() => toggleFavori(k.id)}>Kaldır</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoriPaneli;
