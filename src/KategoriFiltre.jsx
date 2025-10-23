import React from "react";

const KategoriFiltre = ({ kategori, setKategori }) => {
    const kategoriler = ["Tümü", "Web", "CS", "Tasarım"];

    return (
        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
            {kategoriler.map((kat) => (
                <option key={kat} value={kat}>
                    {kat}
                </option>
            ))}
        </select>
    );
};

export default KategoriFiltre;
