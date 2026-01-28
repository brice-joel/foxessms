import React, { useState, useEffect } from "react";

// URL supposée pour récupérer la liste des pays.
// Si vous utilisez votre URL pour le solde, la structure JSON sera différente.
const API_URL = "https://faussms.com/stubs/handler_api.php";
// REMPLACEZ CETTE VALEUR par votre clé d'API réelle
const API_KEY = "28u73dux4mxo3imspwg1xbx91ki9hmfo";
// Action pour récupérer la liste des pays (getCountries)
// Si vous voulez le solde, utilisez 'getBalance'
const ACTION = "getCountries";

function FetchApiData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // Construction de l'URL complète avec les paramètres
            const url = `${API_URL}?api_key=${API_KEY}&action=${ACTION}`;
            url =
                "https://faussms.com/stubs/handler_api.php?action=getCountries&api_key=28u73dux4mxo3imspwg1xbx91ki9hmfo";

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        `Erreur HTTP: Le statut est ${response.status}`
                    );
                }

                // Récupération des données au format JSON
                const json = await response.json();

                // --- Affichage des données dans la console (comme demandé) ---
                console.log(`✅ Données ${ACTION} récupérées :`, json);
                // ------------------------------------------------------------------

                setData(json);
            } catch (e) {
                console.error(
                    "❌ Erreur lors de la récupération des données:",
                    e
                );
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Le tableau vide [] garantit que useEffect ne s'exécute qu'une seule fois après le rendu initial

    // Affichage dans le composant (optionnel, pour l'interface utilisateur)
    if (loading) return <div>Chargement des données...</div>;
    if (error)
        return <div>Erreur: {error}. Vérifiez votre clé d'API et l'URL.</div>;

    // Si les données sont récupérées, on peut les afficher ou simplement
    // laisser l'affichage dans la console faire le travail (comme demandé).
    return (
        <div>
            <h2>Résultats de l'API faussms.com</h2>
            <p>
                Les données JSON brutes ont été affichées dans la **console de
                votre navigateur**.
            </p>
            {/* Afficher un aperçu si vous voulez, ex: */}
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default FetchApiData;
