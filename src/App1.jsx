// 
import React, { useState } from 'react';

const SmartPhoneBrandList = [
    { label: "iPhone", value: "iPhone" },
    { label: "Samsung", value: "Samsung" },
    { label: "Huawei", value: "Huawei" },
    { label: "Google Pixel", value: "Google Pixel" },
    { label: "OnePlus", value: "OnePlus" },
    { label: "Realme", value: "Realme" },
    { label: "Readme", value: "Readme" },
    { label: "LG", value: "LG" },
    { label: "Motorola", value: "Motorola" },
    { label: "Moka", value: "Moka" },
    { label: "Moto G", value: "Moto G" },
    { label: "Moto E", value: "Moto E" },
    { label: "Nokia", value: "Nokia" },
    { label: "Nubia", value: "Nubia" },
    { label: "Nextbit", value: "Nextbit" },
    { label: "Oppo", value: "Oppo" },
    { label: "OnePlus Nord", value: "OnePlus Nord" },
    { label: "Panasonic", value: "Panasonic" },
    { label: "Poco", value: "Poco" },
    { label: "Palm", value: "Palm" },
    { label: "Sony Xperia X", value: "Sony Xperia X" }
];

function App1() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredBrands = searchTerm === '' ? [] : SmartPhoneBrandList.filter((brand) =>
        brand.label.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

    return (
        <div style={{ textAlign: 'center', marginTop: '50px',marginLeft:"600px" }}>
            <h1 
                style={{
                    color: 'pink',
                    fontFamily: 'cursive',
                    fontSize: '50px'
                }}
            >
                Enter the required item
            </h1>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search for a brand..."
                style={{
                    fontSize: '30px',
                    padding: '10px',
                    width: '50%',
                    margin: '20px 0'
                }}
            />
            {filteredBrands.length > 0 && (
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {filteredBrands.map((brand) => (
                        <li 
                            key={brand.value}
                            style={{
                                fontSize: '25px',
                                padding: '10px 0',
                                borderBottom: '1px solid #ccc'
                            }}
                        >
                            {brand.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default App1;
