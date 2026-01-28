// Fonction pour formater le montant en FCFA
const formatAmount = (amount) => {
    return new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XAF", // Code CFA
    }).format(amount);
};
const formatDateTime = (datetime) => {
    return new Date(datetime).toLocaleString("fr-FR", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

export { formatAmount, formatDateTime };
