import RootLayout from "@/Layouts/RootLayout";
import { formatAmount, formatDateTime } from "@/utils/utils";
import React from "react";
import {
    MdCheckCircle, // Pour statut Payé
    MdCancel, // Pour statut Non Payé
    MdOutlineAccountBalanceWallet, // Icône générale pour l'historique
    MdPhoneIphone, // Icône pour le téléphone
    MdCalendarToday, // Icône pour la date
    MdAttachMoney, // Icône pour le montant
} from "react-icons/md";

// NB: J'ai retiré le `$transactions` du destructuring pour éviter l'ambiguïté avec la variable de test.
export default function TransactionsHistory({
    transactions: initialTransactions,
}) {
    const transactions =
        initialTransactions && initialTransactions.length > 0
            ? initialTransactions
            : [
                  {
                      id: 1,
                      type: "recharge",
                      reference: "F.01012022.1630.A2332",
                      amount: 5000,
                      status: 1, // 1 pour payé et 0 pour non payé
                      phone: "23769696969",
                      created_at: "2022-01-01 16:30:00",
                  },
                  {
                      id: 2,
                      type: "recharge",
                      reference: "F.11112025.1508.W4565",
                      amount: 7500,
                      status: 0, // 1 pour payé et 0 pour non payé
                      phone: "23767777777",
                      created_at: "2025-02-01 15:08:00",
                  },
                  {
                      id: 3,
                      type: "paiement",
                      reference: "P.05032024.1015.Z9876",
                      amount: 15000,
                      status: 1,
                      phone: "23768888888",
                      created_at: "2024-03-05 10:15:00",
                  },
              ];

    const isEmpty = transactions.length === 0;

    return (
        <RootLayout>
            <div className="min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8">
                <header className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-100 flex items-center">
                        <MdOutlineAccountBalanceWallet className="mr-3 text-indigo-400" />
                        Historique des Transactions
                    </h1>
                </header>

                {/* --- Gestion de l'état vide --- */}
                {isEmpty && (
                    <section className="flex flex-col items-center justify-center py-20 bg-gray-800 rounded-lg shadow-xl">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                            alt="empty history"
                            className="w-24 h-24 mb-4 opacity-75"
                        />
                        <h2 className="text-center text-xl font-semibold text-gray-300">
                            Aucun historique de Transactions
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Vos transactions récentes apparaîtront ici.
                        </p>
                    </section>
                )}

                {/* --- Affichage de la liste des transactions --- */}
                {!isEmpty && (
                    <div className="overflow-x-auto shadow-2xl rounded-lg bg-gray-800">
                        <table className="min-w-full divide-y divide-gray-700">
                            <thead className="bg-gray-700">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Type / Référence
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Montant / Téléphone
                                    </th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Statut
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                        Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-800 divide-y divide-gray-700">
                                {transactions.map((transaction) => (
                                    <tr
                                        key={transaction.id}
                                        className="hover:bg-gray-700 transition duration-150"
                                    >
                                        {/* Type / Référence */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <div
                                                    className={`text-sm font-semibold capitalize ${
                                                        transaction.type ===
                                                        "recharge"
                                                            ? "text-green-400"
                                                            : "text-yellow-400"
                                                    }`}
                                                >
                                                    {transaction.type}
                                                </div>
                                                <div className="text-xs text-gray-400 mt-1">
                                                    Réf: **
                                                    {transaction.reference}**
                                                </div>
                                            </div>
                                        </td>
                                        {/* Montant / Téléphone */}
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <div className="text-sm font-bold text-gray-100 flex items-center">
                                                    <MdAttachMoney className="text-lg mr-1 text-indigo-400" />
                                                    {formatAmount(
                                                        transaction.amount
                                                    )}
                                                </div>
                                                <div className="text-xs text-gray-400 mt-1 flex items-center">
                                                    <MdPhoneIphone className="mr-1" />
                                                    {transaction.phone}
                                                </div>
                                            </div>
                                        </td>

                                        {/* Statut */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                            {transaction.status === 1 ? (
                                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-green-900 text-green-300">
                                                    <MdCheckCircle className="mr-1 text-lg" />
                                                    Payé
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-3 py-1 text-xs font-semibold leading-5 rounded-full bg-red-900 text-red-300">
                                                    <MdCancel className="mr-1 text-lg" />
                                                    Non Payé
                                                </span>
                                            )}
                                        </td>
                                        {/* Date */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                            <div className="flex items-center">
                                                <MdCalendarToday className="mr-2 text-indigo-400" />
                                                {formatDateTime(
                                                    transaction.created_at
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </RootLayout>
    );
}
