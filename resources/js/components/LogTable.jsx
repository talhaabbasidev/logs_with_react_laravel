import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

export default function LogTable() {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filteredLogs, setFilteredLogs] = useState([]);

    useEffect(() => {
        axios.get("/api/logs")
            .then(res => {
                setLogs(res.data.data);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
    const result = logs.filter(log =>
            log.title.toLowerCase().includes(search.toLowerCase()) ||
            log.status.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredLogs(result);
    }, [search, logs]);

    const subHeaderComponent = (
        <input
            type="text"
            placeholder="Search logs..."
            className="border p-2 rounded w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );

    const columns = [
        {
            name: "ID",
            selector: row => row.id,
            sortable: true,
        },
        {
            name: "Title",
            selector: row => row.title,
            sortable: true,
        },
        {
            name: "Status",
            selector: row => row.status,
            cell: row => (
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
                    {row.status}
                </span>
            )
        },
        {
            name: "Date",
            selector: row => new Date(row.date).toLocaleString(),
        }
    ];

    return (
        <DataTable
            title="Logs"
            columns={columns}
            data={filteredLogs}
            progressPending={loading}
            pagination
            highlightOnHover
            striped
            subHeader
            subHeaderComponent={subHeaderComponent}
        />
    );
}