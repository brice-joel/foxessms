import React, { useState, useEffect } from "react";
import RootLayout from "@/Layouts/RootLayout";

// L'URL est maintenant votre propre API Laravel!
const PROXY_URL = "/api/faussms/countries";

function Test() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Le navigateur appelle votre propre serveur Laravel (même origine)
                const response = await fetch(PROXY_URL);

                if (!response.ok) {
                    throw new Error(
                        `Erreur HTTP: Le statut est ${response.status}`
                    );
                }

                const json = await response.json();

                // Les données s'affichent maintenant dans la console sans erreur CORS
                console.log(
                    "✅ Données des pays récupérées via le Proxy Laravel :",
                    json
                );

                setData(json);
                console.log(json);
            } catch (e) {
                console.error(
                    "❌ Erreur lors de la récupération via le proxy:",
                    e
                );
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Affichage du statut dans l'interface utilisateur
    if (loading) return <div>Chargement des données via Laravel...</div>;
    if (error) return <div>Erreur de Proxy: {error}</div>;

    return (
        <RootLayout>
            <div>
                <h2>Liste des Pays Faussms (via Laravel Proxy)</h2>
                {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            </div>
        </RootLayout>
    );
}

export default Test;
